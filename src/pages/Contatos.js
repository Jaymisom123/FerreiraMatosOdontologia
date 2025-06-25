import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Appointment from '../sections/Appointment/Appointment';
import Footer from '../sections/Footer/Footer';

const Contatos = () => {
    return (
        <>
            <Navbar/>
            <PageTitle title="Entre em Contato" subTitle="Agende sua consulta na Ferreira Matos Odontologia"/>
            
            {/* Seção de Localização das Clínicas */}
            <section className="location-section py-5" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <SectionTitle 
                                title="Nossas Localizações" 
                                subTitle="Entre em Contato"
                            />
                            <p style={{fontSize: '18px', lineHeight: '1.8', color: '#6c757d', fontWeight: '400'}}>
                                Estamos localizados em 2 endereços, com ambientes acolhedores, prontos para atender suas necessidades odontológicas com humanização e respeito.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Clínica Fátima */}
                        <div className="col-lg-6 mb-4">
                            <div className="location-card" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                                border: '1px solid rgba(164, 40, 117, 0.1)',
                                height: '100%',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3 style={{
                                    color: '#A42875',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                }}>
                                    Clínica Nossa Senhora de Fátima
                                </h3>
                                
                                <div className="contact-info mb-4">
                                    <div className="contact-item" style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-map-marker-alt" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>Rua Frederico Campos, 780</span>
                                    </div>
                                    <div className="contact-item" style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-envelope" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>ferreiramatosodontologia@hotmail.com</span>
                                    </div>
                                    <div className="contact-item" style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-phone" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>(64) 98145-7994</span>
                                    </div>
                                </div>
                                
                                <div className="map-container mb-3" style={{borderRadius: '10px', overflow: 'hidden'}}>
                                    <iframe
                                        title="Mapa da Clínica Nossa Senhora de Fátima - Contatos"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8!2d-47.9!3d-18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzAwLjAiUyA0N8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                                        width="100%"
                                        height="200"
                                        style={{border: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                
                                <button 
                                    onClick={() => window.open('https://maps.google.com/?q=Rua Frederico Campos, 780, Catalão, GO', '_blank')}
                                    style={{
                                        background: 'linear-gradient(135deg, #A42875 0%, #D63384 100%)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        width: '100%',
                                        transition: 'all 0.3s ease',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(164, 40, 117, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <i className="fas fa-directions" style={{marginRight: '8px'}}></i>
                                    Como Chegar
                                </button>
                            </div>
                        </div>
                        
                        {/* Clínica Centro */}
                        <div className="col-lg-6 mb-4">
                            <div className="location-card" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                                border: '1px solid rgba(164, 40, 117, 0.1)',
                                height: '100%',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3 style={{
                                    color: '#A42875',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                }}>
                                    Clínica Centro
                                </h3>
                                
                                <div className="contact-info mb-4">
                                    <div className="contact-item" style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-map-marker-alt" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>Avenida José Marcelino, 168</span>
                                    </div>
                                    <div className="contact-item" style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-envelope" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>ferreiraematosodonto@hotmail.com</span>
                                    </div>
                                    <div className="contact-item" style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
                                        <i className="fas fa-phone" style={{color: '#A42875', marginRight: '10px', fontSize: '16px'}}></i>
                                        <span style={{color: '#333', fontSize: '15px'}}>(64) 99955-3163</span>
                                    </div>
                                </div>
                                
                                <div className="map-container mb-3" style={{borderRadius: '10px', overflow: 'hidden'}}>
                                    <iframe
                                        title="Mapa da Clínica Centro - Contatos"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8!2d-47.95!3d-18.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA5JzAwLjAiUyA0N8KwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v2"
                                        width="100%"
                                        height="200"
                                        style={{border: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                
                                <button 
                                    onClick={() => window.open('https://maps.google.com/?q=Avenida José Marcelino, 168, Catalão, GO', '_blank')}
                                    style={{
                                        background: 'linear-gradient(135deg, #A42875 0%, #D63384 100%)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        width: '100%',
                                        transition: 'all 0.3s ease',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(164, 40, 117, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <i className="fas fa-directions" style={{marginRight: '8px'}}></i>
                                    Como Chegar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Informações Adicionais */}
            <section className='contact-info-section pt-70 pb-70'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <SectionTitle 
                                title="Informações Importantes" 
                                subTitle="Horários e Serviços"
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="info-card" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                                height: '100%'
                            }}>
                                <div className="info-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #A42875 0%, #D63384 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="fas fa-clock" style={{color: 'white', fontSize: '24px'}}></i>
                                </div>
                                <h4 style={{color: '#A42875', marginBottom: '15px'}}>Horário de Funcionamento</h4>
                                <p style={{color: '#6c757d', margin: 0}}>
                                    <strong>Segunda a Sexta:</strong> 8h às 18h<br/>
                                    <strong>Sábado:</strong> 8h às 12h<br/>
                                    <strong>Domingo:</strong> Fechado
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="info-card" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                                height: '100%'
                            }}>
                                <div className="info-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #A42875 0%, #D63384 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="fas fa-credit-card" style={{color: 'white', fontSize: '24px'}}></i>
                                </div>
                                <h4 style={{color: '#A42875', marginBottom: '15px'}}>Formas de Pagamento</h4>
                                <p style={{color: '#6c757d', margin: 0}}>
                                    • Dinheiro<br/>
                                    • Cartão de Débito/Crédito<br/>
                                    • PIX<br/>
                                    • Parcelamento sem juros
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="info-card" style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                                height: '100%'
                            }}>
                                <div className="info-icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, #A42875 0%, #D63384 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="fas fa-hospital" style={{color: 'white', fontSize: '24px'}}></i>
                                </div>
                                <h4 style={{color: '#A42875', marginBottom: '15px'}}>Convênios</h4>
                                <p style={{color: '#6c757d', margin: 0}}>
                                    Atendemos diversos convênios odontológicos.<br/>
                                    <strong>Consulte disponibilidade.</strong><br/>
                                    Entre em contato para mais informações.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* WhatsApp CTA */}
                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="whatsapp-cta" style={{
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                borderRadius: '15px',
                                padding: '30px',
                                color: 'white'
                            }}>
                                <h3 style={{marginBottom: '15px', color: 'white'}}>
                                    <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i>
                                    Agende pelo WhatsApp
                                </h3>
                                <p style={{marginBottom: '20px', color: 'white', opacity: 0.9}}>
                                    Entre em contato diretamente pelo WhatsApp para agendar sua consulta de forma rápida e prática.
                                </p>
                                <div className="whatsapp-buttons" style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
                                    <a href="https://wa.me/556498145-7994" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       style={{
                                           background: 'rgba(255,255,255,0.2)',
                                           color: 'white',
                                           padding: '12px 25px',
                                           borderRadius: '25px',
                                           textDecoration: 'none',
                                           fontWeight: '600',
                                           transition: 'all 0.3s ease'
                                       }}
                                       onMouseEnter={(e) => {
                                           e.target.style.background = 'rgba(255,255,255,0.3)';
                                       }}
                                       onMouseLeave={(e) => {
                                           e.target.style.background = 'rgba(255,255,255,0.2)';
                                       }}
                                    >
                                        Clínica Fátima: (64) 98145-7994
                                    </a>
                                    <a href="https://wa.me/556499955-3163" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       style={{
                                           background: 'rgba(255,255,255,0.2)',
                                           color: 'white',
                                           padding: '12px 25px',
                                           borderRadius: '25px',
                                           textDecoration: 'none',
                                           fontWeight: '600',
                                           transition: 'all 0.3s ease'
                                       }}
                                       onMouseEnter={(e) => {
                                           e.target.style.background = 'rgba(255,255,255,0.3)';
                                       }}
                                       onMouseLeave={(e) => {
                                           e.target.style.background = 'rgba(255,255,255,0.2)';
                                       }}
                                    >
                                        Clínica Centro: (64) 99955-3163
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Contatos;