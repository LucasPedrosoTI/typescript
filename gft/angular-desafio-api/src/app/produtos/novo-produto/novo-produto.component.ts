import { Component, OnInit } from '@angular/core';
import { ProdutoDtoRequest } from 'src/app/model/dto/ProdutoDTORequest';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styles: [],
})
export class NovoProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public selectedFile!: ImageSnippet;
  public produto: ProdutoDtoRequest = new ProdutoDtoRequest();
  public produtoCriado!: Produto;

  onSubmit() {
    this.produtoService.salvarProduto(this.produto).subscribe(
      (produto) => {
        this.produtoCriado = produto;

        if (this.produtoCriado.id == null) {
          return;
        }

        this.produtoService
          .uploadImage(this.selectedFile.file, this.produtoCriado.id)
          .subscribe(
            (result) => console.log(result),
            (error) => console.log(error)
          );
      },
      (error) => console.log(error)
    );
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      (event: any) =>
        (this.selectedFile = new ImageSnippet(event.target.result, file))
    );

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {}
}

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

// TODO: validações
// TODO: tratamento de erros
// TODO: UX para alertas
