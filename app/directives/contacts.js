export default function contacts() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.allContacts = PhoneBookService.getAll();
        },
        scope: {
            'isNumbersVisible': '=',
            'searchText': '='
        },
        templateUrl: './templates/contacts.html'
    };
}
