import React from 'react'
import { graphql } from 'gatsby'
import Divider from '../components/Divider'
import HeaderApp from '../components/HeaderApp'
import { container, SVGContainer, CTA, ArticlesHeading} from '../styles/articles.module.css'
import ArticlesSVG from '../SVG/articles'
import ArticleLink from '../components/ArticleLink'

export default function articles({data}) {

    const articles = data.allMarkdownRemark.nodes

    return (
        <div className={container}>
            <nav>
                <HeaderApp selector={"articles"} />
            </nav>
            <section className={CTA}>
                <h1>Meus Artigos</h1>
                <div className={SVGContainer}>
                    <ArticlesSVG />
                </div>
                <p>Como forma de desenvolvimento pessoal, tenho escrito artigos de tudo que eu estou estudando. É uma forma de reforçar o meu processo de aprendizado, ao mesmo tempo que crio um material de referência para consultas futuras, um registro do que tenho feito e produzido. Com esses artigos, espero também poder ajudar outras pessoas de alguma forma e criar contatos através de pontos de interesse. Espero que você faça bom uso e encontre algo que te possa ser útil.</p>
            </section>
            <section>
                <div className={ArticlesHeading}>
                    <h2>Mais recentes</h2>
                    <h3>data</h3>
                </div>
                <Divider />
                { articles.map( article => {

                    const options = { month: 'short', year: "2-digit"}
                    const articleDate = new Date(article.frontmatter.date)
                    const formattedDate = articleDate.toLocaleDateString("pt-br", options).replace(". de ", " - ")
                    
                    return (
                        <ArticleLink 
                        key={article.frontmatter.id}
                        slug={article.frontmatter.slug}
                        title={article.frontmatter.title}
                        subtitle={article.frontmatter.subtitle}
                        date={formattedDate}
                        />
                        )
                })}
            </section>
        </div>
    )
}

export const query = graphql`
query articleList{
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          subtitle
          title
        }
        id
      }
    }
  }
  
`