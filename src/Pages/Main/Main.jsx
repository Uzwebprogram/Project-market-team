import "./Main.css"
import Header from "../../Components/Header/Header"
import Carousel from 'react-bootstrap/Carousel'
import CarouselImg from "./../../Assets/Img/hero-silder-1.svg"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import stars from "./../../Assets/Img/icon-stars.png"
import message from "./../../Assets/Img/message-icons.svg"
import likee from "./../../Assets/Img/likee.svg"
import diagnostika from "./../../Assets/Img/diagnostika.svg"
import korzinka_card from "./../../Assets/Img/korzinka-card.svg"
function Main() {
  const [dataMain , setDataMain] = useState([])
  const [dataMainNews , setDataMainNews] = useState([])
  const [dataMainReklama , setDataMainReklama] = useState([])
  const [dataMainReklamaLeft , setDataMainReklamaLeft] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:4000/MainCatalogTop`)
    .then(res => res.json())
    .then(data => {
      setDataMain(data)
    })
  },[dataMain])
  useEffect(()=>{
    fetch(`http://localhost:4000/MainCatalogNews`)
    .then(res => res.json())
    .then(data => {
      setDataMainNews(data)
    })
  },[dataMainNews])
  useEffect(()=>{
    fetch(`http://localhost:4000/MainReklama`)
    .then(res => res.json())
    .then(data => {
      setDataMainReklama(data)
    })
  },[dataMainReklama])
  useEffect(()=>{
    fetch(`http://localhost:4000/mainReklamaLeft`)
    .then(res => res.json())
    .then(data => {
      setDataMainReklamaLeft(data)
    })
  },[dataMainReklamaLeft])
    return(
        <>
        <Header/>
        <div className="container">
        <Carousel>
  <Carousel.Item>
    <img
      className="carsuel-img d-block"
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="carsuel-img d-block"
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>

<img
      className="carsuel-img d-block "
      src={CarouselImg}
      alt="First slide"
    />
  </Carousel.Item>
</Carousel>
<div className="as-top-product">
          <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Хиты продаж</h3>
          <NavLink className="as-top-product-Navlink" to={"/"}>Все товары</NavLink>
          </div>
          <ul className="as-top-product-list">
          {
            dataMain && dataMain.map((e) =>{
              return(
                <li className="as-top-product-list-item" >
                  <p className="as-top-product-list-item-padding2">{e.categoriya[0]}</p>
                  <p className="as-top-product-list-item-padding">{e.categoriya[1]}</p>
                  <img className="as-top-product-list-item-img" src={e.Img} width={286} height={224} alt={e.Img} />
                  <p className="as-top-product-list-item-padding1">{e.categoriya[2]}</p>
                  <p className="as-top-product-list-item-title">{e.title}</p> 

                  <div className="as-top-product-list-item-center-bottom">
                  <div className="as-top-product-list-item-center" >
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <div>
                    <img className="as-top-product-list-item-center-message" src={message} width={24} height={24} alt="" />
                    <span className="as-top-product-list-item-center-message-span">(17)</span>
                    </div>
                  </div>
                    <div className="as-top-product-list-item-center-bottom-left">
                    <p className="as-top-product-list-item-aksiya">{e.sumaksiya}</p>
                  <p className="as-top-product-list-item-sum">{e.sum}</p>
                  <p className="as-top-product-list-item-titleFull">{e.titleFull}</p>
                  <div className="as-top-product-list-item-center-bottoms">
                  <div className="as-top-product-list-item-center-bottom-left-paddings">
                    <p className="as-top-product-list-item-center-bottom-left-padding-foiz">{e.sumafoiz}</p>
                    <p className="as-top-product-list-item-center-bottom-left-padding-minus">{e.sumaminus}</p>
                  </div>

                    <div className="as-top-product-list-item-center-bottom-buttons">
                      <button className="as-top-product-list-item-center-bottom-button"><img src={likee} width={14} height={14} alt={likee} /></button>
                      <button className="as-top-product-list-item-center-bottom-button"><img src={diagnostika} width={14} height={14} alt={diagnostika} /></button>
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="as-top-product-list-item-center-bottom-zakaz">
                    <button className="as-top-product-list-item-center-bottom-zakaz-button">Купить в 1 клик</button>
                    <button className="as-top-product-list-item-center-bottom-zakaz-button2"><img className="as-top-product-list-item-center-bottom-zakaz-button2-img" src={korzinka_card} width={20}  height={20} alt={korzinka_card}/></button>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="as-top-product">
          <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Новинки</h3>
          <NavLink className="as-top-product-Navlink" to={"/"}>Все товары</NavLink>
          </div>
          <ul className="as-top-product-list">
          {
            dataMainNews && dataMainNews.map((e) =>{
              return(
                <li className="as-top-product-list-item" >
                  <p className="as-top-product-list-item-padding2">{e.categoriya[0]}</p>
                  <p className="as-top-product-list-item-padding">{e.categoriya[1]}</p>
                  <img className="as-top-product-list-item-img" src={e.Img} width={286} height={224} alt={e.Img} />
                  <p className="as-top-product-list-item-padding1">{e.categoriya[2]}</p>
                  <p className="as-top-product-list-item-title">{e.title}</p> 

                  <div className="as-top-product-list-item-center-bottom">
                  <div className="as-top-product-list-item-center" >
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <div>
                    <img className="as-top-product-list-item-center-message" src={message} width={24} height={24} alt="" />
                    <span className="as-top-product-list-item-center-message-span">(17)</span>
                    </div>
                  </div>
                    <div className="as-top-product-list-item-center-bottom-left">
                    <p className="as-top-product-list-item-aksiya">{e.sumaksiya}</p>
                  <p className="as-top-product-list-item-sum">{e.sum}</p>
                  <p className="as-top-product-list-item-titleFull">{e.titleFull}</p>
                  <div className="as-top-product-list-item-center-bottoms">
                  <div className="as-top-product-list-item-center-bottom-left-paddings">
                    <p className="as-top-product-list-item-center-bottom-left-padding-foiz">{e.sumafoiz}</p>
                    <p className="as-top-product-list-item-center-bottom-left-padding-minus">{e.sumaminus}</p>
                  </div>

                    <div className="as-top-product-list-item-center-bottom-buttons">
                      <button className="as-top-product-list-item-center-bottom-button"><img src={likee} width={14} height={14} alt={likee} /></button>
                      <button className="as-top-product-list-item-center-bottom-button"><img src={diagnostika} width={14} height={14} alt={diagnostika} /></button>
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="as-top-product-list-item-center-bottom-zakaz">
                    <button className="as-top-product-list-item-center-bottom-zakaz-button">Купить в 1 клик</button>
                    <button className="as-top-product-list-item-center-bottom-zakaz-button2"><img className="as-top-product-list-item-center-bottom-zakaz-button2-img" src={korzinka_card} width={20}  height={20} alt={korzinka_card}/></button>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="main-center-reklama">
            <div className="main-center-reklama-left">
              {
                dataMainReklama && dataMainReklama.map((e)=>{
                  return(
                    <>
                  <h3 className="main-center-reklama-heading">{e.title1}</h3>
                  <img className="main-center-reklama-img" src={e.img1} width={179} height={172} alt={e.img1} />
                  </>
                  )
                })
              }

            </div>
            <div className="main-center-reklama-right">
                {
                  dataMainReklamaLeft && dataMainReklamaLeft.map((e)=>{
                    return(
                      <>
                  <h3 className="main-center-reklama-heading">{e.title2}</h3>
                  <img className="main-center-reklama-img" src={e.img2} width={179} height={172} alt={e.img2} />
                      </>
                    )
                  })
                }
            </div>
        </div>  
        <div className="as-top-product">
          <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Сигвеи</h3>
          <NavLink className="as-top-product-Navlink" to={"/"}>Все товары</NavLink>
          </div>
          <ul className="as-top-product-list">
          {
            dataMainNews && dataMainNews.map((e) =>{
              return(
                <li className="as-top-product-list-item" >
                  <p className="as-top-product-list-item-padding2">{e.categoriya[0]}</p>
                  <p className="as-top-product-list-item-padding">{e.categoriya[1]}</p>
                  <img className="as-top-product-list-item-img" src={e.Img} width={286} height={224} alt={e.Img} />
                  <p className="as-top-product-list-item-padding1">{e.categoriya[2]}</p>
                  <p className="as-top-product-list-item-title">{e.title}</p> 

                  <div className="as-top-product-list-item-center-bottom">
                  <div className="as-top-product-list-item-center" >
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <div>
                    <img className="as-top-product-list-item-center-message" src={message} width={24} height={24} alt="" />
                    <span className="as-top-product-list-item-center-message-span">(17)</span>
                    </div>
                  </div>
                    <div className="as-top-product-list-item-center-bottom-left">
                    <p className="as-top-product-list-item-aksiya">{e.sumaksiya}</p>
                  <p className="as-top-product-list-item-sum">{e.sum}</p>
                  <p className="as-top-product-list-item-titleFull">{e.titleFull}</p>
                  <div className="as-top-product-list-item-center-bottoms">
                  <div className="as-top-product-list-item-center-bottom-left-paddings">
                    <p className="as-top-product-list-item-center-bottom-left-padding-foiz">{e.sumafoiz}</p>
                    <p className="as-top-product-list-item-center-bottom-left-padding-minus">{e.sumaminus}</p>
                  </div>

                    <div className="as-top-product-list-item-center-bottom-buttons">
                      <button className="as-top-product-list-item-center-bottom-button"><img src={likee} width={14} height={14} alt={likee} /></button>
                      <button className="as-top-product-list-item-center-bottom-button"><img src={diagnostika} width={14} height={14} alt={diagnostika} /></button>
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="as-top-product-list-item-center-bottom-zakaz">
                    <button className="as-top-product-list-item-center-bottom-zakaz-button">Купить в 1 клик</button>
                    <button className="as-top-product-list-item-center-bottom-zakaz-button2"><img className="as-top-product-list-item-center-bottom-zakaz-button2-img" src={korzinka_card} width={20}  height={20} alt={korzinka_card}/></button>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="as-top-product">
          <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Моноколеса</h3>
          <NavLink className="as-top-product-Navlink" to={"/"}>Все товары</NavLink>
          </div>
          <ul className="as-top-product-list">
          {
            dataMainNews && dataMainNews.map((e) =>{
              return(
                <li className="as-top-product-list-item" >
                  <p className="as-top-product-list-item-padding2">{e.categoriya[0]}</p>
                  <p className="as-top-product-list-item-padding">{e.categoriya[1]}</p>
                  <img className="as-top-product-list-item-img" src={e.Img} width={286} height={224} alt={e.Img} />
                  <p className="as-top-product-list-item-padding1">{e.categoriya[2]}</p>
                  <p className="as-top-product-list-item-title">{e.title}</p> 

                  <div className="as-top-product-list-item-center-bottom">
                  <div className="as-top-product-list-item-center" >
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <div>
                    <img className="as-top-product-list-item-center-message" src={message} width={24} height={24} alt="" />
                    <span className="as-top-product-list-item-center-message-span">(17)</span>
                    </div>
                  </div>
                    <div className="as-top-product-list-item-center-bottom-left">
                    <p className="as-top-product-list-item-aksiya">{e.sumaksiya}</p>
                  <p className="as-top-product-list-item-sum">{e.sum}</p>
                  <p className="as-top-product-list-item-titleFull">{e.titleFull}</p>
                  <div className="as-top-product-list-item-center-bottoms">
                  <div className="as-top-product-list-item-center-bottom-left-paddings">
                    <p className="as-top-product-list-item-center-bottom-left-padding-foiz">{e.sumafoiz}</p>
                    <p className="as-top-product-list-item-center-bottom-left-padding-minus">{e.sumaminus}</p>
                  </div>

                    <div className="as-top-product-list-item-center-bottom-buttons">
                      <button className="as-top-product-list-item-center-bottom-button"><img src={likee} width={14} height={14} alt={likee} /></button>
                      <button className="as-top-product-list-item-center-bottom-button"><img src={diagnostika} width={14} height={14} alt={diagnostika} /></button>
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="as-top-product-list-item-center-bottom-zakaz">
                    <button className="as-top-product-list-item-center-bottom-zakaz-button">Купить в 1 клик</button>
                    <button className="as-top-product-list-item-center-bottom-zakaz-button2"><img className="as-top-product-list-item-center-bottom-zakaz-button2-img" src={korzinka_card} width={20}  height={20} alt={korzinka_card}/></button>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="main-center-reklama">
            <div className="main-center-reklama-left">
              {
                dataMainReklama && dataMainReklama.map((e)=>{
                  return(
                    <>
                  <h3 className="main-center-reklama-heading">{e.title1}</h3>
                  <img className="main-center-reklama-img" src={e.img1} width={179} height={172} alt={e.img1} />
                  </>
                  )
                })
              }

            </div>
            <div className="main-center-reklama-right">
                {
                  dataMainReklamaLeft && dataMainReklamaLeft.map((e)=>{
                    return(
                      <>
                  <h3 className="main-center-reklama-heading">{e.title2}</h3>
                  <img className="main-center-reklama-img" src={e.img2} width={179} height={172} alt={e.img2} />
                      </>
                    )
                  })
                }
            </div>
        </div>  
        <div className="as-top-product">
          <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Электровелосипеды</h3>
          <NavLink className="as-top-product-Navlink" to={"/"}>Все товары</NavLink>
          </div>
          <ul className="as-top-product-list">
          {
            dataMainNews && dataMainNews.map((e) =>{
              return(
                <li className="as-top-product-list-item" >
                  <p className="as-top-product-list-item-padding2">{e.categoriya[0]}</p>
                  <p className="as-top-product-list-item-padding">{e.categoriya[1]}</p>
                  <img className="as-top-product-list-item-img" src={e.Img} width={286} height={224} alt={e.Img} />
                  <p className="as-top-product-list-item-padding1">{e.categoriya[2]}</p>
                  <p className="as-top-product-list-item-title">{e.title}</p> 

                  <div className="as-top-product-list-item-center-bottom">
                  <div className="as-top-product-list-item-center" >
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <img src={stars} width={20} height={20} alt="" />
                    <div>
                    <img className="as-top-product-list-item-center-message" src={message} width={24} height={24} alt="" />
                    <span className="as-top-product-list-item-center-message-span">(17)</span>
                    </div>
                  </div>
                    <div className="as-top-product-list-item-center-bottom-left">
                    <p className="as-top-product-list-item-aksiya">{e.sumaksiya}</p>
                  <p className="as-top-product-list-item-sum">{e.sum}</p>
                  <p className="as-top-product-list-item-titleFull">{e.titleFull}</p>
                  <div className="as-top-product-list-item-center-bottoms">
                  <div className="as-top-product-list-item-center-bottom-left-paddings">
                    <p className="as-top-product-list-item-center-bottom-left-padding-foiz">{e.sumafoiz}</p>
                    <p className="as-top-product-list-item-center-bottom-left-padding-minus">{e.sumaminus}</p>
                  </div>

                    <div className="as-top-product-list-item-center-bottom-buttons">
                      <button className="as-top-product-list-item-center-bottom-button"><img src={likee} width={14} height={14} alt={likee} /></button>
                      <button className="as-top-product-list-item-center-bottom-button"><img src={diagnostika} width={14} height={14} alt={diagnostika} /></button>
                    </div>
                    </div>
                  </div>
                  </div>
                  <div className="as-top-product-list-item-center-bottom-zakaz">
                    <button className="as-top-product-list-item-center-bottom-zakaz-button">Купить в 1 клик</button>
                    <button className="as-top-product-list-item-center-bottom-zakaz-button2"><img className="as-top-product-list-item-center-bottom-zakaz-button2-img" src={korzinka_card} width={20}  height={20} alt={korzinka_card}/></button>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
        <div className="as-top-product">
        <div className="as-top-product-about"> 
          <h3 className="as-top-product-heading">Электровелосипеды</h3>
          <NavLink className="as-top-product-Navlink" to={"/allNews"}>Читать все</NavLink>
          </div>
        <div className="main-center-reklama">
          
            <div className="main-center-news-left">
            <h3 className="main-center-news-heading1">Открытие нового магазина</h3>
                      <p>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения</p>
                      <div className="c-news-btn-box">
                        <span className="c-news-link">Подробнее</span>
                        <p>01.02.2022</p>
                      </div>
            </div>
            <div className="main-center-news-right">
                  <h3 className="main-center-news-heading1">Открытие нового магазина</h3>
                      <p>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения</p>
                      <div className="c-news-btn-box">
                        <span className="c-news-link">Подробнее</span>
                        <p>01.02.2022</p>
                      </div>
            </div>
        </div>  
        </div>
        </div>

       
        </>
    )
}
export default Main