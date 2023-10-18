import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produtos {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoriaa: Categoria | null;
  usuario: Usuario | null;
}