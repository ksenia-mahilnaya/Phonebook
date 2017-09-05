export default function phoneBook() {
    return {
        restrict: 'E',
        controller: function($scope) {
            $scope.searchText = '';
            $scope.isNumbersVisible = true;

            $scope.changeNumberVisibility = function(isNumbersVisible) {
                $scope.isNumbersVisible = !!isNumbersVisible;
            }
        },
        templateUrl: './templates/phone-book.html'
    };
}
