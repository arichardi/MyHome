import React from 'react'
import { graphql } from 'gatsby'
import HeaderApp from '../components/HeaderApp'
import { container, htmlContent } from '../styles/articleTemplate.module.css'

export default function ArticlesTemplate({data}) {

  const {html} = data.markdownRemark
  const {title, subtitle, date} = data.markdownRemark.frontmatter

  return (
    <div className={container}>
      <nav>
        <HeaderApp />
      </nav>
      <h1>Title</h1>
      <h2>subtitle</h2>
      <div className={htmlContent} dangerouslySetInnerHTML={{__html: html}} >

      </div>
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
    }
  }
}

`
