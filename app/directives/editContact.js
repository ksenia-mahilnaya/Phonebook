export default function editContact() {
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
                console.log($scope);
            };
        },
        templateUrl: './templates/edit-contact.html'
    };
}
