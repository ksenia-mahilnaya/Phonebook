.filter('filterContactNames', function() {
    if (_.isEmpty(this.searchText)) {
        this.filteredList = this.contacts;
        return;
    }
    const searchText = this.searchText.toLowerCase();
    this.filteredList = _.filter(this.contacts, function(item) {
        return item.indexOf(searchText) !== -1;
    });
});
