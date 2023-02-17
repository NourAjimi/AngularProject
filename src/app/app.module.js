"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var product_component_1 = require("./product/product.component");
var home_component_1 = require("./home/home.component");
var forms_1 = require("@angular/forms");
var offres_emploi_component_1 = require("./offres-emploi/offres-emploi.component");
var articles_component_1 = require("./articles/articles.component");
var navbar_component_1 = require("./navbar/navbar.component");
var not_found_component_1 = require("./not-found/not-found.component");
var detail_product_component_1 = require("./detail-product/detail-product.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_component_1.ProductComponent,
                home_component_1.HomeComponent,
                offres_emploi_component_1.OffresEmploiComponent,
                articles_component_1.ArticlesComponent,
                navbar_component_1.NavbarComponent,
                not_found_component_1.NotFoundComponent,
                detail_product_component_1.DetailProductComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
