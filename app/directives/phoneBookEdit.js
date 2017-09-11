export default function phoneBookEdit() {
    return {
        restrict: 'E',
        controller: function($scope, phoneBookService) {
            $scope.editContact = function(newName, newPhoneNumber, indexOfContact) {
                phoneBookService.editContact(newName, newPhoneNumber, indexOfContact);
            };
        },
        templateUrl: './templates/phone-book-edit.html'
    };
}
