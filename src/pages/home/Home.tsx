import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalProdutos />
                <Link to='/produtos' className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</Link>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos/>
      </>
    );
}

export default Home;