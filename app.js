import angular from 'angular';
import './app/styles/styles.scss';
import { PhoneBookController } from './app/controllers/PhoneBookController';
angular.module('app', [require('angular-animate')]).controller('PhoneBookController', PhoneBookController);


