export default function contacts() {
    return {
        restrict: 'E',
        controller: function($scope, PhoneBookService) {
            $scope.allContacts = PhoneBookService.getAll();
        },
        templateUrl: './templates/contacts.html'
    };
}
