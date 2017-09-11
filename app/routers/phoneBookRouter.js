export default function phoneBookRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/phone-book-directive.html'
        })
        .state('add', {
            url: '/add',
            templateUrl: 'templates/phone-book-add-directive.html'
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'templates/phone-book-edit-directive.html'
        });
}
