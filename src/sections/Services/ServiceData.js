import iconOne from '../../assets/service/1.png';
import iconTwo from '../../assets/service/2.png';
import iconThree from '../../assets/service/3.png';
import iconFour from '../../assets/service/4.png';

// Primeiros 8 serviços para exibir na página inicial
const ServicesData = [
    {
        'icon': iconOne,
        'title': 'Aparelho Ortodôntico',
        'description': 'Correção de posicionamento dental com aparelhos convencionais, cerâmicos e autoligados.',
    },
    {
        'icon': iconTwo,
        'title': 'Aparelho Ortopédico',
        'description': 'Correção de problemas ósseos e crescimento facial em crianças e adolescentes.',
    },
    {
        'icon': iconThree,
        'title': 'Atendimento Especializado TEA/TDAH/TOD',
        'description': 'Cuidado humanizado para crianças com Autismo, TDAH e Transtorno Opositor Desafiador.',
    },
    {
        'icon': iconFour,
        'title': 'Clareamento Dental',
        'description': 'Clareamento profissional para deixar seu sorriso mais branco e radiante.',
    },
    {
        'icon': iconOne,
        'title': 'Implantes Totais',
        'description': 'Protocolo completo para reabilitação total da arcada dentária.',
    },
    {
        'icon': iconTwo,
        'title': 'Implantes Individuais',
        'description': 'Substituição de dentes perdidos com implantes únicos e precisos.',
    },
    {
        'icon': iconThree,
        'title': 'Limpeza / Raspagem',
        'description': 'Profilaxia profissional e remoção de tártaro para saúde bucal completa.',
    },
    {
        'icon': iconFour,
        'title': 'Placa para Bruxismo',
        'description': 'Proteção noturna personalizada para evitar desgaste dental.',
    }
];

// Todos os serviços (para a página de serviços completa)
export const AllServicesData = [
    ...ServicesData,
    {
        'icon': iconOne,
        'title': 'Prótese Parcial Removível',
        'description': 'Ponte removível para substituição parcial de dentes perdidos.',
    },
    {
        'icon': iconTwo,
        'title': 'Prótese Total (Dentadura)',
        'description': 'Reabilitação completa com próteses totais superiores e inferiores.',
    },
    {
        'icon': iconThree,
        'title': 'Remoção de Sisos',
        'description': 'Extração segura de dentes do siso com técnicas minimamente invasivas.',
    },
    {
        'icon': iconFour,
        'title': 'Tratamento de Canal',
        'description': 'Endodontia especializada para salvar dentes com polpa comprometida.',
    }
];

export default ServicesData;