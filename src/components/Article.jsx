import React from 'react'
import {article, articleDivider} from '../styles/articles.module.css'

export default function Article() {
    return (
        <div>
        <div className={article}>
            <div>
                <h3>Testes utilizando jest</h3>
                <h4>Como utilizar testes para manter a unidade do código</h4>
            </div>
            <div>
                <p>Jul-21</p>
            </div>
        </div>
        <div className={articleDivider}/>
        </div>
    )
}
