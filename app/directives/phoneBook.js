export default function phoneBook() {
    return {
        restrict: 'E',
        controller: function($scope) {
            $scope.searchText = '';
            $scope.isNumbersVisible = true;
        },
        templateUrl: './templates/phone-book.html'
    };
}
