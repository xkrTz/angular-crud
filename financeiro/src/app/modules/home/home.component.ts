import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CardModule } from 'primeng/card';
import { MenubarComponent } from '../menubar/menubar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule,CardModule,MenubarComponent],  // Adicionar o RouterModule aqui
})
export class HomeComponent  {

  welcomeMessage = 'Bem-vindo ao Sistema Financeiro!';
  description = 'Gerencie suas receitas, despesas e obtenha relatórios financeiros completos.';
  
}
