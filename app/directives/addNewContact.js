export default function addNewContact() {
    return {
        restrict: 'E',
        scope: {
            addContact: '&'
        },
        controller: function($scope, $state) {
            $scope.onClick = function(name, phoneNumber) {
                $scope.addContact({name: name, phoneNumber: phoneNumber});
                $scope.contactName = '';
                $scope.contactPhoneNumber = null;
                $state.go("home");
            };
        },
        templateUrl: './templates/add-new-contact.html'
    };
}
