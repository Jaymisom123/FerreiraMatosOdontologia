import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Appointment.scss';

const Appointment = () => {

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        <div className="appointment-info-area text-center">
                            <SectionTitle 
                                subTitle="AGENDAMENTO"
                                title="Agende sua consulta conosco"
                                description="Entre em contato pelos telefones ou WhatsApp para agendar sua consulta. Nossa equipe está pronta para atendê-lo com carinho e profissionalismo."
                            />
                            
                            <div className="contact-buttons mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 mb-3">
                                        <a 
                                            href="https://wa.me/5564981457994" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-whatsapp"
                                            style={{
                                                background: '#25D366',
                                                color: 'white',
                                                padding: '15px 30px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <i className="fab fa-whatsapp" style={{fontSize: '20px'}}></i>
                                            WhatsApp - Clínica Fátima
                                        </a>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <a 
                                            href="https://wa.me/5564999553163" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-whatsapp"
                                            style={{
                                                background: '#25D366',
                                                color: 'white',
                                                padding: '15px 30px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <i className="fab fa-whatsapp" style={{fontSize: '20px'}}></i>
                                            WhatsApp - Clínica Centro
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="row justify-content-center mt-4">
                                    <div className="col-md-6 mb-3">
                                        <a 
                                            href="tel:+5564981457994"
                                            className="btn btn-phone"
                                            style={{
                                                background: '#A42875',
                                                color: 'white',
                                                padding: '15px 30px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <i className="fas fa-phone" style={{fontSize: '18px'}}></i>
                                            Clínica Fátima - (64) 98145-7994
                                        </a>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <a 
                                            href="tel:+5564999553163"
                                            className="btn btn-phone"
                                            style={{
                                                background: '#A42875',
                                                color: 'white',
                                                padding: '15px 30px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <i className="fas fa-phone" style={{fontSize: '18px'}}></i>
                                            Clínica Centro - (64) 99955-3163
                                        </a>
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

export default Appointment;