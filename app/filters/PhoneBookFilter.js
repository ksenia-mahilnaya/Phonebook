export default function PhoneBookFilter() {
    return function (items, searchText) {
        const filtered = [];
        const textMatch = new RegExp(searchText, 'i');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (textMatch.test(item.name)) {
                filtered.push(item);
            }
        }
        console.log(filtered);
        return filtered;
    }
}
