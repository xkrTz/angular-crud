import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Ir para o Dashboard',
        icon: 'pi pi-home',
        routerLink: ['/dashboard']
      },
      {
        label: 'Gerenciar Receitas',
        icon: 'pi pi-money-bill',
        routerLink: ['/receitas']
      },
      {
        label: 'Gerenciar Despesas',
        icon: 'pi pi-wallet',
        routerLink: ['/despesas']
      },
      {
        label: 'Visualizar Relatórios',
        icon: 'pi pi-chart-bar',
        routerLink: ['/relatorios']
      }
    ];
  }
}
