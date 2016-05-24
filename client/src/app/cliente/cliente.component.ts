import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modulo-cliente',
  templateUrl: 'cliente.component.html',
  styleUrls: [
      'cliente.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ClienteComponent {
	private icone:string = 'fa fa-users';
	private nome:string = 'Cliente';
	private tela:boolean = false;

	public exibirTela():void{
		this.tela = !this.tela;
	}
}
