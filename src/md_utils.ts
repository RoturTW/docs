import { generateText, generateTextElementPart } from "./md";

export function generateList(tokens: string[], parent: HTMLElement, indent: number) {
    const marker = tokens[0];
    const isOrdered = /\d+\./.test(marker);
    const elem = document.createElement(isOrdered ? "ol" : "ul");

    if (isOrdered)
        (elem as HTMLOListElement).start = parseInt(tokens.shift()!.slice(0, -1));
    else
        tokens.shift();

    const appendItem = () => {
        const item = document.createElement("li");
        generateText(tokens, item);

        if (tokens[0] == "\n" && /^ +$/.test(tokens[1])) {
            const nextIndent = tokens[1].length;
            if (nextIndent > indent) {
                tokens.shift();
                tokens.shift();
                if (isListMarker(tokens[0]))
                    generateList(tokens, item, nextIndent);
            }
        }

        elem.appendChild(item);
    };

    appendItem();

    while (tokens[0] == "\n") {
        const hasIndent = /^ +$/.test(tokens[1]);
        const indentLen = hasIndent ? tokens[1].length : 0;
        const markerIdx = hasIndent ? 2 : 1;

        if (indentLen != indent)
            break;
        if (!isListMarker(tokens[markerIdx]))
            break;

        tokens.shift();
        if (hasIndent)
            tokens.shift();
        if (isOrdered)
            tokens.shift();
        else
            tokens.shift();
        appendItem();
    }

    parent.appendChild(elem);
}

export function isListMarker(token: string): boolean {
    return token != null && (["+", "-", "*"].includes(token) || /\d+\./.test(token));
}

export function isTableRow(tokens: string[], offset: number = 0): boolean {
    let i = offset;
    while (i < tokens.length && tokens[i] == " ") i++;
    return i < tokens.length && tokens[i] == "|";
}

function consumeTableRow(tokens: string[]): string[][] {
    while (tokens[0] == " ") tokens.shift();
    if (tokens[0] == "|") tokens.shift();

    let raw = "";
    while (tokens.length > 0 && tokens[0] != "\n") {
        raw += tokens.shift();
    }

    return raw
        .split("|")
        .map(cell => [cell])
        .filter((_, i, arr) => i < arr.length - 1 || arr[arr.length - 1][0].trim() != "");
}

function isTableSeparatorRow(cells: string[][]): boolean {
    return cells.every(cell => /^ *:?-+:? *\|?$/.test(cell.join("").trim()));
}

function parseCellAlignment(cell: string[]): string {
    const raw = cell.join("").trim().replace(/\|$/, "");
    const left = raw.startsWith(":");
    const right = raw.endsWith(":");
    if (left && right) return "center";
    if (right) return "right";
    if (left) return "left";
    return "left";
}

export function generateTable(tokens: string[], parent: HTMLElement) {
    const headerCells = consumeTableRow(tokens);

    if (tokens[0] == "\n") tokens.shift();

    if (!isTableRow(tokens)) {
        const p = document.createElement("p");
        p.textContent = headerCells.flat().join("");
        parent.appendChild(p);
        return;
    }

    const separatorCells = consumeTableRow(tokens);

    if (!isTableSeparatorRow(separatorCells)) {
        const p = document.createElement("p");
        p.textContent = headerCells.flat().join("");
        parent.appendChild(p);
        return;
    }

    const alignments = separatorCells.map(parseCellAlignment);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    for (let i = 0; i < headerCells.length; i++) {
        const th = document.createElement("th");
        if (alignments[i])
            th.style.textAlign = alignments[i];
        const cellTokens = [...headerCells[i]];
        while (cellTokens.length > 0)
            generateTextElementPart(cellTokens, th);
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    while (tokens[0] == "\n" && isTableRow(tokens, 1)) {
        tokens.shift();
        const rowCells = consumeTableRow(tokens);
        const tr = document.createElement("tr");

        for (let i = 0; i < rowCells.length; i++) {
            const td = document.createElement("td");
            if (alignments[i])
                td.style.textAlign = alignments[i];
            const cellTokens = [...rowCells[i]];
            while (cellTokens.length > 0)
                generateTextElementPart(cellTokens, td);
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    parent.appendChild(table);
}

export function removeIndent(input: string): string {
    const lines = input.split("\n");

    const nonEmpty = lines.filter(l => l.trim() !== "");
    if (nonEmpty.length === 0)
        return input;

    const minIndent = Math.min(
        ...nonEmpty.map(l => l.match(/^ */)![0].length)
    );

    return lines.map(l => l.slice(minIndent)).join("\n");
}