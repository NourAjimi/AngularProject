"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormProductComponent = void 0;
var product_1 = require("./../core/model/product");
var core_1 = require("@angular/core");
var FormProductComponent = /** @class */ (function () {
    function FormProductComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    FormProductComponent.prototype.ngOnInit = function () {
        this.product = new product_1.Product();
    };
    FormProductComponent.prototype.ajouter = function (product) {
        this.productService.addProduct(this.product);
        this.route.navigateByUrl('/products');
    };
    FormProductComponent = __decorate([
        core_1.Component({
            selector: 'app-form-product',
            templateUrl: './form-product.component.html',
            styleUrls: ['./form-product.component.css']
        })
    ], FormProductComponent);
    return FormProductComponent;
}());
exports.FormProductComponent = FormProductComponent;
