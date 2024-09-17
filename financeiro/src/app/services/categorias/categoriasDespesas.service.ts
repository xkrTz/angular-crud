import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/categoria/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasDespesasService {
  private apiUrl = 'https://localhost:5000/categoriasDespesas';  // URL da API

  constructor(private http: HttpClient) {}

  // Obter todas as categorias de despesas
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  // Adicionar nova categoria de despesa
  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria);
  }

  // Deletar categoria de despesa
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
