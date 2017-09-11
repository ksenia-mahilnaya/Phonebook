import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngMessages from 'angular-messages';

import phoneBookService from './app/services/phoneBookService';
import phoneBookFilter from './app/filters/phoneBookFilter';
import showPhoneNumbers from './app/directives/showPhoneNumbers';
import searchText from './app/directives/searchText';
import addNewContact from './app/directives/addNewContact';
import editContact from './app/directives/editContact';
import contacts from './app/directives/contacts';
import singleContact from './app/directives/singleContact';
import phoneBook from './app/directives/phoneBook';
import phoneBookAdd from './app/directives/phoneBookAdd';
import phoneBookEdit from './app/directives/phoneBookEdit';
import addClass from './app/directives/addClass';
import phoneBookRouter from './app/routers/phoneBookRouter';

import './app/styles/styles.scss';

angular.module('app', [require('angular-animate'), uiRouter, ngMessages])
    .service('phoneBookService', phoneBookService)
    .filter('phoneBookFilter', phoneBookFilter)
    .directive('showPhoneNumbers', showPhoneNumbers)
    .directive('searchText', searchText)
    .directive('addNewContact', addNewContact)
    .directive('editContact', editContact)
    .directive('contacts', contacts)
    .directive('singleContact', singleContact)
    .directive('phoneBook', phoneBook)
    .directive('phoneBookAdd', phoneBookAdd)
    .directive('phoneBookEdit', phoneBookEdit)
    .directive('addClass', addClass)
    .config(phoneBookRouter);
