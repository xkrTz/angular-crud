import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../models/despesa/despesa.model';

@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  private baseUrl = 'http://localhost:3000/despesas'; // Endpoint da API

  constructor(private http: HttpClient) {}

  getDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.baseUrl);
  }

  addDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.baseUrl, despesa);
  }

  deleteDespesa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(`${this.baseUrl}/${despesa.id}`, despesa);
  }
}
