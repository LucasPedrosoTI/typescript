import { Fornecedor } from '../Fornecedor';
import { IdOnlyDto } from './IdOnlyDto';

export class ProdutoDtoRequest {
  categoria: string = '';
  codigoProduto: string = '';
  imagem: string = 'imagemPlaceholder';
  nome: string = '';
  promocao: boolean = false;
  quantidade: number = 0;
  valor: number = 0;
  valorPromo: number | null = null;
  fornecedor: IdOnlyDto = new IdOnlyDto();
}
