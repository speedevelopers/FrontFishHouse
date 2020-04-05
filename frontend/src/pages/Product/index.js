import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';

export default function Product() {
    return (
        <div className="product-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Produtos</h1>
                    <p>Faça aqui o cadastro dos produtos. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/productlist">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Produtos Cadastrados.
                    </Link>
                </section>

                <form >
                    <input placeholder="Descrição do Produto" />
                    <input placeholder="Valor de Compra" />
                    <input placeholder="Valor de Venda" />
                    <input placeholder="Unidade" style={{ width: 180 }}/>

                    <select id="category">
                        <option value="Peixe de Couro">Peixe de Couro</option>
                        <option value="Peixe de Escamas">Peixe de Escamas</option>
                        <option value="Frutos do Mar">Frutos do Mar</option>

                    </select>


                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}