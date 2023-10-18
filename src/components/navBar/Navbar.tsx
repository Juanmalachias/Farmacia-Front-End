import React, { useContext } from 'react'
import { User, Basket, SignOut, HouseSimple } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthContext'




function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent



    return (
        <>
            <div className='w-full bg-cyan-300 text-white flex justify-center py-4'>
                <div className="container ms-12 me-12 flex justify-between items-center text-lg">
                    <div className='flex items-center'>
                        <img src={Logo} alt="" className='h-18 w-20' />
                        <div className='text-2xl font-bold uppercase'>FarmaPlus</div>
                    </div>

                    <div className='flex gap-4'>
                        <form className="form-inline">
                            <input className="form-control " type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                            <button className=" " type="submit"></button>
                        </form>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <div className='hover:underline'></div>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categorias</Link>
                        <div className='hover:underline'><Basket size={32} /></div>
                        <Link to='/login' className='hover:underline'><User size={32} /></Link>
                        <Link to='' onClick={logout} className='hover:underline'><SignOut size={32} /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar