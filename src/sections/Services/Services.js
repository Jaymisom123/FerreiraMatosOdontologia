import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Service from '../../components/Service/Service';
import ServicesData from './ServiceData';
import './Services.scss';


const Services = () => {
    const handleNavigateToServices = () => {
        window.location.href = '/services';
    };

    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-8 mx-auto text-center">
                        <SectionTitle title="Nosso compromisso com você" subTitle="Serviços"/>
                        <p className='service-title-text'>Criamos um ambiente onde o paciente se sente seguro, respeitado e amparado desde o primeiro contato. Cada detalhe é pensado para transmitir tranquilidade.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <button 
                    onClick={handleNavigateToServices}
                    style={{
                        background: '#A42875',
                        color: 'white',
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        transition: 'all 0.3s ease'
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
                    Ver todos os serviços
                    <BsFillArrowRightCircleFill/>
                </button>
            </div>
        </section>
    );
};

export default Services;