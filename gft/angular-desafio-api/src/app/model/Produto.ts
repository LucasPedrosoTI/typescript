import { Fornecedor } from './Fornecedor';

export interface Produto {
  id: number | null;
  categoria: string;
  codigoProduto: string;
  imagem: string;
  nome: string;
  promocao: boolean;
  quantidade: number;
  valor: number;
  valorPromo: number | null;
  fornecedor: Fornecedor;
}
