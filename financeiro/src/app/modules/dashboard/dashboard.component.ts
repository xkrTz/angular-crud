import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chartLabels: string[] = ['Receitas', 'Despesas'];
  chartData = [
    { data: [12000, 8000], label: 'Resumo Financeiro' }
  ];
}
