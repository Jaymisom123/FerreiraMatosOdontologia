import React from 'react';
import bannerPattern from '../../assets/banner/pattern_02.png';
import './Banner.scss';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            {/* Video Background */}
            <div className="video-background">
                <video autoPlay muted loop className="background-video">
                    <source src="/video-background.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="banner-content-wrapper" data-aos="fade-up" data-aos-duration="2000">
                                    {/* Conteúdo principal centralizado */}
                                    <div className="banner-main-content">
                                        <div className="text-center mb-5">
                                            <h1 className="banner-title">Sorria com tranquilidade</h1>
                                            <h2 className="banner-subtitle-main">Estamos aqui por você!</h2>
                                            
                                            <div className="banner-description">
                                                <h3 className="banner-tagline">
                                                    Somos <span className="highlight">DENTISTAS EM CATALÃO</span>
                                                </h3>
                                                <p className="banner-text">
                                                    São 2 Clínicas com dentistas em Catalão realizando atendimento acolhedor, 
                                                    com especialistas em diversas áreas odontológicas para você.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Botões das clínicas alinhados profissionalmente */}
                                        <div className="clinics-section">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-5 col-md-6 mb-4">
                                                    <div className="elegant-clinic-btn">
                                                        <a href="https://wa.me/5564999553163" target="_blank" rel="noopener noreferrer">
                                                            <div className="btn-content">
                                                                <div className="btn-header">
                                                                    <div className="clinic-icon">
                                                                        <i className="fas fa-hospital"></i>
                                                                    </div>
                                                                    <div className="clinic-info">
                                                                        <span className="clinic-name">UNIDADE CENTRO</span>
                                                                        <span className="clinic-status">Disponível</span>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-details">
                                                                    <div className="contact-item">
                                                                        <i className="fab fa-whatsapp"></i>
                                                                        <span>(64) 99955-3163</span>
                                                                    </div>
                                                                    <div className="address-item">
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        <span>Av. José Marcelino, 168</span>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-action">
                                                                    <span>Agendar via WhatsApp</span>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 col-md-6 mb-4">
                                                    <div className="elegant-clinic-btn">
                                                        <a href="https://wa.me/5564981457994" target="_blank" rel="noopener noreferrer">
                                                            <div className="btn-content">
                                                                <div className="btn-header">
                                                                    <div className="clinic-icon">
                                                                        <i className="fas fa-hospital"></i>
                                                                    </div>
                                                                    <div className="clinic-info">
                                                                        <span className="clinic-name">UNIDADE FÁTIMA</span>
                                                                        <span className="clinic-status">Disponível</span>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-details">
                                                                    <div className="contact-item">
                                                                        <i className="fab fa-whatsapp"></i>
                                                                        <span>(64) 98145-7994</span>
                                                                    </div>
                                                                    <div className="address-item">
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        <span>Setor Fátima - Catalão/GO</span>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-action">
                                                                    <span>Agendar via WhatsApp</span>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;