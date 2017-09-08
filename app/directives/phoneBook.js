export default function phoneBook() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.searchText = '';
            $scope.isNumbersVisible = true;

            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
            };

            $scope.removeContact = function(name, phoneNumber) {
                PhoneBookService.removeContact(name, phoneNumber);
            };

            $scope.changeNumbersVisibility = function(isNumbersVisible) {
                $scope.isNumbersVisible = !!isNumbersVisible;
            };

            $scope.filterNames = function(searchText) {
                $scope.searchText = searchText;
            };
        },
        templateUrl: './templates/phone-book.html'
    };
}
