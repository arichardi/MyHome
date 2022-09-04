import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import HeaderApp from '../components/HeaderApp';
import Divider from '../components/Divider';
import { container, aboutMe } from '../styles/about.module.css';

export default function about() {
  return (
    <div className={container}>
        <nav>
            <HeaderApp />
        </nav>
        <section className={aboutMe}>
            <div>
                <h1>Sobre mim</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis assumenda, officia dolore tenetur veritatis mollitia velit consequatur voluptatem hic, fugit nihil eaque doloribus vitae provident quos nemo reiciendis id, ipsa pariatur. Labore, veniam. Soluta, id quidem, laboriosam obcaecati similique harum eos error, repellat nihil culpa molestiae magni? Sapiente dignissimos qui tenetur consectetur aperiam! Voluptatem eligendi quos vitae doloribus praesentium.</p>
            </div>
            <StaticImage 
                src='../images/Self.jpg'
                alt='A photo of myself' 
                placeholder='blurred'
                layout='fixed'
                width={338}
                height={392} 
                />
        </section>
        <section>
            <h2>O que eu estou fazendo :</h2>
            <Divider />
            <p>Um monte de coisa escrita</p>
        </section>
        <section>
            <h2>Meus favoritos :</h2>
            <Divider />
            <p>Um monte de coisa escrita</p>
        </section>
    </div>
  )
}
