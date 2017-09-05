export default function showPhoneNumbers() {
    return {
        restrict: 'AE',
        scope: {
            'showNumbersHandler': '&',
            'isNumbersVisible': '='
        },
        templateUrl: './templates/show-phone-numbers.html'
    };
}
