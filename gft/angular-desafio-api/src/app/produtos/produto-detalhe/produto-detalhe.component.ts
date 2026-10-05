import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from 'src/app/model/Fornecedor';
import { Produto } from 'src/app/model/Produto';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styles: [],
})
export class ProdutoDetalheComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute
  ) {}

  public produto!: Produto;
  ngOnInit(): void {
    const { id } = this.route.snapshot.params;

    this.produtoService.obterProduto(id).subscribe(
      (produto) => {
        this.produto = produto;
        this.fornecedorService.setFornecedorNome(produto);
      },
      (error) => console.error(error)
    );
  }
}
