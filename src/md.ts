import { highlight, tokenTypeToCssClass } from "./highlighter";
import { icons } from "./icons";
import { generateList, generateTable, isListMarker, isTableRow, removeIndent } from "./md_utils";

function tokenise(text: string): string[] {
    const tkns = text.match(/https?:\/\/[^\s)]+|___|__|_| *-+:\|| *-+ *\||\[[ x]\]|-+|---|\*\*\*|__|!?\[[^\]]+\]\(https?:\/\/[^\s)]+\)|~~|\^|~|\*\*|#|>\s*\[!\w+\]|>| +|@@\w+|```|`|\d+\.|\.+|[a-zA-Z.]+|\n|[a-zA-Z]+|./gm);
    
    return tkns as string[];
}

export function generateFromText(text: string, container: HTMLElement): HTMLDivElement {
    const start = performance.now();
    const elem = generate(tokenise(text), container);
    console.log(`generated md in ${performance.now() - start}ms`);
    return elem;
}

function generate(tokens: string[], parent: HTMLElement): HTMLDivElement {
    const container = document.createElement("div");
    container.className = "md-container";

    while (tokens.length > 0) {
        while (tokens[0] == "\n" && tokens.length > 0)
            tokens.shift();
        generateElement(tokens, container);
    }

    parent.appendChild(container);

    return container;
}

function generateUntil(tokens: string[], until: string, parent: HTMLElement) {
    while (tokens[0] == "\n" && tokens.length > 0)
        tokens.shift();
    while (tokens[0] != until && tokens.length > 0) {
        generateElement(tokens, parent);
        while (tokens[0] == "\n" && tokens.length > 0)
            tokens.shift();
    }
}

function generateElement(tokens: string[], parent: HTMLElement) {
    if (tokens[0] == "#") {
        let width = 0;
        while (tokens[0] == "#") {
            tokens.shift();
            width ++;
        }

        const elem = document.createElement(`h${width}`);
        generateText(tokens, elem);
        parent.appendChild(elem);
        return;
    }

    if (/^>\s*\[!(\w+)\]$/.test(tokens[0])) {
        const type = tokens.shift()!.match(/^>\s*\[!(\w+)\]$/)![1].toLowerCase();
        if (tokens[0] == "\n")
            tokens.shift();

        let content = "";
        while (tokens[0] == ">" && tokens.length > 0) {
            tokens.shift();
            while (tokens[0] as string != "\n" && tokens.length > 0)
                content += tokens.shift();
        }

        content = removeIndent(content);

        const tokens2 = tokenise(content);

        const elem = document.createElement("div");
        elem.className = `alert alert-${type}`;

        const header = document.createElement("div");
        header.className = "header";

        const icon_svg = icons[`alert-${type}`] ?? icons[`alert-fallback`];
        if (icon_svg) {
            header.innerHTML = icon_svg(20);
        }

        const title = document.createElement("p");
        title.textContent = type[0].toUpperCase() + type.slice(1);
        header.appendChild(title);

        elem.appendChild(header);

        const body = generate(tokens2, elem);
        body.className = "body";

        parent.appendChild(elem);
    }

    if (tokens[0] == ">") {
        tokens.shift();
        const elem = document.createElement("blockquote");

        generateText(tokens, elem);
        while (tokens[0] as string == "\n" && tokens[1] == ">") {
            tokens.shift();
            tokens.shift();
            generateElement(tokens, elem);
        }

        parent.appendChild(elem);
        return;
    }

    if (["___", "---", "***"].includes(tokens[0])) {
        tokens.shift();
        parent.appendChild(document.createElement("hr"));
        return;
    }

    if (tokens[0] == "```") {
        // parsing
        tokens.shift();
        if (tokens[0] as string == " ")
            tokens.shift();

        let lang = undefined;
        if (tokens[0] as string != "\n")
            lang = tokens.shift();
        if (tokens[0] as string == "\n")
            tokens.shift();
        
        let code = "";
        while (tokens[0] != "```" && !(tokens[0] == "\n" && tokens[1] == "```") && tokens.length > 0)
            code += tokens.shift();

        if (tokens[0] as string == "\n")
            tokens.shift();
        if (tokens[0] == "```")
            tokens.shift();
        
        // actually making the elements
        const elem = document.createElement("div");
        elem.className = "code-block";

        const copy_elem = document.createElement("button");
        copy_elem.innerHTML = icons.copy(20);
        copy_elem.addEventListener("click", () => {
            navigator.clipboard.writeText(code);
        })
        elem.appendChild(copy_elem);

        const content_elem = document.createElement("div");
        content_elem.className = "code-content";

        const lines = highlight(code, lang);

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            const line_elem = document.createElement("div");
            for (let i = 0; i < line.length; i++) {
                const token = line[i];

                const token_elem = document.createElement("span");
                token_elem.className = `code_token ${tokenTypeToCssClass(token.type)}`;
                token_elem.textContent = token.content;
                line_elem.appendChild(token_elem);
            }
            content_elem.appendChild(line_elem);
        }

        elem.appendChild(content_elem);

        parent.appendChild(elem);
        return;
    }

    while (/^!?\[([^\]]+)\]\((https?:\/\/[^\s\]]+)\)$/.test(tokens[0])) {
        const tkn = tokens.shift()!;
        const data = tkn.match(/^!?\[([^\]]+)\]\((https?:\/\/[^\s\]]+)\)$/)!;

        const is_img = tkn.startsWith("!");
        
        if (is_img) {
            const img = document.createElement("img");
            img.src = data[2];
            img.title = data[1];
            parent.appendChild(img);
        } else {
            const elem = document.createElement("a");
            elem.href = data[2];
            elem.textContent = data[1];
            parent.appendChild(elem);
        }
        return;
    }

    if (tokens[0] == "@@column") {
        tokens.shift();

        const elem = document.createElement("div");
        elem.className = "column";

        let column_count = 0;
        while (tokens[0] != "@@column" && tokens.length > 0 && column_count < 2) {
            let column = document.createElement("div");
            column.className = "md-container";
            generateUntil(tokens, "@@column", column);
            if (tokens[0] == "@@column")
                tokens.shift();
            while (tokens[0] == "\n" && tokens.length > 0)
                tokens.shift();
            elem.appendChild(column);
            column_count ++;
        }

        parent.appendChild(elem);
        return;
    }

    if (tokens[0] == "@@box") {
        tokens.shift();

        const elem = document.createElement("div");
        elem.className = "box";

        generateUntil(tokens, "@@box", elem);
        if (tokens[0] == "@@box")
            tokens.shift();

        parent.appendChild(elem);
        return;
    }

    if (isTableRow(tokens)) {
        generateTable(tokens, parent);
        return;
    }

    if (isListMarker(tokens[0])) {
        generateList(tokens, parent, 0);
        return;
    }

    const elem = document.createElement("p");
    generateText(tokens, elem);
    parent.appendChild(elem);
}

export function generateText(tokens: string[], parent: HTMLElement, stop: string = "\n") {
    while (tokens[0] != stop && tokens[0] != "\n" && tokens.length > 0)
        generateTextElementPart(tokens, parent);
}

export function generateTextElementPart(tokens: string[], parent: HTMLElement) {
    if (tokens[0] == "**" || tokens[0] == "__") {
        let type = tokens.shift();
        const elem = document.createElement("bold");
        
        generateText(tokens, elem, type);
        if (tokens[0] == type)
            tokens.shift();

        parent.appendChild(elem);
        return;
    }
    if (tokens[0] == "*" || tokens[0] == "_") {
        let type = tokens.shift();
        const elem = document.createElement("italic");
        
        generateText(tokens, elem, type);
        if (tokens[0] == type)
            tokens.shift();

        parent.appendChild(elem);
        return;
    }
    if (tokens[0] == "~~") {
        tokens.shift();
        const elem = document.createElement("strikethrough");
        
        generateText(tokens, elem, "~~");
        if (tokens[0] == "~~")
            tokens.shift();

        parent.appendChild(elem);
        return;
    }
    if (tokens[0] == "`") {
        tokens.shift();

        let code = "";
        while (tokens[0] != "`" && tokens.length > 0)
            code += tokens.shift();

        if (tokens[0] == "`")
            tokens.shift();
        
        const elem = document.createElement("span");
        elem.className = "code-block-inline";
        elem.textContent = code;
        parent.appendChild(elem);
        return;
    }
    if (tokens[0] == "^") {
        tokens.shift();
        const elem = document.createElement("sup");
        
        generateText(tokens, elem, "^");
        if (tokens[0] == "^")
            tokens.shift();

        parent.appendChild(elem);
        return;
    }
    if (tokens[0] == "~") {
        tokens.shift();
        const elem = document.createElement("sub");
        
        generateText(tokens, elem, "~");
        if (tokens[0] == "~")
            tokens.shift();

        parent.appendChild(elem);
        return;
    }

    if (/^!?\[([^\]]+)\]\((https?:\/\/[^\s\]]+)\)$/.test(tokens[0])) {
        const tkn = tokens.shift()!;
        const data = tkn.match(/^!?\[([^\]]+)\]\((https?:\/\/[^\s\]]+)\)$/)!;

        const is_img = tkn.startsWith("!");
        
        if (is_img) {
            const img = document.createElement("img");
            img.src = data[2];
            img.title = data[1];
            parent.appendChild(img);
        } else {
            const elem = document.createElement("a");
            elem.href = data[2];
            elem.textContent = data[1];
            parent.appendChild(elem);
        }
        return;
    }
    if (/^https?:\/\/[^\s\]]+$/.test(tokens[0])) {
        const url = tokens.shift()!;

        const elem = document.createElement("a");
        elem.href = url;
        elem.textContent = url;
        parent.appendChild(elem);
        return;
    }

    if (["[ ]","[x]"].includes(tokens[0])) {
        const is_checked = tokens.shift() == "[x]";

        const elem = document.createElement("checkbox");
        if (is_checked) {
            elem.innerHTML = icons.check(15);
        }
        parent.appendChild(elem);
        
        return;
    }

    if (parent.lastChild != null && parent.lastChild instanceof HTMLSpanElement) {
        parent.lastChild.textContent += tokens.shift()!;
    } else {
        const elem = document.createElement("span");
        elem.textContent = tokens.shift()!;
        parent.appendChild(elem);
    }
}

//generateFromText(text, document.getElementById("content-container")!);