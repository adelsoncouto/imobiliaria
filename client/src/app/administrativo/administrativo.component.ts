import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modulo-administrativo',
  templateUrl: 'administrativo.component.html',
  styleUrls: [
      'administrativo.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdministrativoComponent {
	private icone:string = 'fa fa-cogs';
	private nome:string = 'Administrativo';
	private tela:boolean = false;
	
	public exibirTela():void{
		this.tela = !this.tela;
	}
}
