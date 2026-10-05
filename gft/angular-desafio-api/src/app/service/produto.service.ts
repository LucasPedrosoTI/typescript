import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';
import { Page } from '../model/Page';
import { Constants } from './constants';
import { ProdutoDtoRequest } from '../model/dto/ProdutoDTORequest';

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}

  obterProdutos(): Observable<Page<Produto>> {
    return this.http.get<Page<Produto>>(
      `${Constants.prodUrl}/produtos`,
      Constants.options
    );
  }

  obterProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(
      `${Constants.prodUrl}/produtos/${id}`,
      Constants.options
    );
  }

  salvarProduto(produto: ProdutoDtoRequest): Observable<Produto> {
    return this.http.post<Produto>(
      `${Constants.prodUrl}/produtos`,
      produto,
      Constants.options
    );
  }

  public uploadImage(image: File, id: number): Observable<Response> {
    const formData = new FormData();

    formData.append('imagem', image);

    return this.http.put<Response>(
      `${Constants.prodUrl}/produtos/${id}/imagem`,
      formData,
      Constants.options
    );
  }
}
