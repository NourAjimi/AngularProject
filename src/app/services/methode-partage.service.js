"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MethodePartageService = void 0;
var core_1 = require("@angular/core");
var MethodePartageService = /** @class */ (function () {
    function MethodePartageService() {
    }
    MethodePartageService.prototype.getNumberOf = function (list, critiria, value) {
        var result = 0;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var i = list_1[_i];
            if (i[critiria] === value) {
                result++;
            }
        }
        return result;
    };
    MethodePartageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MethodePartageService);
    return MethodePartageService;
}());
exports.MethodePartageService = MethodePartageService;
