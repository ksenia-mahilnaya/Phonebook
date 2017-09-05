export default function contacts() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.allContacts = PhoneBookService.getAll();
            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
                $scope.contactName = '';
                $scope.contactPhoneNumber = null;
            };
        },
        templateUrl: './templates/contacts.html'
    };
}
