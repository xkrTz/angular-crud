import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Ir para o Dashboard',
        icon: PrimeIcons.HOME,
        routerLink: ['/dashboard']
      },
      {
        label: 'Gerenciar Receitas',
        icon: PrimeIcons.MONEY_BILL,
        routerLink: ['/receitas']
      },
      {
        label: 'Gerenciar Despesas',
        icon: PrimeIcons.EXCLAMATION_TRIANGLE,
        routerLink: ['/despesas']
      },
      {
        label: 'Visualizar Relatórios',
        icon: PrimeIcons.CHART_BAR,
        routerLink: ['/relatorios']
      }
    ];
  }
}
