import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../services/receitas.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receita } from '../../models/receita/receita.model';

@Component({
  selector: 'app-receitas',
  standalone: true,
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss'],
  imports: [NgFor, NgIf, FormsModule, DatePipe, CurrencyPipe],  // Adicione o HttpClientModule aqui
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  novaReceita: Receita = { id: 0, descricao: '', valor: 0, data: new Date() };

  constructor(private receitasService: ReceitasService) {}

  ngOnInit() {
    this.receitasService.getReceitas().subscribe((data) => {
      this.receitas = data;
    });
  }

  addReceita() {
    this.receitasService.addReceita(this.novaReceita).subscribe((receita) => {
      this.receitas.push(receita);
      this.novaReceita = { id: 0, descricao: '', valor: 0, data: new Date() };
    });
  }

  deleteReceita(id: number) {
    this.receitasService.deleteReceita(id).subscribe(() => {
      this.receitas = this.receitas.filter((receita) => receita.id !== id);
    });
  }
}
