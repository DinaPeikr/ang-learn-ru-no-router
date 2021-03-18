"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL_TOKEN = exports.baseUrl = void 0;
var environment_1 = require("../../environments/environment");
var core_1 = require("@angular/core");
exports.baseUrl = environment_1.environment.baseUrl;
exports.BASE_URL_TOKEN = new core_1.InjectionToken('BASE_URL_TOKEN');
