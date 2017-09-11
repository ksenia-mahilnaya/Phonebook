export default function showPhoneNumbers() {
    return {
        restrict: 'AE',
        scope: {
            'showNumbersHandler': '&'
        },
        controller: function ($scope) {
            $scope.isNumbersVisible = true;
            $scope.onChange = function() {
                $scope.showNumbersHandler({isNumbersVisible: $scope.isNumbersVisible});
            }
        },
        templateUrl: './templates/show-phone-numbers.html'
    };
}
