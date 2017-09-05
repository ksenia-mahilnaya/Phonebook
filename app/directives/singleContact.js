export default function singleContact() {
    return {
        restrict: 'AE',
        controller: function($scope) {
            console.log($scope.isPhoneNumbersVisible);
        },
        link: function(scope, element){

        },
        templateUrl: './templates/single-contact.html'
    };
}
