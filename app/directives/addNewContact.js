export default function addNewContact() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.addContact = function(name, phoneNumber) {
                PhoneBookService.addContact(name, phoneNumber);
                $scope.contactName = '';
                $scope.contactPhoneNumber = null;
            };
        },
        scope: {},
        templateUrl: './templates/add-new-contact.html'
    };
}
