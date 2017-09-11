export default function singleContact() {
    return {
        restrict: 'A',
        scope: {
            'contact': '=',
            'removeContact': '&',
            'isNumbersVisible': '='
        },
        controller: function($scope, phoneBookService) {
            $scope.onClick = function(name, phoneNumber) {
                $scope.removeContact({name: name, phoneNumber: phoneNumber});
            };
            $scope.getContactIndex = function(name, phoneNumber) {
                return phoneBookService.getContactIndex(name, phoneNumber);
            };
        },
        templateUrl: './templates/single-contact.html'
    };
}
