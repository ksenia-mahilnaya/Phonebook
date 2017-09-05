export default function showPhoneNumbers() {
    return {
        restrict: 'AE',
        scope: {
            'showNumbersHandler': '&'
        },
        templateUrl: './templates/show-phone-numbers.html',
        controller: function ($scope) {
            $scope.isNumbersVisible = false;
            $scope.onChange = function() {
                $scope.showNumbersHandler({isNumbersVisible: $scope.isNumbersVisible});
            }
        }
    };
}
