export default function phoneBookAdd() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
            };
        },
        templateUrl: './templates/phone-book-add.html'
    };
}
