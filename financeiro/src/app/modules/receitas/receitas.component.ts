import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReceitasService } from '../../services/receitas/receitas.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receita } from '../../models/receita/receita.model';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenubarComponent } from '../menubar/menubar.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-receitas',
  standalone: true,
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, NgIf, FormsModule, DatePipe, CurrencyPipe,CardModule, TableModule, MenubarComponent,ButtonModule,InputTextModule],  // Adicione o HttpClientModule aqui
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  novaReceita: Receita = { id: 0, descricao: '', valor: 0, data: new Date(), categoria: '' };

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
      this.novaReceita = { id: 0, descricao: '', valor: 0, data: new Date(), categoria: '' };  // Limpa o formulário
    });
  }

  deleteReceita(id: number) {
    // Deletar receita
    this.receitasService.deleteReceita(id).subscribe(() => {
      this.receitas = this.receitas.filter((receita) => receita.id !== id);  // Remove a receita da lista
    });
  }
}
