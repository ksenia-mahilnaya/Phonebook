export default function contacts() {
    return {
        restrict: 'E',
        controller: function($scope, phoneBookService) {
            $scope.allContacts = phoneBookService.getAll();
            $scope.removeContact = function(name, phoneNumber) {
                phoneBookService.removeContact(name, phoneNumber);
            };
        },
        scope: {
            'isNumbersVisible': '=',
            'searchText': '='
        },
        templateUrl: './templates/contacts.html'
    };
}
