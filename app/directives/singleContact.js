export default function singleContact() {
    return {
        restrict: 'A',
        controller: function($scope, PhoneBookService) {
            $scope.removeContact = function(name, phoneNumber) {
                //removeContact({name: name, phoneNumber: phoneNumber});
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
