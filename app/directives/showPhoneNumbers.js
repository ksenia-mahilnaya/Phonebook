export default function showPhoneNumbers() {
    return {
        restrict: 'AE',
        scope: {
            isPhoneNumbersVisible: '=?'
        },
        controller: function($scope) {
            $scope.isPhoneNumbersVisible = true;
            $scope.showPhoneNumbersText = 'Show phone numbers';
        },
        link: function(scope, element){
            element.bind("change", function() {
                //console.log(scope.isPhoneNumbersVisible);
                scope.isPhoneNumbersVisible = !scope.isPhoneNumbersVisible;
            });
        },
        templateUrl: './templates/show-phone-numbers.html'
    };
}
