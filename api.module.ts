import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AuthorizationApi', api.AuthorizationApi)
.service('DBOperationsApi', api.DBOperationsApi)

export default apiModule;
