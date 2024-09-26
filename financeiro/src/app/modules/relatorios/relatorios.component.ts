import { Component, ViewEncapsulation } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { NgFor, NgIf, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-relatorios',
  standalone: true,
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, NgIf, FormsModule, DatePipe, CurrencyPipe,CardModule, TableModule, MenubarComponent,ButtonModule,InputTextModule],

})
export class RelatoriosComponent {
  // Lógica de relatórios
}
