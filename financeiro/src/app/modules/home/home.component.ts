import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { CardModule } from 'primeng/card';
import { MenubarComponent } from '../menubar/menubar.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule,CardModule,MenubarComponent,CardModule, TableModule, MenubarComponent,ButtonModule,InputTextModule],  // Adicionar o RouterModule aqui
})
export class HomeComponent  {

  welcomeMessage = 'Bem-vindo ao Sistema Financeiro!';
  description = 'Gerencie suas receitas, despesas e obtenha relatórios financeiros completos.';
  
}
