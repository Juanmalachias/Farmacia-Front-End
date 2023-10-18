import Produtos  from "./Produtos";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  produtos?: Produtos | null;
}