import { Produto } from './Produto';

export interface Fornecedor {
  id: number | null;
  cnpj: string;
  nome: string;
  produtos: Array<Produto>;
}
