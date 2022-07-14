import React from 'react'
import { Link } from 'gatsby'
import {Article, ArticleContainer, ArticleTitle, ArticleDate } from '../styles/articles.module.css'

export default function ArticleLink({slug, title, subtitle, date}) {
  return (
    <Link to={slug} className={ArticleContainer}>
        <div className={Article}>
            <div className={ArticleTitle}>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
            <h4 className={ArticleDate}>{date}</h4>
        </div>
    </Link>
  )
}
