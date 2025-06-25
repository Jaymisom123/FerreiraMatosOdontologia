import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Footer from '../sections/Footer/Footer';

// Importando as imagens dos aparelhos ortodônticos
import aparelho1 from '../assets/aparelho1.avif';
import aparelho2 from '../assets/aparelho2.avif';
import aparelho3 from '../assets/aparelho3.avif';
import safiraAparelho from '../assets/safiraaparelho.avif';

// Importando as imagens dos aparelhos ortopédicos
import ortopedico1 from '../assets/ortopedico-1.avif';
import ortopedico3 from '../assets/ortopedico3.avif';
import ortopedico4 from '../assets/ortopedico4.avif';
import ortopedicoExpansor from '../assets/ortopedicoexpansor-.avif';

const AparelhosOrtodônticos = () => {
    
    const ortodontiaData = [
        {
            'image': aparelho1,
            'title': 'Aparelhos Ortodônticos Convencionais em Aço',
            'description': 'Aparelhos metálicos tradicionais, eficazes para todos os tipos de correção ortodôntica. Resistentes e duráveis.',
        },
        {
            'image': aparelho2,
            'title': 'Aparelhos Ortodônticos Cerâmicos',
            'description': 'Brackets cerâmicos da cor do dente, proporcionando discrição durante o tratamento ortodôntico.',
        },
        {
            'image': safiraAparelho,
            'title': 'Aparelhos Ortodônticos Safira',
            'description': 'Brackets transparentes de safira, praticamente invisíveis e altamente estéticos para um sorriso discreto.',
        },
        {
            'image': aparelho3,
            'title': 'Aparelhos Ortodônticos Autoligados',
            'description': 'Tecnologia moderna que reduz o tempo de tratamento e proporciona maior conforto ao paciente.',
        }
    ];

    const ortopedicoData = [
        {
            'image': ortopedico1,
            'title': 'Aparelho Ortopédico Funcional',
            'description': 'Aparelhos funcionais para correção de problemas esqueléticos e funcionais em crianças e adolescentes.',
        },
        {
            'image': ortopedicoExpansor,
            'title': 'Expansor Palatino',
            'description': 'Aparelho para expansão do palato, corrigindo mordida cruzada e criando espaço para os dentes.',
        },
        {
            'image': ortopedico3,
            'title': 'Aparelho de Protração Maxilar',
            'description': 'Dispositivo ortopédico para estimular o crescimento da maxila em pacientes em crescimento.',
        },
        {
            'image': ortopedico4,
            'title': 'Aparelho Ortopédico Removível',
            'description': 'Aparelhos removíveis para correção de hábitos e pequenos movimentos dentários em crianças.',
        }
    ];

    const AparelhoCard = ({ aparelho }) => (
        <div className="col-lg-6 col-md-6 mb-4">
            <div className="aparelho-card" style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)',
                border: '1px solid rgba(164, 40, 117, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(164, 40, 117, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(164, 40, 117, 0.1)';
            }}
            >
                <div className="aparelho-image" style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '20px'
                }}>
                    <img 
                        src={aparelho.image} 
                        alt={aparelho.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                        }}
                    />
                </div>
                <div className="aparelho-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                        color: '#A42875',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '15px',
                        lineHeight: '1.3'
                    }}>{aparelho.title}</h3>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        margin: 0,
                        flex: 1
                    }}>{aparelho.description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar/>
            <PageTitle title="Aparelhos Ortodônticos e Ortopédicos" subTitle="Tratamentos especializados para todas as idades"/>
            
            {/* Seção ORTODONTIA */}
            <section className='pt-100 pb-50' data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <SectionTitle 
                                title="Trabalhamos com todos os tipos de aparelhos ortodônticos" 
                                subTitle="ORTODONTIA"
                            />
                            <p className='mb-5' style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#6c757d'
                            }}>
                                Na Ferreira Matos Odontologia, oferecemos diferentes tipos de aparelhos ortodônticos 
                                para atender às necessidades específicas de cada paciente, sempre priorizando 
                                conforto, estética e eficiência no tratamento.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {ortodontiaData.map((aparelho, index) => (
                            <AparelhoCard key={index} aparelho={aparelho} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção APARELHOS ORTOPÉDICOS */}
            <section className='pt-50 pb-70' data-aos="fade-up" data-aos-duration="2000" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <SectionTitle 
                                title="Trabalhamos com todos os tipos de aparelhos ORTOPÉDICOS para todos os tipos de casos" 
                                subTitle="APARELHOS ORTOPÉDICOS"
                            />
                            <p className='mb-5' style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#6c757d'
                            }}>
                                Os aparelhos ortopédicos são fundamentais para correção de problemas 
                                esqueléticos e funcionais, especialmente durante a fase de crescimento, 
                                proporcionando resultados mais estáveis e duradouros.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        {ortopedicoData.map((aparelho, index) => (
                            <AparelhoCard key={index} aparelho={aparelho} />
                        ))}
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-10 mx-auto">
                            <div className="ortodontia-info" style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '15px',
                                boxShadow: '0 8px 25px rgba(164, 40, 117, 0.1)'
                            }}>
                                <h3 style={{color: '#A42875', marginBottom: '20px'}}>Nossa Especialista em Ortodontia</h3>
                                <p style={{fontSize: '16px', lineHeight: '1.6'}}>
                                    <strong>Dra. Isabela Sousa Silva - CRO 16738-GO</strong><br/>
                                    Cirurgiã-Dentista pela UNIUBE (2018). Especialista em Ortodontia pela FUNORTE (2022). 
                                    Aperfeiçoamento em Cirurgia Oral Menor pela ABO (2020).
                                </p>
                                
                                <h4 className="mt-4" style={{color: '#A42875'}}>Benefícios do Tratamento Ortodôntico e Ortopédico</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Melhora da função mastigatória</li>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Alinhamento dos dentes</li>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Correção da mordida</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Melhora da estética do sorriso</li>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Facilita a higienização</li>
                                            <li style={{marginBottom: '8px'}}><i className="fas fa-check" style={{color: '#A42875', marginRight: '10px'}}></i>Previne problemas nas articulações</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    );
};

export default AparelhosOrtodônticos; 