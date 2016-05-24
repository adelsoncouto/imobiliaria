import { Component, ViewEncapsulation } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ClienteComponent } from './cliente/cliente.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [
      'app.component.css'
  ],
  directives: [
      LoginComponent,
      AdministrativoComponent,
      FinanceiroComponent,
      ClienteComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Planahp';
}
