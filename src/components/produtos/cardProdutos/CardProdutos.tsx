import React from 'react'
import { Link } from 'react-router-dom'
import Produtos from '../../../models/Produtos';

interface CardProdutosProps {
  prod: Produtos
}


function CardProdutos({ prod }: CardProdutosProps) {
  const linhas = prod.descricao.split('. ');

  return (
    <div className='border-slate-900 border flex flex-col rounded-2xl overflow-hidden justify-between '>
      <div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
          <p>preço R${prod.preco}</p>
          <p>Categoria: {prod.categoria?.tipo} </p>
          <div className='flex justify-center'>
            <img className=" w-1/5 " src={prod.foto}></img>
          </div>
          <pre className='text-sm '>
            {linhas.map((linha, index) => (
              <React.Fragment key={index}>
                {linha.trim()}{index < linhas.length - 1 ? '. ' : ''}
                <br />
              </React.Fragment>
            ))}
          </pre>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarProdutos/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProdutos/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos