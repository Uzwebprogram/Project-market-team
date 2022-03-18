import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import allnewsData from './AllNewsData'
import './AllNews.css'

function AllNews() {
    return (
        <>
        <Header/>
        <section className="c-allnews">
            <div className="container">
                <div className="c-news-div">
                    <h2 className='c-news-div-title'>Новости</h2>
                    <ul className="c-news-list">
                        {
                            allnewsData.map(elem => (
                                <li className="c-news-item">
                                    <div className="c-news-img-box">
                                        <img className='c-news-img-box-img' src={elem.imgUrl}  width='150' alt="image" />
                                    </div>
                                    <div className="c-news-info-box">
                                        <h3 className='c-news-title'>{elem.title}</h3>
                                        <p className='c-news-text'>{elem.shortText}</p>
                                        <div className="c-news-btn-box">
                                            <span className='c-news-link'>Подробнее</span>
                                            <p className='c-news-data'>{elem.date}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default AllNews
