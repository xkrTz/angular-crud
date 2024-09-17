import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../../models/receita/receita.model';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  private baseUrl = 'http://localhost:3000/receitas'; // Endpoint da API

  constructor(private http: HttpClient) {}

  getReceitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.baseUrl);
  }

  addReceita(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.baseUrl, receita);
  }

  deleteReceita(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateReceita(receita: Receita): Observable<Receita> {
    return this.http.put<Receita>(`${this.baseUrl}/${receita.id}`, receita);
  }
}
