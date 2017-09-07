export default function singleContact() {
    return {
        restrict: 'A',
        controller: function($scope,PhoneBookService) {
            $scope.onClick = function(name, phoneNumber) {
                $scope.removeContact({name: name, phoneNumber: phoneNumber});
            };
            $scope.findContact = function(name, phoneNumber) {
                return PhoneBookService.findContact(name, phoneNumber);
            };
        },
        scope: {
            'contact': '=',
            'removeContact': '&',
            'isNumbersVisible': '='
        },
        templateUrl: './templates/single-contact.html'
    };
}
