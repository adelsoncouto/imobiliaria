import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modulo-financeiro',
  templateUrl: 'financeiro.component.html',
  styleUrls: [
      'financeiro.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class FinanceiroComponent {
	private icone:string = 'fa fa-money';
	private nome:string = 'Financeiro';
	private tela:boolean = false;

	public exibirTela():void{
		this.tela = !this.tela;
	}
}
