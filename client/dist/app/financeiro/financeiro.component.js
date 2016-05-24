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
var FinanceiroComponent = (function () {
    function FinanceiroComponent() {
        this.icone = 'fa fa-money';
        this.nome = 'Financeiro';
        this.tela = false;
    }
    FinanceiroComponent.prototype.exibirTela = function () {
        this.tela = !this.tela;
    };
    FinanceiroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modulo-financeiro',
            templateUrl: 'financeiro.component.html',
            styleUrls: [
                'financeiro.component.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], FinanceiroComponent);
    return FinanceiroComponent;
}());
exports.FinanceiroComponent = FinanceiroComponent;
//# sourceMappingURL=/opt/lampp/htdocs/imobiliaria/client/tmp/broccoli_type_script_compiler-input_base_path-Kc1VpbLj.tmp/0/app/financeiro/financeiro.component.js.map