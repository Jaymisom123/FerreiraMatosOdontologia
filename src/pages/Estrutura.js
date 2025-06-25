import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Clinicas from '../sections/Clinicas/Clinicas';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';

const Estrutura = () => {
    return (
        <>
            <Navbar/>
            <PageTitle title="Nossa Estrutura" subTitle="Conheça nossas instalações modernas e equipamentos de última geração"/>
            <Clinicas/>
            <Features/>
            <Footer/>
        </>
    );
};

export default Estrutura; 