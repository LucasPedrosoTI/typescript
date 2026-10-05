import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../model/Fornecedor';
import { Page } from '../model/Page';
import { Produto } from '../model/Produto';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  constructor(private http: HttpClient) {}

  obterFornecedores(): Observable<Page<Fornecedor>> {
    return this.http.get<Page<Fornecedor>>(
      `${Constants.prodUrl}/fornecedores`,
      Constants.options
    );
  }

  obterFornecedor(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(
      `${Constants.prodUrl}/fornecedores/${id}`,
      Constants.options
    );
  }

  setFornecedorNome({ fornecedor }: Produto) {
    if (fornecedor.id == null) {
      throw new Error('Fornecedor inválido');
    }

    this.obterFornecedor(fornecedor.id).subscribe(
      ({ nome }) => {
        fornecedor.nome = nome;
      },
      (error) => console.log(error)
    );
  }
}
