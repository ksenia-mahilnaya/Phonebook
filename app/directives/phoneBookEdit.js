export default function phoneBookEdit() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.editContact = function(newName, newPhoneNumber, indexOfContact) {
                PhoneBookService.editContact(newName, newPhoneNumber, indexOfContact);
            };
        },
        templateUrl: './templates/phone-book-edit.html'
    };
}
