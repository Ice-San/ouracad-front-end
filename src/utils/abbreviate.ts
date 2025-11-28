export const abbreviate = (text: string) => {
    if(text.length < 9) {
        return text;
    }

    return text.slice(0, 9);
}