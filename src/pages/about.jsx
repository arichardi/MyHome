import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import HeaderApp from '../components/HeaderApp';
import Divider from '../components/Divider';
import { container, aboutMe, tagSection, whiteSpace, tagSectionNoPIc} from '../styles/about.module.css';

export default function about() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>

        <section className={aboutMe}>
            <div >
                <h1>Sobre mim</h1>
                <p>Meu nome é André tenho 38 anos, nascido em São Paulo e ávido por histórias, viagens e comida. Por ter uma curiosidade pela àrea de 
artes como de humanidades me formei em Ciencias Sociais, com enfase em Antropologia. Por ter um interesse genuino sempre 
da intesecção entre humanidades e artes, na representação grafica de comportamentos e da modelagem de espaços gráficos, comecei
a trabalhar algum tempo depois como designer gráfico e modelagem 3D, em grande parte com retail e branding. Durante a pandemia, pensando
em novas perspectivas, passei a estudar programação e pensamento computacional. Após um curso de introdução a ciencias da 
computação (CS50), novas possibilidades surgiram. Não só a possibilidade de desenvolvimento de novos projetos, mas também o encadeamento
de novas metodologias e novas abordagens para antigas questões.
Atualmente tento me adentrar no intervalo entre essas 3 grandes questões, o design gráfico, a lógica de programação e as humanidades.</p>
            </div>
            <StaticImage 
                src='../images/Self.jpg'
                alt='A photo of myself' 
                placeholder='blurred'
                layout='constrained'
                width={1016}
                height={1176}

                />
        </section>
        <section className={tagSectionNoPIc}>
            <h2>Como é feito o site :</h2>
            <Divider />
            <p>Esse site foi feito em React, utilizando GatsbyJS e Netlify. Além de sangue suor e lagrimas</p>
        </section>
        <section className={tagSection}>
            <h2>O que eu estou lendo :</h2>
            <Divider />
            <div>

            <p>Tenho contato com todo tipo de livros técnicos no meu dia a dia, seja de programação, ou design, arquitetura, sociologia etc, Mas acho 
fundamental também ler livros não tecnicos. Livros que vão me trazer tipos diferentes de percepções e vão me colocar em contato com 
culturas e situações que de outro modo não teria contato. 
Depois de bastante tempo e lendo tudo quanto é tipo de coisa, acho que posso dizer que meus titulos fávoritos, são aqueles que envolvem
sagas familiares e narrativas fantásticas ao longo do tempo. Meu livro favorito nesse aspécto é o "Cem anos de Solidão" do Gabriel Garcia
Marques. E o último livro que li, que mexeu muito comigo e me deu novas perspectivas foi o "Pachinko" da Min Jin Lee.</p>
        <StaticImage 
        src='../images/cemAnos.jpg'
        alt='The cover of hundred years of solitud by gabriel garcia marquez' 
        placeholder='blurred'
        layout='constrained'
        height={300}
        />
        </div>
        </section>
        <section className={tagSectionNoPIc}>
            <h2>O que eu gosto de jogar :</h2>
            <Divider />
            <p>Eu tenho uma paixão por jogos indie. Acredito que pelo falo da grande maioria deles não só me surpreender mas me jogar novamente para minha 
infancia. Se forem jogos do tipo metroidvanias e/ou de plataformas a paixão é ainda maior. Os últimos jogos que joguei que me fizeram cair
de joelhos foi The Messenger, Dead cells e Tunic</p>
            <p>Outra tipo de jogo que eu adoro jogar quando tenho oportunidade são jogos de tabuleiro. Tem vários jogos hoje em dia em que a estratégia
e a relação com outros jogadores, torna tudo muito divertido.</p>
        </section>
        <div className={whiteSpace}></div>
    </div>
  )
}
