"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productList = [
            { id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0 },
            { id: 2, title: "T-shirt2", price: 21, quantity: 10, like: 0 },
            { id: 3, title: "T-shirt3", price: 16, quantity: 8, like: 0 },
        ];
    }
    ProductService.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
