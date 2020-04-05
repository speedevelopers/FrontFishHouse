import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';

export default function Client() {
    return (
        <div className="client-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Cadastro de Clientes</h1>
                    <p>Faça aqui o cadastro do seu cliente. Crie, pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/clientlist">
                        <FiLogIn size={16} color="#3466ee" />
                    Visualizar Clientes Cadastrados.
                    </Link>
                </section>

                <form >
                    <input placeholder="Nome do cliente" />
                    <input placeholder="WhatsApp" />
                    <input placeholder="Endereço" />

                    <div className="input-group">
                        <input placeholder="Nº" style={{ width: 90 }} />
                        <input placeholder="Bairro" />
                    </div>

                    <input type="email" placeholder="E-mail" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}