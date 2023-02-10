"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.title = "welcome 4se ";
        this.test = true;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.listProduct = [
            { id: 1, title: "T-shirt1", price: 18, quantity: 0, like: 0 },
            { id: 2, title: "T-shirt2", price: 21, quantity: 10, like: 0 },
            { id: 3, title: "T-shirt3", price: 16, quantity: 8, like: 0 },
        ];
    };
    ProductComponent.prototype.decremente = function (i) {
        this.listProduct[i].quantity--;
    };
    ProductComponent.prototype.incremente = function (i) {
        this.listProduct[i].like++;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
