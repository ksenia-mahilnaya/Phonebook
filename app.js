import angular from 'angular';

import PhoneBookController from './app/controllers/phoneBookController';
import PhoneBookService from './app/services/phoneBookService';

import './app/styles/styles.scss';

angular.module('app', [require('angular-animate')])
    .controller('PhoneBookController', PhoneBookController)
    .service('PhoneBookService', PhoneBookService)
    .filter('startsWithLetter', function(item) {
        return function (items) {
            return items.filter(function () {
                return /a/i.test(item.name.substring(0, 1));
            });
        };
    });



