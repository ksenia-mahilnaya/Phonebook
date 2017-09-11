export default function phoneBookFilter() {
    return function (items, searchText) {
        const filtered = [];
        const textMatch = new RegExp(searchText, 'i');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (textMatch.test(item.name)) {
                filtered.push(item);
            }
        }
        return filtered;
    }
}
