import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Clinicas.scss';

// Importando as imagens das clínicas
import foto3 from '../../assets/clinicas/3.jpg';
import foto5 from '../../assets/clinicas/5 .jpg';
import foto7 from '../../assets/clinicas/7.jpg';
import foto8 from '../../assets/clinicas/8.jpg';
import doutoraDentro from '../../assets/clinicas/doutoradentrodaclinica.jpg';
import fachada from '../../assets/clinicas/faxadaclinica.jpg';
import interior from '../../assets/clinicas/inderiarcinica.jpg';
import recepcao from '../../assets/clinicas/recepcção.jpg';

// Imagens adicionais da galeria

const Clinicas = () => {
    return (
        <section className='clinicas-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                {/* Título e Descrição Centralizados */}
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <SectionTitle 
                            title="Conheça nossas Clínicas Odontológicas"
                            subTitle="Nossas Unidades"
                        />
                        <p className="clinicas-description">
                            Ir ao dentista não precisa ser sinônimo de medo ou desconforto. Nós somos 
                            profissionais acolhedores, que transformam a experiência do consultório 
                            odontológico em algo leve, respeitoso e até prazeroso.
                        </p>
                    </div>
                </div>

                {/* Cards de Features Alinhados */}
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="clinicas-features">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-heart"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h4>Atendimento Humanizado</h4>
                                            <p>Cuidado acolhedor e respeitoso em cada consulta</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h4>Ambiente Seguro</h4>
                                            <p>Protocolo rigoroso de biossegurança e higienização</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4">
                                    <div className="feature-item">
                                        <div className="feature-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="feature-text">
                                            <h4>Experiência Prazerosa</h4>
                                            <p>Transformamos sua visita ao dentista em algo positivo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Galeria de Imagens - 8 fotos em 2 linhas */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="clinicas-gallery">
                            <div className="gallery-grid">
                                {/* Primeira linha - 4 fotos */}
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={fachada} alt="Fachada da Clínica Ferreira Matos" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={recepcao} alt="Recepção da Clínica" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={interior} alt="Interior da Clínica" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={foto8} alt="Ambiente da Clínica" />
                                    </div>
                                </div>

                                {/* Segunda linha - 4 fotos */}
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={foto3} alt="Área da Clínica" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={foto5} alt="Espaço da Clínica" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={foto7} alt="Instalações da Clínica" />
                                    </div>
                                </div>
                                
                                <div className="gallery-item">
                                    <div className="image-wrapper">
                                        <img src={doutoraDentro} alt="Doutora no Consultório" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clinicas; 