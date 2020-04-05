import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft, FiArrowLeft, FiHome } from 'react-icons/fi';
import logoImgMidle from '../../assets/midle.png';

export default function ClientList() {
    return (
        <div className="clientlist-container">
            <div className="content">
                <section>
                    <img src={logoImgMidle} alt="House Fish" />
                    <h1>Clientes Cadastrados</h1>
                    <p>Visualize aqui os clientes cadastrados. Pesquise, altere ou exclua os dados de acordo com sua necessidade.</p>

                    <Link className="back-link" to="/client">
                        <FiArrowLeft size={16} color="#3466ee" />
                    Retornar ao cadastro de clientes.
                    </Link>
                  
                </section>

                <form >

                <div className="fieldsearch">
                <input placeholder="Digite o nome do cliente"/>
               

                </div>
              
                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>WhatsApp</th>

                        </tr>
                        <tr>
                            <td>Adão J. Magalhães Jr.</td>
                            <td>(62) 9 8431 8341</td>

                        </tr>
                        <tr>
                            <td>Rosângela F. Barbosa</td>
                            <td>(62) 9 8592 8432</td>

                        </tr>

                        <tr>
                            <td>Phelipe Augusto</td>
                            <td>(62) 9 8433 4400</td>

                        </tr> <tr>
                            <td>Sophia Di Cássia F. Magalhães</td>
                            <td>(62) 9 8090 1818</td>
                        </tr>
                        <tr>
                            <td>Sarah Liendre</td>
                            <td>(62) 9 9090 8080</td>

                        </tr>
                        <tr>
                            <td>PCC - Pulguento, Cagão e Chorão</td>
                            <td>(62) 9 4040 2020</td>

                        </tr>
                     
                        <tr>
                            <td>Maycon Ullrich</td>
                            <td>I don't remember</td>

                        </tr>
                    </table>
                   
                </form>
            </div>
        </div>
    );
}
