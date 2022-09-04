import React from 'react'
import { graphql } from 'gatsby'
import HeaderApp from '../components/HeaderApp'
import Divider from '../components/Divider'
import { container, htmlContent, head, publiDate, techInUse } from '../styles/articleTemplate.module.css'

export default function ArticlesTemplate({data}) {

  const {html} = data.markdownRemark
  const {title, subtitle, date, tech} = data.markdownRemark.frontmatter
  const entryDate = new Date(date)
  let formatedDate = ((entryDate.getDate()) +  "/" + (entryDate.getMonth() + 1) + "/" + entryDate.getFullYear() )

  return (
    <div className={container}>
      <nav>
        <HeaderApp />
      </nav>
      <section className={head}>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>

          <div className={publiDate}>
            <h5>publicado em:</h5>
            <h3>{formatedDate}</h3>
          </div>

      <Divider />
      <div className={techInUse}>
      {
        tech.map( element => {
          return (
            <h5> {element} </h5>
            )
          })
        }
        </div>

      </section>
      <section>
        <div dangerouslySetInnerHTML={{__html: html}} className={htmlContent}></div>
      </section>
    </div>
  )
}

export const query= graphql`
query TemplateQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      subtitle
      date
      tech
    }
  }
}

`
