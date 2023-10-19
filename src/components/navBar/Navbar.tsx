import React, { useContext } from 'react'
import { User, Basket, SignOut, HouseSimple } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'





function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    let navbarComponent



    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container ms-12 me-12 flex justify-between items-center text-lg">
                    <div className='flex items-center'>
                        <img src={Logo} alt="" className='h-18 w-20' />
                        <Link to='/home' className='text-2xl font-bold uppercase'>FarmaPlus</Link>
                        
                    </div>

                    <div className='flex gap-4'>
                        <form className="form-inline">
                            <input className="form-control " type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                            <button className=" " type="submit"></button>
                        </form>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
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