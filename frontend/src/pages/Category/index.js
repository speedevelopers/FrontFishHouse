import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';

export default function Category() {
    return (
        <div className="category-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Categorias</h1>
                    <p>Faça aqui o cadastro das categorias. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/client">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Categorias Cadastradas.
                    </Link>
                </section>

                <form >
                    <input placeholder="Descrição da Categoria" />
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}