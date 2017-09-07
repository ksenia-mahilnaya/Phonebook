export default function phoneBookEdit() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
            };
        },
        templateUrl: './templates/phone-book-edit.html'
    };
}
