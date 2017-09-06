export default function addClass() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            if (scope.contact.name.toLowerCase()[0] === 'a') {
                element.addClass('highlight-with-red');
            } else if (scope.contact.name.toLowerCase()[0] === 'b') {
                element.addClass('highlight-with-blue');
            }
        }
    };
}
