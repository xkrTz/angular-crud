import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../services/receitas/receitas.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule
import { Receita } from '../../models/receita/receita.model';

@Component({
  selector: 'app-receitas',
  standalone: true,
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss'],
  imports: [NgFor, NgIf, FormsModule, DatePipe, CurrencyPipe, HttpClientModule],  // Adicione o HttpClientModule aqui
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  novaReceita: Receita = { id: 0, descricao: '', valor: 0, data: new Date() };

  constructor(private receitasService: ReceitasService) {}

  ngOnInit() {
    // Carregar receitas ao inicializar o componente
    this.receitasService.getReceitas().subscribe((data) => {
      this.receitas = data;
    });
  }

  addReceita() {
    // Adicionar nova receita
    this.receitasService.addReceita(this.novaReceita).subscribe((receita) => {
      this.receitas.push(receita);  // Adiciona a nova receita à lista
      this.novaReceita = { id: 0, descricao: '', valor: 0, data: new Date() };  // Limpa o formulário
    });
  }

  deleteReceita(id: number) {
    // Deletar receita
    this.receitasService.deleteReceita(id).subscribe(() => {
      this.receitas = this.receitas.filter((receita) => receita.id !== id);  // Remove a receita da lista
    });
  }
}
