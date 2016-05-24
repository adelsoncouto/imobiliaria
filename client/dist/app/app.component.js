"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_component_1 = require('./login/login.component');
var administrativo_component_1 = require('./administrativo/administrativo.component');
var financeiro_component_1 = require('./financeiro/financeiro.component');
var cliente_component_1 = require('./cliente/cliente.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Planahp';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: [
                'app.component.css'
            ],
            directives: [
                login_component_1.LoginComponent,
                administrativo_component_1.AdministrativoComponent,
                financeiro_component_1.FinanceiroComponent,
                cliente_component_1.ClienteComponent
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/opt/lampp/htdocs/imobiliaria/client/tmp/broccoli_type_script_compiler-input_base_path-Kc1VpbLj.tmp/0/app/app.component.js.map