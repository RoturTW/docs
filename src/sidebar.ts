import { generatePage } from "./md";
import { text } from "./md_test";

export type SidebarItem = {
    type: "page",
    content: string,
    children?: Record<string, SidebarItem>,

    open?: boolean,
} | {
    type: "dir",
    children: Record<string, SidebarItem>,

    open?: boolean,
};

export type SidebarPage = {
    content: string
} & ({
    type: "page",
} | {
    type: "dir",
    children: Record<string, SidebarPage>
});

const pages: Record<string, SidebarItem> = {
    sigma: {
        type: "page",
        content: text,
        children: {
            insane: {
                type: "page",
                content: "fr"
            },
            no_way: {
                type: "page",
                content: "fr"
            }
        }
    },
    fr: {
        type: "dir",
        children: {
            insane: {
                type: "page",
                content: "fr"
            },
            bleh: {
                type: "dir",
                children: {
                    insane: {
                        type: "page",
                        content: "fr"
                    },
                    no_way: {
                        type: "page",
                        content: "fr"
                    }
                }
            },
            no_way: {
                type: "page",
                content: "fr"
            }
        }
    },
    gay: {
        type: "page",
        content: ":3"
    },
};

let selected_elem: HTMLElement | null = null;

function generateItems(parent: HTMLElement, items: Record<string, SidebarItem>, path: string[]) {
    const elem = document.createElement("div");
    elem.className = `sidebar-list`
    const item_entries = Object.entries(items);
    for (let index = 0; index < item_entries.length; index++) {
        generateItem(elem, ...item_entries[index], path);
    }
    parent.appendChild(elem);
}

function generateItem(parent: HTMLElement, name: string, item: SidebarItem, path: string[]) {
    let click_button: HTMLButtonElement | null = null;
    let elem: HTMLElement;
    switch (item.type) {
        case "page": {
            const button = document.createElement("button");
            button.className = "page";
            click_button = button;
            const txt = document.createElement("span");
            txt.textContent = name;
            button.appendChild(txt);

            if (item.children) {
                const holder = document.createElement("div");
                holder.className = "page";
                holder.appendChild(button);

                const children = document.createElement("div");
                generateItems(children, item.children, [...path, name]);
                holder.appendChild(children);
                
                parent.appendChild(holder);
                elem = holder;
            } else {
                parent.appendChild(button);
                elem = button;
            }
            break;
        }
        case "dir": {
            const button = document.createElement("button");
            click_button = button;
            const txt = document.createElement("span");
            txt.textContent = name;
            button.appendChild(txt);

            const holder = document.createElement("div");
            holder.className = "dir";
            holder.appendChild(button);

            const children = document.createElement("div");
            generateItems(children, item.children, [...path, name]);
            holder.appendChild(children);
            
            parent.appendChild(holder);
            elem = holder;
        }
    }

    if (click_button) {
        click_button.addEventListener("click", () => {
            generatePage([...path, name]);
            if (selected_elem)
                selected_elem.classList.remove("selected");
            selected_elem = elem;
            selected_elem.classList.add("selected");
        });
    }
}

export function getItemFromPath(path: string[]): SidebarItem {
    let name = path.pop();
    if (!name)
        throw `invalid path '${path}'`;
    let cur = pages;
    for (let i = 0; i < path.length; i++) {
        cur = cur[path[i]].children!;
        if (!cur)
            throw `invalid path '${path}'`;
    }

    const page = cur[name];
    if (!page)
        throw `invalid path '${path}'`;

    return page;
}

export function getPageFromItem(item: SidebarItem): SidebarPage {
    switch (item.type) {
        case "page":
            return {
                type: "page",
                content: item.content
            };
        case "dir":
            return {
                type: "dir",
                content: "blehh (need to make an md thing for dirs)",
                children: Object.fromEntries(Object.entries(item.children).map(e => [e[0], getPageFromItem(e[1])]))
            };
    }
}

const start = performance.now();

generateItems(document.getElementById("sidebar")!, pages, []);

console.log(`generated sidebar in ${performance.now() - start}ms`);
