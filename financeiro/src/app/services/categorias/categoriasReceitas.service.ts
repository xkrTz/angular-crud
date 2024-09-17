import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/categoria/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasReceitasService {
  private baseUrl = 'https://localhost:5000/api/CategoriasReceitas';  // URL da API

  constructor(private http: HttpClient) {}

  // Obter todas as categorias de receitas
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

  // Adicionar nova categoria de receita
  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl, categoria);
  }

  // Deletar categoria de receita
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
