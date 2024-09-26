import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DespesasService } from '../../services/respesas/despesas.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Despesa } from '../../models/despesa/despesa.model';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenubarComponent } from '../menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-despesas',
  standalone: true,
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, NgIf, FormsModule, CurrencyPipe, DatePipe,CardModule, TableModule, MenubarComponent,ButtonModule,InputTextModule],  // Adicione HttpClientModule aqui
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[] = [];
  novaDespesa: Despesa = { id: 0, descricao: '', valor: 0, data: new Date(), categoria: '' };

  constructor(private despesasService: DespesasService) {}

  ngOnInit() {
    this.despesasService.getDespesas().subscribe((data) => {
      this.despesas = data;
    });
  }

  addDespesa() {
    this.despesasService.addDespesa(this.novaDespesa).subscribe((despesa) => {
      this.despesas.push(despesa);
      this.novaDespesa = { id: 0, descricao: '', valor: 0, data: new Date(), categoria: '' };
    });
  }

  deleteDespesa(id: number) {
    this.despesasService.deleteDespesa(id).subscribe(() => {
      this.despesas = this.despesas.filter((despesa) => despesa.id !== id);
    });
  }
}
