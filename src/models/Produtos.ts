import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produtos {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string; 
  categoria: Categoria | null;
  usuario: Usuario | null;
}