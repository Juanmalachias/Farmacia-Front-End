import React from 'react'
import { User, Basket } from '@phosphor-icons/react';

function Navbar() {



    return (
        <>
            <div className='w-full bg-cyan-300 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>FarmaPlus</div>

                    <div className='flex gap-4'>
                        <form className="form-inline">
                            <input className="form-control " type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                            <button className=" " type="submit"></button>
                        </form>
                        <div className='hover:underline'>Produtos</div>
                        <div className='hover:underline'>Categorias</div>
                        <div className='hover:underline'><Basket size={32} /></div>
                        <div className='hover:underline'><User size={32} /></div>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar