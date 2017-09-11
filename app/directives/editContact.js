export default function editContact() {
    return {
        restrict: 'E',
        scope: {
            editContact: '&'
        },
        controller: function($scope, $state, $stateParams, phoneBookService) {
            $scope.getContact = function(indexOfContact) {
                return phoneBookService.getContact(indexOfContact);
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
