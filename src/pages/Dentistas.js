import React from 'react';
import doutoraAlba from '../assets/about/team/doutoraAlba.png';
import doutoraBruna from '../assets/about/team/doutoraBruna.png';
import doutoraIsabela from '../assets/about/team/doutoraIsabela.png';
import doutorJuliano from '../assets/about/team/doutorjulano.png';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Footer from '../sections/Footer/Footer';
import './Dentistas.scss';

const Dentistas = () => {
    const dentistas = [
        {
            nome: "Dra Alba Carina Ferreira Viana",
            cro: "CRO 17095 - GO",
            foto: doutoraAlba,
            formacao: [
                "Cirurgiã-Dentista pelo Centro Universitário do Triangulo Mineiro: 2019.",
                "Especialista em Harmonização Orofacial pela HD Ensinos Odontológico: 2021.",
                "Pós-graduanda em Ortodôntia pela Associação Brasileira de Odontologia de Uberlândia (atualmente)."
            ],
            procedimentos: [
                "Clareamento",
                "Limpeza / Raspagem", 
                "Extrações Dentárias de Adultos e Crianças",
                "Prótese Removível - Ponte / Dentadura",
                "Remoção de SISOS",
                "Restaurações",
                "Tratamento de Canal"
            ]
        },
        {
            nome: "Dra Isabela Sousa Silva",
            cro: "CRO 16738 - GO",
            foto: doutoraIsabela,
            formacao: [
                "Cirurgiã-Dentista pela Universidade de Uberaba (UNIUBE): 2018",
                "Aperfeiçoamento em Cirurgia Oral Menor pela Associação Brasileira de Odontologia: 2020",
                "Especialista em Ortodôntia pela FUNORTE: 2022",
                "Aperfeiçoamento em Prótese Fixa pelo IQO: 2022",
                "Aperfeiçoamento em Ortodôntia Infantil pelo instituto LENZA: 2023"
            ],
            procedimentos: [
                "Bloco",
                "Limpeza / Raspagem",
                "Manutenção de Aparelho Ortodôntico",
                "Manutenção de Aparelho Ortopédico",
                "Prótese Fixa - Pinos e Coroas",
                "Restaurações"
            ]
        },
        {
            nome: "DR. Juliano Franco Rosa",
            cro: "CRO 23428 - GO / CRO 50472 - MG",
            foto: doutorJuliano,
            formacao: [
                "Cirurgião Dentista pelo Centro Universitário do Triângulo Mineiro 2017.",
                "Especialista em implantodontia pela Gapi/ Funorte /2019."
            ],
            procedimentos: [
                "Implantes",
                "Prótese sobre implantes",
                "Protocolos",
                "Prótese Total (DENTADURA)",
                "Prótese Parcial (PONTE)"
            ]
        },
        {
            nome: "Dra Bruna Canedo Mesquita",
            cro: "CRO 17095 - GO",
            foto: doutoraBruna,
            formacao: [
                "Cirurgiã-Dentista pela Universidade Brasil.",
                "Especialista em Endodontia (tratamento de Canal) pela Universidade Brasil.",
                "Aperfeiçoamento em prótese fixa, lentes e facetas em resina.",
                "Pós-graduanda em Implantodontia pela Associação Brasileira de Odontologia de Uberlândia (atualmente)."
            ],
            procedimentos: [
                "Clareamento",
                "Lentes e Facetas",
                "Limpeza / Raspagem",
                "Prótese Removível - Ponte / Dentadura",
                "Restaurações",
                "Tratamento de Canal"
            ]
        }
    ];

    return (
        <>
            <Navbar/>
            <PageTitle 
                title="Dentistas Especialistas Em Catalão - GO" 
                subTitle="Atendimento humanizado com foco nas necessidades dos pacientes"
            />
            
            <section className="dentistas-section py-5">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="intro-content text-center">
                                <h2 className="main-title">"CUIDAR VAI ALÉM DO SEU SORRISO"</h2>
                                
                                <div className="intro-text">
                                    <p>
                                        No consultório, cada paciente é mais do que um prontuário — é uma história, uma vida e, 
                                        muitas vezes, alguém que chega com medo, insegurança ou experiências anteriores negativas. 
                                        Por isso, acreditamos que o atendimento odontológico deve ser, antes de tudo, acolhedor.
                                    </p>
                                    
                                    <p className="highlight-text">
                                        Criando experiências novas, para que nosso paciente perca o medo de algum trauma do passado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <SectionTitle 
                                subTitle="NOSSA EQUIPE"
                                title="Equipe Especializada de Dentistas em Catalão - GO"
                                description="Cuidado, Respeito e Dedicação"
                            />
                            
                            <div className="team-description">
                                <p>
                                    Aqui, ouvir é tão importante quanto tratar. Criamos um ambiente onde o paciente se sente seguro, 
                                    respeitado e amparado desde o primeiro contato. Cada detalhe é pensado para transmitir tranquilidade: 
                                    o tom de voz, o tempo dedicado à explicação de cada procedimento, o cuidado em respeitar limites e emoções.
                                </p>
                                
                                <p>
                                    Entendemos que o tratamento começa no coração e se reflete no sorriso. Por isso, nossa missão vai além 
                                    da técnica — é criar uma relação de confiança, empatia e cuidado verdadeiro. Porque quando o acolhimento 
                                    é real, o medo dá lugar à confiança, e o tratamento se transforma em uma experiência positiva.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {dentistas.map((dentista, index) => (
                            <div key={index} className="col-lg-6 col-md-6 mb-4">
                                <div className="dentista-card">
                                    <div className="dentista-photo">
                                        <img src={dentista.foto} alt={dentista.nome} />
                                    </div>
                                    
                                    <div className="dentista-header">
                                        <h3 className="dentista-nome">{dentista.nome}</h3>
                                        <span className="dentista-cro">{dentista.cro}</span>
                                    </div>
                                    
                                    <div className="dentista-content">
                                        <div className="formacao-section">
                                            <h4>Formação:</h4>
                                            <ul>
                                                {dentista.formacao.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="procedimentos-section">
                                            <h4>Procedimentos Realizados:</h4>
                                            <div className="procedimentos-grid">
                                                {dentista.procedimentos.map((proc, idx) => (
                                                    <span key={idx} className="procedimento-tag">{proc}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    );
};

export default Dentistas; 