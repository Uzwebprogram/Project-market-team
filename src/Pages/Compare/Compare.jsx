import React from 'react'
import "./Compare.css"
import Header from "../../Components/Header/Header"
import Prev from "../../Assets/Img/next_btn.png"
import CompareProduct from "../../Assets/Img/product_compare.png"
import Basket from "../../Assets/Img/basket.png"

function Compare() {

    return(
        <>
            <Header/>
            <div className="compare_container">
                <div className="compare_Navbar">
                    <p className="compare_Link">Главная</p>
                    <p className="compare_LinkInner">Сравнение товаров</p>
                </div>
                <h1 className='compare_heading'>Сравнение товаров</h1>

                {/* HERO */}

               <div className="compare_hero">
                    <div className="compare_pagination">
                        <button className='compare_prevBtn'>
                            <img src={Prev} alt={Prev} />
                        </button>
                        <button className='compare_nextBtn'>
                            <img src={Prev} alt={Prev} />
                        </button>
                    </div>
                    <div className="compare_cardWrapper">
                        <form action="">
                            <select className='compare_products products' id="product">
                                <option className='products__item' selected  value="Все товары">Все товары</option>
                                <option className='products__item' value="телефон">Телефон</option>
                                <option className='products__item' value="наушник">Наушник</option>
                                <option className='products__item' value="компютер">Компютер</option>
                                <option className='products__item' value="мышка">Мышка</option>
                            </select>
                            <div className="checkbox">
                                <input type="checkbox" id='check' name='Только различающиеся' />
                                <label className='compare_check' htmlFor="check">Только различающиеся</label>
                            </div>
                        </form>

                        <div className="compare_cards cards">
                            <div className="cards__item">
                                <button className="cards__delete">Убрать</button>
                                <img src={CompareProduct} alt="товари" width={286} height={160} />
                                <p className="cards__text">Сигвеи</p>
                                <p className="cards__productName">Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</p>
                                <p className="cards__price">5400 ₽</p>
                                <div className="cards__discount">
                                    <p className="cards__percentage">20%</p>
                                    <p className="cards__cost">– 1000 ₽</p>
                                </div>
                                <button className="cards__buyBtn">Купить в 1 клик</button>
                                <button className="cards__basket">
                                    <img src={Basket} alt="корзинка" width={21} height={20}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Compare