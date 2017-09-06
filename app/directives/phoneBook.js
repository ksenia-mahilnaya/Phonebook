export default function phoneBook() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
                //$scope.contactName = '';
                //$scope.contactPhoneNumber = null;
            };

            $scope.searchText = '';
            $scope.isNumbersVisible = true;

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
