export default function singleContact() {
    return {
        restrict: 'A',
        controller: function($scope, PhoneBookService) {
            $scope.removeContact = function(name, phoneNumber) {
                PhoneBookService.removeContact(name, phoneNumber);
            };
        },
        scope: {
            'contact': '=',
            'removeContact' : '&',
            'isNumbersVisible': '='
        },
        templateUrl: './templates/single-contact.html'
    };
}
