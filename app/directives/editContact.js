export default function editContact() {
    return {
        restrict: 'E',
        scope: {
            editContact: '&'
        },
        controller: function($scope, $state, $stateParams, PhoneBookService) {
            $scope.getContact = function(indexOfContact) {
                return PhoneBookService.getContact(indexOfContact);
            };

            $scope.contactName = $scope.getContact(+$stateParams.id).name;
            $scope.contactPhoneNumber = $scope.getContact(+$stateParams.id).phoneNumber;

            $scope.onClick = function(newName, newPhoneNumber) {
                $scope.editContact({newName: newName, newPhoneNumber: newPhoneNumber, indexOfContact: +$stateParams.id});
                $state.go("home");
            };


        },
        templateUrl: './templates/edit-contact.html'
    };
}
