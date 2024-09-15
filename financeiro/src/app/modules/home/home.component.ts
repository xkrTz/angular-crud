import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule],  // Adicionar o RouterModule aqui
})
export class HomeComponent {
  welcomeMessage = 'Bem-vindo ao Sistema Financeiro!';
  description = 'Gerencie suas receitas, despesas e obtenha relatórios financeiros completos.';
}
