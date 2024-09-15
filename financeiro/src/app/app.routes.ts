import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';  // Importe o HomeComponent
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReceitasComponent } from './modules/receitas/receitas.component';
import { DespesasComponent } from './modules/despesas/despesas.component';
import { RelatoriosComponent } from './modules/relatorios/relatorios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Define o HomeComponent como a rota inicial
  { path: 'dashboard', component: DashboardComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'relatorios', component: RelatoriosComponent },
];
