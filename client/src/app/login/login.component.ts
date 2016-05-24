import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modulo-login',
  templateUrl: 'login.component.html',
  styleUrls: [
      'login.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
	private icone: string = 'fa fa-lock';
	private nome: string = 'Login';
	private tela: boolean = false;

	public exibirTela():void{
		this.tela = !this.tela;
	}
}
