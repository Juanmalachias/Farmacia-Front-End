import React from 'react';
import './App.css';

import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategorias';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProdutos from './components/produtos/formularioProdutos/FormularioProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/deletarProdutos';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCartegoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCartegoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProdutos" element={<FormularioProdutos />} />
              <Route path="/editarProdutos/:id" element={<FormularioProdutos />} />
              <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;