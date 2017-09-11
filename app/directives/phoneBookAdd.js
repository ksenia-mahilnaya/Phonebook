export default function phoneBookAdd() {
    return {
        restrict: 'E',
        controller: function($scope, phoneBookService) {
            $scope.addContact = function(name, phoneNumber) {
                phoneBookService.addContact(name, phoneNumber);
            };
        },
        templateUrl: './templates/phone-book-add.html'
    };
}
