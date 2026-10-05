import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { SpinnerComponent } from 'src/app/util/spinner/spinner.component';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [],
})
export class ListaProdutoComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService
  ) {}

  public produtos: Produto[] = [];
  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      ({ content }) => {
        this.produtos = content;

        this.produtos.forEach((produto) =>
          this.fornecedorService.setFornecedorNome(produto)
        );
      },
      (err) => console.log(err)
    );
  }
}
