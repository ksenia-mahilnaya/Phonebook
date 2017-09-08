export default function singleContact() {
    return {
        restrict: 'A',
        scope: {
            'contact': '=',
            'removeContact': '&',
            'isNumbersVisible': '='
        },
        controller: function($scope,PhoneBookService) {
            $scope.onClick = function(name, phoneNumber) {
                $scope.removeContact({name: name, phoneNumber: phoneNumber});
            };
            $scope.getContactIndex = function(name, phoneNumber) {
                return PhoneBookService.getContactIndex(name, phoneNumber);
            };
        },
        templateUrl: './templates/single-contact.html'
    };
}
