export default function searchText() {
    return {
        restrict: 'E',
        scope: {
            'searchTextHandler': '&',
        },
        controller: function($scope) {
            $scope.searchText = '';
            $scope.onChange = function() {
                $scope.searchTextHandler({searchText: $scope.searchText});
            };
        },
        templateUrl: './templates/search-text.html',
    };
}
