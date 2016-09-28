import angular from 'angular';

import {Sign_in} from './app/sign_in/sign_in';
import {UserService} from './app/services/user_service';
import {Sign_up} from './app/sign_up/sign_up';
import 'angular-ui-router';
import routesConfig from './routes';
import { localStorageServiceProvider } from '../node_modules/angular-local-storage/dist/angular-local-storage.js';
import { angularValidationMatch } from '../node_modules/angular-validation-match/dist/angular-validation-match.js';
import { AuthInterceptor } from './app/config/auth.interceptor.js';
import { angularSelect2} from './bower_components/angular-select2/dist/angular-select2.js'
import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'LocalStorageModule', 'validation.match', 'rt.select2'])
  .config(routesConfig)
  .controller('sign_in', Sign_in)
  .controller('sign_up', Sign_up)
  .service('UserService', UserService)
  .service('AuthInterceptor', AuthInterceptor)
  .config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('targetMVD')
  });

 // .config(function(localStorageServiceProvider) {
 //   localStorageServiceProvider.setPrefix('target');
 // })
 // .config(['$httpProvider', function($httpProvider){
 //   $httpProvider.interceptors.push('AuthInterceptor');
 // }]);
