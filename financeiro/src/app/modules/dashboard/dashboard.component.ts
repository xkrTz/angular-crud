import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenubarComponent } from '../menubar/menubar.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { Receita } from '../../models/receita/receita.model';
import { Despesa } from '../../models/despesa/despesa.model';
import { ReceitasService } from '../../services/receitas/receitas.service';
import { DespesasService } from '../../services/respesas/despesas.service';
import { forkJoin } from 'rxjs';

interface FinancialData {
  id: number;
  type: string;
  description: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterModule, CardModule, TableModule, MenubarComponent, ButtonModule, InputTextModule, ChartModule],
})
export class DashboardComponent implements OnInit {
  receitas: Receita[] = [];
  despesas: Despesa[] = [];

  financialData: FinancialData[] = [];
  cols: any[] = [];
  loading: boolean = false;

  totalDespesas: number = 0;
  totalReceitas: number = 0;

  basicData: any;
  basicOptions: any;

  constructor(private receitasService: ReceitasService, private despesasService: DespesasService) {}

  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
    this.loading = true;
  
    // Carregar despesas e receitas simultaneamente usando forkJoin
    forkJoin([
      this.despesasService.getDespesas(),
      this.receitasService.getReceitas()
    ]).subscribe(([despesas, receitas]) => {
      this.despesas = despesas;
      this.receitas = receitas;
  
      // Calcular os totais
      this.totalDespesas = this.calculateTotal(this.despesas.map(despesa => ({ amount: despesa.valor })));
      this.totalReceitas = this.calculateTotal(this.receitas.map(receita => ({ amount: receita.valor })));
  
      // Atualizar o gráfico com os novos valores
      this.createChart(textColor, textColorSecondary, surfaceBorder);
      this.loading = false;
    });
  
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'type', header: 'Tipo' },
      { field: 'description', header: 'Descrição' },
      { field: 'amount', header: 'Valor' },
      { field: 'date', header: 'Data' }
    ];
  }
  
  // Função para criar o gráfico com os valores
  createChart(textColor: string, textColorSecondary: string, surfaceBorder: string): void {
    this.basicData = {
      labels: ['Despesas', 'Receitas'],
      datasets: [
        {
          label: 'Valores',
          data: [this.totalDespesas, this.totalReceitas], // Atualizar com os dados carregados
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  
    this.loading = true;
  
    // Carregar despesas e receitas simultaneamente usando forkJoin para esperar as duas requisições
    forkJoin([
      this.despesasService.getDespesas(),
      this.receitasService.getReceitas()
    ]).subscribe(([despesas, receitas]) => {
      this.despesas = despesas;
      this.receitas = receitas;
  
      // Calcular os totais
      this.totalDespesas = this.calculateTotal(this.despesas.map(despesa => ({ amount: despesa.valor })));
      this.totalReceitas = this.calculateTotal(this.receitas.map(receita => ({ amount: receita.valor })));
  
      // Atualizar o gráfico com os novos valores
      this.updateChart();
      this.loading = false;
    });
  
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'type', header: 'Tipo' },
      { field: 'description', header: 'Descrição' },
      { field: 'amount', header: 'Valor' },
      { field: 'date', header: 'Data' }
    ];
  }
  // Função para calcular o total dos valores
  calculateTotal(items: { amount: number }[]): number {
    return items.reduce((total, item) => total + item.amount, 0);
  }

  // Função para atualizar os dados do gráfico
  updateChart(): void {
    this.basicData.datasets[0].data = [this.totalDespesas, this.totalReceitas];
  }
}
