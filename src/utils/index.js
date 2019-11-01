export function mathToLatex(math) {
    return math
        .replace(/(\w+|\(.*\))\/(\w+|\(.*\))?/g, '\\frac{$1}{$2}')
        .replace(/sqrt\(([^)]*)\)?/g, '\\sqrt{$1}')
        .replace('%', '\\%')
        .replace(/~~/g, '');
}