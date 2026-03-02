import { text } from "./md_test";
import { generatePage, type Page } from "./page";

export type SidebarItem = {
    type: "page",
    content: string,
    children?: Record<string, SidebarItem>,
    description?: string,

    open?: boolean,
    category_path?: string[]
} | {
    type: "dir",
    children: Record<string, SidebarItem>,
    description?: string,

    open?: boolean,
    category_path?: string[]
} | {
    type: "category"
};

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
    silly: { type: "category" },
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

type GenerationContext = {
    current_category?: string
};

let selected_elem: HTMLElement | null = null;
let selected_path: string[] = [];

function generateItems(parent: HTMLElement, items: Record<string, SidebarItem>, path: string[], ctx: GenerationContext = {}) {
    const elem = document.createElement("div");
    elem.className = `sidebar-list`;

    const item_entries = Object.entries(items);
    for (let index = 0; index < item_entries.length; index++) {
        generateItem(elem, ...item_entries[index], path, ctx);
    }

    parent.appendChild(elem);
}

function generateItem(parent: HTMLElement, name: string, item: SidebarItem, path: string[], ctx: GenerationContext) {
    let click_button: HTMLButtonElement | null = null;
    let elem: HTMLElement | null = null;
    switch (item.type) {
        case "page": {
            item.category_path = [...(ctx.current_category != null ? [ctx.current_category] : []), ...path];

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
            item.category_path = [...(ctx.current_category != null ? [ctx.current_category] : []), ...path];

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
            break;
        }
        case "category": {
            const elem = document.createElement("h4");
            elem.textContent = name.toUpperCase();
            parent.appendChild(elem);
            ctx.current_category = name;
            break
        }
    }

    console.log(item);

    if (elem)
        elem.id = `sidebar-select-elem-${[...path, name].join("/")}`;

    if (click_button) {
        click_button.addEventListener("click", () => {
            gotoPage([...path, name]);
        });
    }
}

export function getItemFromPath(path: string[]): SidebarItem {
    let name = path[path.length - 1];
    if (!name)
        throw `invalid path '${path}'`;
    let cur = pages;
    for (let i = 0; i < path.length - 1; i++) {
        const item = cur[path[i]];
        if (!("children" in item))
            throw `invalid path '${path}'`;
        cur = item.children!;
        if (!cur)
            throw `invalid path '${path}'`;
    }

    const page = cur[name];
    if (!page)
        throw `invalid path '${path}'`;

    return page;
}

export function getPageFromItem(item: SidebarItem): Page {
    switch (item.type) {
        case "page":
            return {
                type: "md",
                content: item.content,
                description: item.description,
                category_path: item.category_path
            };
        case "dir":
            return {
                type: "dir",
                children: Object.fromEntries(Object.entries(item.children).map(e => [e[0], getPageFromItem(e[1])])),
                description: item.description,
                category_path: item.category_path
            };
        case "category":
            throw `cannot get page of category`;
    }
}

export function gotoPage(path: string[]) {
    selected_path = path;
    generatePage(selected_path);
    if (selected_elem)
        selected_elem.classList.remove("selected");
    selected_elem = document.getElementById(`sidebar-select-elem-${path.join("/")}`)!;
    if (selected_elem)
        selected_elem.classList.add("selected");
}

function init() {
    gotoPage(["sigma"]);
}

const start = performance.now();

generateItems(document.getElementById("sidebar")!, pages, []);

console.log(`generated sidebar in ${performance.now() - start}ms`);

init();
