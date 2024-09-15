import { Component, OnInit } from '@angular/core';
import { DespesasService } from '../../services/despesas.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Despesa } from '../../models/despesa/despesa.model';

@Component({
  selector: 'app-despesas',
  standalone: true,
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
  imports: [NgFor, NgIf, FormsModule, CurrencyPipe, DatePipe],  // Adicione HttpClientModule aqui
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
