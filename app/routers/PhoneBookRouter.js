export default function PhoneBookRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<phone-book></phone-book>'
        })
        .state('add', {
            url: '/add',
            template: '<phone-book-add></phone-book-add>'
        })
        .state('edit', {
            url: '/edit/:id',
            template: '<phone-book-edit></phone-book-edit>'
        });
}
