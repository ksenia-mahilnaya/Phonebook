//const angular = require('angular');
import angular from 'angular';
import {PhoneBookController} from './app/main/PhoneBookController';
import './app/styles/styles.scss';

angular.module('app', [require('angular-animate')])
    .controller('PhoneBookController', PhoneBookController);
