import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Service from '../components/Service/Service';
import Appointment from '../sections/Appointment/Appointment';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import { AllServicesData } from '../sections/Services/ServiceData';
import '../sections/Services/Services.scss';
import Symptoms from '../sections/Symptoms/Symptoms';

const Services = () => {
    return (
        <>
            <Navbar />
            <ServiceBanner />
            
            {/* Seção com todos os serviços */}
            <section className='service-section pt-100 pb-70'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-8 mx-auto text-center">
                            <SectionTitle 
                                title="Todos os Nossos Serviços" 
                                subTitle="Especialidades Completas"
                            />
                            <p className='service-title-text mb-5'>
                                Conheça toda a gama de tratamentos odontológicos que oferecemos. 
                                Cada serviço é realizado com excelência técnica e cuidado humanizado.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {AllServicesData.map((singleService, index) => (
                            <Service key={index} serviceList={singleService}/>
                        ))}
                    </div>
                    
                    {/* Indicador de que esta é a página completa */}
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <p className="text-muted">
                                Exibindo todos os {AllServicesData.length} serviços especializados
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Symptoms />
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default Services;