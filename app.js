import angular from 'angular';

import PhoneBookController from './app/controllers/PhoneBookController';
import PhoneBookService from './app/services/PhoneBookService';
import PhoneBookFilter from './app/filters/PhoneBookFilter';

import './app/styles/styles.scss';

angular.module('app', [require('angular-animate')])
    .controller('PhoneBookController', PhoneBookController)
    .service('PhoneBookService', PhoneBookService)
    .filter('PhoneBookFilter', PhoneBookFilter);


