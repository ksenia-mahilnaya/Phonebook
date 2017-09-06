export default function singleContact() {
    return {
        restrict: 'A',
        controller: function($scope) {
            $scope.onClick = function(name, phoneNumber) {
                $scope.removeContact({name: name, phoneNumber: phoneNumber});
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
