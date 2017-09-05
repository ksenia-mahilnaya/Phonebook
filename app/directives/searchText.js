export default function searchText() {
    return {
        restrict: 'E',
        scope: {
            'searchTextHandler': '&',
            'searchText': '='
        },
        templateUrl: './templates/search-text.html',
    };
}
