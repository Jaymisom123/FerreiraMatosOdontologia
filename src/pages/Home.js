import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Clinicas from '../sections/Clinicas/Clinicas';
import Expert from '../sections/Expert/Expert';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Clinicas/>
            <Services/>
            <Expert/>
            <Appointment/>
            
            {/* Seção de Localização */}
            <section className="location-section py-5" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <SectionTitle 
                                title="Nossas Localizações" 
                                subTitle="Localização"
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
            
            <Footer/>
        </>
    );
};

export default Home;