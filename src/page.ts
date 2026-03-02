import { icons } from "./icons";
import { generateFromText } from "./md";
import { getItemFromPath, getPageFromItem, gotoPage } from "./sidebar";

export type MdPage = {
    type: "md",
    content: string,
    description?: string,
    category_path?: string[]
};

export type DirPage = {
    type: "dir",
    children: Record<string, Page>,
    description?: string,
    category_path?: string[]
};

export type Page = MdPage | DirPage;

export function generatePage(path: string[]) {
    const item = getItemFromPath(path);
    const page = getPageFromItem(item);

    const container = document.getElementById("content-container")!;
    container.innerText = "";

    generatePageHeader(page, path, container);
    
    switch (page.type) {
        case "md":
            generateMdPage(page, container);
            break;
        case "dir":
            generateDirPage(page, path, container);
            break;
    }
}

function generatePageHeader(page: Page, path: string[], container: HTMLElement) {
    const header = document.createElement("header");

    if (page.category_path) {
        const pathElem = document.createElement("div");

        for (let i = 0; i < page.category_path.length; i++) {
            const name = page.category_path[i];
            
            // TODO: make this a link?
            const nameElem = document.createElement("span");
            nameElem.textContent = name.toUpperCase();
            pathElem.appendChild(nameElem);

            if (i < page.category_path.length - 1) {
                const iconElem = document.createElement("div");
                iconElem.innerHTML = icons.right(15);
                pathElem.appendChild(iconElem);
            }
        }

        header.appendChild(pathElem);
    }

    const nameElem = document.createElement("h1");
    nameElem.textContent = path[path.length - 1];
    header.appendChild(nameElem);

    container.appendChild(header);
}

function generateMdPage(page: MdPage, container: HTMLElement) {
    generateFromText(page.content, container);
}

function generateDirPage(page: DirPage, path: string[], container: HTMLElement) {
    const entries = Object.entries(page.children);

    const grid = document.createElement("div");
    grid.className = "page-dir-grid";

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        const elem = document.createElement("a");
        elem.addEventListener("click", () => {
            gotoPage([...path, entry[0]]);
        });
        elem.textContent = entry[0];

        const icon = document.createElement("div");
        icon.innerHTML = icons.right(20);
        elem.appendChild(icon);

        grid.appendChild(elem);
    }

    container.appendChild(grid);
}

setTimeout(() => {
    gotoPage(["fr"]);
}, 100);
