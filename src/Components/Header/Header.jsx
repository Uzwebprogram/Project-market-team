import { NavLink } from "react-router-dom";
import "./Header.css";
import { StatusCode } from "react-http-status-code";
import vieber from "./../../Assets/Img/vieber.svg";
import whatsapp from "./../../Assets/Img/whatsapp.svg";
import telegram from "./../../Assets/Img/telegram.svg";
import modal_zakaz from "./../../Assets/Img/modal-zakaz.png";
import Logo from "./../../Assets/Img/Logo.svg";
import search from "./../../Assets/Img/search.svg";
import like from "./../../Assets/Img/like.svg";
import taroz from "./../../Assets/Img/taroz.svg";
import cart from "./../../Assets/Img/cart.svg";
import korzinka_img from "./../../Assets/Img/korzinka-img.png";
import korzinka_delete from "./../../Assets/Img/korzinka-img-delete.svg";
import header_bottom_before from "./../../Assets/Img/header-bottom-before.svg";
import header_media_tel from "./../../Assets/Img/header-media-tel.svg";
import header_hamburger from "./../../Assets/Img/header-hamburger.svg";
import header_media_stars from "./../../Assets/Img/stars-media-header.svg";
import header_media_reklama from "./../../Assets/Img/media-header-reklama.svg";
import header_media_hamburgerClose from "./../../Assets/Img/header-media-hamburgerClose.svg";
import header_nav__home from "./../../Assets/Img/nav_footer_home.svg";
import header_nav__search from "./../../Assets/Img/nav_footer_search.svg";
import header_nav__heart from "./../../Assets/Img/nav_footer_heart.svg";
import header_nav__shop from "./../../Assets/Img/nav_footer_shop.svg";
import header_nav__balance from "./../../Assets/Img/nav_footer_balance.svg";
import catalog_1 from "./../../Assets/Img/catalog_1.svg";
import catalog_2 from "./../../Assets/Img/catalog_2.svg";
import catalog_3 from "./../../Assets/Img/catalog_3.svg";
import catalog_4 from "./../../Assets/Img/catalog_4.svg";
import catalog_5 from "./../../Assets/Img/catalog_5.svg";
import catalog_6 from "./../../Assets/Img/catalog_6.svg";
import catalog_7 from "./../../Assets/Img/catalog_7.svg";
import catalog_8 from "./../../Assets/Img/catalog_8.svg";
import catalog_9 from "./../../Assets/Img/catalog_9.svg";
import catalog_10 from "./../../Assets/Img/catalog_10.svg";
import catalog_11 from "./../../Assets/Img/catalog_11.svg";
import sign from "./../../Assets/Img/sign.svg"
import { useLogin } from "../../Context/Auth";
import checkGif from "./../../Assets/Img/check.gif";
// import imgsamkat from "https://voronezh.electrotown/.ru/image/cache/catalog/i/ol/of/df70218593955545eda8e789ba2915ba-700x700.jpg"
import { useEffect, useRef, useState } from "react";
function Header() {
  const hamburgerMedia = useRef();
  const hamburgers = useRef();
  const Closehamburgers = useRef();
  const modal = useRef();
  const modalCatalog = useRef();
  const overlays = useRef();
  const modalCloseBtn = useRef();
  const modalOpenBtn = useRef();
  const overlayWhite = useRef();
  const overlaykorzinka = useRef();
  const FooterNav = useRef();
  const ModalForm = useRef()
  const ModalFormRegister = useRef()
  const errorLogin = useRef()
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [registName , setRegistName] = useState("")
  const [registPassword , setRegistPassword] = useState("")
  const [registTel , setregistTel] = useState("")
  const [registEmail, setregistEmail] =useState("")
  const [ token, setToken ] = useLogin()
  const [btnDisabled , setbtnDisabled] = useState(false)
  const signModal = useRef()
  const signs = useRef()
  const mediaSigns = useRef()
  const mediaLogin =useRef()
  const SearchInput = useRef()
  const btnLogin = useRef()
  const loginFormOks = useRef()
  const errorRegister = useRef()
  const handleSubmit = async e => {
    e.preventDefault()

    try {
        const res = await fetch('https://project-market-authrization.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tel : email,
                email, 
                password
            })
        })
          if (res.status == 401) {
            errorLogin.current.style.display = "block"
          }else{
            errorLogin.current.style.display = "none"
            ModalForm.current.style.display = "none"
            loginFormOks.current.style.display = "block"
          }
        const data = await res.json()
        setToken(data?.accsesToken)

    } catch(err) {
        console.log(err)
    }
    
    if (e.status == 401) {
      console.log("ok");
    }



}

const RegisterSubmit = async e => {
  e.preventDefault()

try {
  const res = await fetch('https://project-market-authrization.herokuapp.com/registar', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name : registName,
          email: registEmail, 
          tel : registTel,
          password : registPassword,
      })
  })
    if (res.status == 400) {
      errorRegister.current.style.display = "block"
    }else{
      errorLogin.current.style.display = "none"
      ModalForm.current.style.display = "none"
    }
  const data = await res.json()
  setToken(data?.accsesToken)
} catch(err) {
  console.log(err)
}
}
const handleLogOut = () =>{
  window.localStorage.removeItem("token")
}

useEffect(()=>{

  if (token) {  
    btnLogin.current.style.display = "none"
    signs.current.style.display = "flex"
    signs.current.style.position = "absolute"
    signs.current.style.top = "72px"
    signs.current.style.right = "325px"
    mediaLogin.current.style.display = "none"
    mediaSigns.current.style.display ="block"
    SearchInput.current.style.marginLeft = "150px"
  }
},[token])
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header-top">
            <div className="header-top-left">
              <div className="header-top-left-right">
                <NavLink className={"header-top-navLink"} to="/service">
                  Service
                </NavLink>
                <NavLink className={"header-top-navLink"} to="/Cooperation">
                  Cooperation
                </NavLink>
                <span
                  className="header-top-padding"
                  onClick={() => {
                    modal.current.style.top = "100px";
                    overlays.current.style.display = "block";
                  }}
                >
                  Заказать звонок
                </span>
              </div>
              <div className="header-top-left-ItemLeft">
                <a href="#">
                  <img
                    className="header-top-left-ItemLeft-img"
                    src={vieber}
                    width={15}
                    height={15}
                    alt={vieber}
                  />
                </a>
                <a href="#">
                  <img
                    className="header-top-left-ItemLeft-img"
                    src={whatsapp}
                    width={15}
                    height={15}
                    alt={vieber}
                  />
                </a>
                <a href="#">
                  <img
                    className="header-top-left-ItemLeft-img"
                    src={telegram}
                    width={12}
                    height={15}
                    alt={vieber}
                  />
                </a>
              </div>
            </div>
            <div className="header-top-right">
              <a
                className="header-top-right-tel"
                href="tel:+998 (91) 503 - 93 - 90"
              >
                +998 (91) 503 - 93 - 90
              </a>
            </div>
          </nav>
          <hr className="headering" />
          <nav className="header-center">
            <div className="header-center-left">
                  <NavLink to={"/"}>
                  <img
                className="header-center-logo"
                src={Logo}
                width={180}
                height={34}
                alt={Logo}
              />

                  </NavLink>
              <form>
                <input ref={SearchInput} className="header-center-search-input"  placeholder="Искать самокат KUGO" type="text"
                />
                <button className="header-center-search-button">
                  <img src={search} width={16} height={16} alt={search} />
                </button>
              </form>
            </div>
            <div  ref={btnLogin} className="header-center-top">
              <button  className="header-center-btn"  onClick={()=>{
                              ModalForm.current.style.display = "block"
                              overlays.current.style.display = "block"
                              
                            }}>Войти</button>
            </div>
            <div className="header-center-right">
              
            <img src={sign} ref={signs} className="header-center-right-img3" onClick={()=>{
                overlayWhite.current.style.display = "block"
                signModal.current.style.display = "block"
            }} width={38} height={38} alt={sign} />
            <NavLink to={"/Compare"}>
            <img
                className="header-center-right-img2"
                src={taroz}
                width={30}
                height={30}
                alt={taroz}
              />
            </NavLink>
            <NavLink  to={"/Favorites"}>
            <img
                className="header-center-right-img"
                src={like}
                width={20}
                height={20}
                alt={like} 
              />
            </NavLink>
              <img
                className="header-center-right-img1"
                onClick={() => {
                  overlaykorzinka.current.style.display = "block";
                  overlayWhite.current.style.display = "block";
                }}
                src={cart}
                width={20}
                height={20}
                alt={cart}
              />
              <span
                className="header-center-right-padding"
                onClick={() => {
                  overlaykorzinka.current.style.display = "block";
                  overlayWhite.current.style.display = "block";
                }}
              >
                Корзина
              </span>
            </div>
          </nav>
          <div className="modal-sign" ref={signModal}>
                  <ul className="modal-sign-top-list">
                    <li className="modal-sign-top-list-item">Общие сведения</li>
                    <li className="modal-sign-top-list-item">Личные данные</li>
                    <li className="modal-sign-top-list-item">История покупок</li>
                    <li className="modal-sign-top-list-item">Избранное</li>
                    <li className="modal-sign-top-list-item">Сменить пароль</li>
                  </ul>
                <div className="modal-sign-bottom">
                </div>
                <p className="modal-sign-bottom-padding"
                onDoubleClick={() => handleLogOut()} >Выйти</p>
          </div>
          <div className="modal-korzinka" ref={overlaykorzinka}>
            <div className="modal-korzinka-top">
              <p className="modal-korzinka-top-left-padding">В вашей корзине</p>
              <p className="modal-korzinka-top-left-padding2">2 товара</p>
            </div>
            <ul className="modal-korzinka-center">
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  onClick={() => {
                    modalCatalog.current.style.backgroundColor = "red";
                  }}
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
              <NavLink to={"/Order"} className="modal-korzinka-center-item">
                <img
                  className="modal-korzinka-center-item-img"
                  src={korzinka_img}
                  width={49}
                  height={49}
                  alt={cart}
                />
                <div className="modal-korzinka-center-left">
                  <p className="modal-korzinka-center-left-padding">
                    Kugoo Kirin M4
                  </p>
                  <div className="modal-korzinka-center-left-center">
                    <span className="modal-korzinka-center-left-center-padding">
                      29 900 ₽
                    </span>
                    <span className="modal-korzinka-center-left-center-span">
                      1 шт.
                    </span>
                  </div>
                </div>
                <img
                  className="modal-korzinka-center-left-center-img"
                  src={korzinka_delete}
                  width={20}
                  height={20}
                  alt={korzinka_delete}
                />
              </NavLink>
            </ul>
            <div className="modal-korzinka-bottom">
              <div className="modal-korzinka-bottom-left">
                <p className="modal-korzinka-bottom-left-padding">Сумма:</p>
                <h4 className="modal-korzinka-bottom-left-padding2">
                  59 800 ₽
                </h4>
              </div>
              <button className="modal-korzinka-bottom-btn">
                Оформить заказ
              </button>
            </div>
          </div>
          <div ref={loginFormOks} className="loginFormOk">
            <p className="loginFormOk-padding">Account confirmed</p>
          <img className="loginFormOk-img" src={checkGif} width={100} height={100} alt="" />
          </div>
          <div className="modal-catalog" ref={modalCatalog}>
          <img
                              className="header-center-media-btn-imgCloses"
                              ref={Closehamburgers}
                              onClick={() => {
                                overlays.current.style.display ="none";
                                Closehamburgers.current.style.display = "none";
                                modalCatalog.current.style.display = "none";
                                hamburgers.current.style.display = "flex";
                                FooterNav.current.style.display = "flex";
                                hamburgerMedia.current.style.display = "none";
                              }}
                              src={header_media_hamburgerClose}
                              width={16}
                              height={16}
                              alt={header_hamburger}
                            />
            <ul className="modal-catalog-list-left">
              <li className="modal-catalog-list-item-left">
                <img className="modal-catalog-list-item-left-img" src={catalog_1} width={32} height={32} alt={catalog_1} />
                 Гироскутеры
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_2} width={32} height={32} alt={catalog_2} />
              Электросамокаты
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_3} width={32} height={32} alt={catalog_3} />
              Моноколеса
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_4} width={32} height={32} alt={catalog_4} />
              Сигвеи и мини-сигвеи
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_5} width={32} height={32} alt={catalog_5} />
              Электроскутеры
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_6} width={32} height={32} alt={catalog_6} />
              Электровелосипеды
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_7} width={32} height={32} alt={catalog_7} />
              Электроскейты
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_8} width={32} height={32} alt={catalog_8} />
              Электромобили
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_9} width={32} height={32} alt={catalog_9} />
              Аксессуары
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_10} width={32} height={32} alt={catalog_10} />
              Умные игрушки
              </li>
              <li className="modal-catalog-list-item-left">
              <img className="modal-catalog-list-item-left-img" src={catalog_11} width={32} height={32} alt={catalog_11} />
              Smart Watch
              </li>
            </ul>
          </div>

          <nav className="header-bottom"></nav>
          <ul className="header-bottom-item">
            <button
              ref={modalOpenBtn}
              className="header-center-button"
              onClick={() => {
                modalCatalog.current.style.display = "flex";
                modalOpenBtn.current.style.display = "none";
                modalCloseBtn.current.style.display = "block";
                overlayWhite.current.style.display = "block";
              }}
            >
              Каталог
            </button>
            <button
              ref={modalCloseBtn}
              className="header-center-button-close"
              onClick={() => {
                modalCatalog.current.style.display = "none";
                modalOpenBtn.current.style.display = "block";
                modalCloseBtn.current.style.display = "none";
                overlayWhite.current.style.display = "none";
              }}
            >
              Каталог
            </button>
            <NavLink to="/About " className="header-bottom-item-list">
              О компании
            </NavLink>
            <NavLink to="/Install" className="header-bottom-item-list">
              Рассрочка 0|0|18
              <NavLink to="/Install" className="header-bottom-item-list-check">
                Доступна рассрочка
              </NavLink>
            </NavLink>
            <NavLink to="/Service" className="header-bottom-item-list">
              Сервис и гарантия
            </NavLink>
            <NavLink to="/Drshop" className="header-bottom-item-list">
              Опт/дропшиппинг
            </NavLink>
            <NavLink to="/Contact" className="header-bottom-item-list">
              Контакты
            </NavLink>
            <NavLink to="/Aksiya" className="header-bottom-item-list">
              Акции{" "}
              <img
                className="header-bottom-item-list-img"
                src={header_bottom_before}
                width={20}
                height={20}
                alt={header_bottom_before}
              />
            </NavLink>
          </ul>          
          <div className="modal-auth" ref={ModalForm}>
                      <div className="modal-auth-top">
                            <p className="modal-auth-top-padding">Вход</p>
                            <p className="modal-auth-top-close" onClick={()=>{
                              ModalFormRegister.current.style.display="none"
                              ModalForm.current.style.display = "none"
                              overlays.current.style.display = "none"
                            }}>&times;</p>
                      </div>
                        <form className="modal-auth-center" onSubmit={handleSubmit}>  
                          <div className="modal-auth-center-top">
                            <p className="modal-auth-center-padding">Эл. почта или телефон</p>
                            <input className="modal-auth-center-input" onKeyUp={e => setEmail(e.target.value)} type="text" placeholder="Эл. почта или телефон"  required />
                            <div className="modal-auth-center-bottom">
                            <p className="modal-auth-center-padding" >Пароль</p>
                            <input className="modal-auth-center-input2"  type="password" placeholder="Пароль" onKeyUp={e => setPassword(e.target.value)}/>
                            </div>
                            <p className="modal-auth-error" ref={errorLogin}>Незарегистрированный пользователь</p>
                            <p className="password_reload">Забыли пароль?</p>
                            <button className="password_btn">Войти</button>
                            <p className="password_register" onClick={()=>{
                              ModalFormRegister.current.style.display = "block"
                              ModalForm.current.style.display = "none"
                            }}>Зарегистрироваться</p>
                          </div>
                        </form>
                      <div className="modal-auth-bottom">

                      </div>
          </div>
          <div className="modal-auth-register" ref={ModalFormRegister}>
                      <div className="modal-auth-top">
                            <p className="modal-auth-top-padding">Регистрация</p>
                            <p className="modal-auth-top-close"onClick={()=>{
                              ModalFormRegister.current.style.display="none"
                              ModalForm.current.style.display = "none"
                              overlays.current.style.display = "none"
                            }}>&times;</p>
                      </div>
                        <form className="modal-auth-center" onSubmit={RegisterSubmit}>  
                          <div className="modal-auth-center-top">
                            <p className="modal-auth-center-padding">Имя</p>
                            <input className="modal-auth-center-input" type="text" placeholder="Имя" onKeyUp={e =>{
                              setRegistName(e.target.value)
                            }}  required />
                            <p className="modal-auth-center-padding">Эл.почта</p>
                            <input className="modal-auth-center-input" type="email" placeholder="Эл.почта"  onKeyUp={e =>{
                              setregistEmail(e.target.value)
                            }} required />
                            <div className="modal-auth-center-bottom">
                            <p className="modal-auth-center-padding">Номер телефона</p>
                            <input className="modal-auth-center-input" type="number" placeholder="Номер телефона"   onKeyUp={e =>{
                              setregistTel(e.target.value)
                            }}   required />
                            <p className="modal-auth-center-padding">Пароль</p>
                            <input className="modal-auth-center-input2"  type="password" placeholder="Пароль"  onKeyUp={e =>{
                              setRegistPassword(e.target.value)
                            }} />
                            </div>
                            <p className="password-regist-padding" ref={errorRegister}>Эта информация сохраняется!</p>
                            <p className="password_reload">Забыли пароль?</p>
                            <button className="password_btns" type="submit">Зарегистрироваться</button>
                            <p className="password_register" onClick={()=>{
                                    ModalFormRegister.current.style.display="none"
                                    ModalForm.current.style.display = "block"
                            }}>Я уже зарегистрирован</p>
                          </div>
                        </form>
                      <div className="modal-auth-bottom">

                      </div>
          </div>
          {/*TODO media hamburger */}

          <div className="media-header-reklama">
            <div className="media-header-reklama-lefts">
              <img
                src={header_media_reklama}
                width={25}
                height={25}
                alt={header_media_reklama}
              />
              <div className="media-header-reklama-left">
                <p className="media-header-reklama-left-padding">
                  Открыть в приложении
                </p>
                <div className="media-header-reklama-left-imgs">
                  <img
                    src={header_media_stars}
                    width={9}
                    height={9}
                    alt={header_media_stars}
                  />
                  <img
                    src={header_media_stars}
                    width={9}
                    height={9}
                    alt={header_media_stars}
                  />
                  <img
                    src={header_media_stars}
                    width={9}
                    height={9}
                    alt={header_media_stars}
                  />
                  <img
                    src={header_media_stars}
                    width={9}
                    height={9}
                    alt={header_media_stars}
                  />
                  <img
                    src={header_media_stars}
                    width={9}
                    height={9}
                    alt={header_media_stars}
                  />
                  <span className="media-header-reklama-left-imgs-padding">
                    2К
                  </span>
                </div>
              </div>
            </div>
            <button className="media-header-reklama-btn">
              <a className="media-header-reklama-btn-atribut" href="#">
                Открыть
              </a>
            </button>
          </div>
          <hr className="headering-media-reklama" />
          <div className="media-header">
            <img
              className="header-center-logo"
              src={Logo}
              width={124}
              height={40}
              alt={Logo}
            />
                         <img src={sign} ref={mediaSigns} className="header-center-right-img4" onClick={()=>{
                overlayWhite.current.style.display = "block"
                signModal.current.style.display = "block"
            }} width={48} height={48} alt={sign} />
             <button ref={mediaLogin} className="header-center-btns" onClick={()=>{
                              ModalForm.current.style.display = "block"
                              overlays.current.style.display = "block"
                            }}>Войти</button>
          </div>
          <nav ref={FooterNav} className="nav">
            <NavLink to={"/"} className="nav__link">
              <i class="material-icons nav__icon">
                <img src={header_nav__home} alt="" />
              </i>
              <span class="nav__text">Главная</span>
            </NavLink>
            <a
              href="#"
              className="nav__link nav__link--active"
              onClick={() => {
                modalCatalog.current.style.display = "flex";
                modalOpenBtn.current.style.display = "none";
                modalCloseBtn.current.style.display = "block";
                overlays.current.style.display = "block";
              }}
            >
              <i class="material-icons nav__icon">
                <img src={header_nav__search} alt="" />
              </i>
              <span class="nav__text">Каталог</span>
            </a>
            <a
              href="#"
              className="nav__link "
              onClick={() => {
                overlaykorzinka.current.style.display = "block";
                overlays.current.style.display = "block";
              }}
            >
              <i class="material-icons nav__icon">
                <img src={header_nav__shop} alt="" />
              </i>
              <span class="nav__text">Корзина</span>
            </a>
            <span href="#" className="nav__link">
              <i class="material-icons nav__icon">
                <img src={header_nav__heart} alt="" />
              </i>
              <NavLink className={"nav__text_nav"} to={"/Favorites"}>Избранное</NavLink>

            </span>
            <a href="#" className="nav__link" ref={hamburgers}
                onClick={() => {
                  Closehamburgers.current.style.display = "flex";
                  hamburgerMedia.current.style.display = "block";
                  overlays.current.style.display ="block";
                }}>
              <i class="material-icons nav__icon" >
                <img src={header_nav__balance} alt="" />
              </i>
              <span class="nav__text"          
                  >Ещё</span>
            </a>
          </nav>
          <div ref={hamburgerMedia} className="modal-hamburger-media">

          <div className="header-center-media-top">
          <p className="modal-hamburger-media-padding">Ещё</p>
              <img
                              className="header-center-media-btn-imgClose"
                              ref={Closehamburgers}
                              onClick={() => {
                                overlays.current.style.display ="none";
                                Closehamburgers.current.style.display = "none";
                                hamburgers.current.style.display = "flex";
                                FooterNav.current.style.display = "flex";
                                hamburgerMedia.current.style.display = "none";
                              }}
                              src={header_media_hamburgerClose}
                              width={16}
                              height={16}
                              alt={header_hamburger}
                            />

                            
              </div>
              <div className="header-center-right-media">
              <NavLink to={"/Compare"}>
              <img
                className="header-center-right-img5"
                src={taroz}
                width={20}
                height={20}
                alt={taroz}
              />
              </NavLink>
             <NavLink to={"/Favorites"}>
             <img
                className="header-center-right-img"
                src={like}
                width={20}
                height={20}
                alt={like}
              />
             </NavLink>
              <img
                className="header-center-right-img1"
                onClick={() => {
                  overlaykorzinka.current.style.display = "block";
                  overlayWhite.current.style.display = "none";
                  overlays.current.style.display = "block";
                  Closehamburgers.current.style.display = "none";
                  hamburgers.current.style.display = "flex";
                  FooterNav.current.style.display = "flex";
                  hamburgerMedia.current.style.display = "none";
                }}
                src={cart}
                width={20}
                height={20}
                alt={cart}
              />
            </div>
            <ul className="header-bottom-item-media">
              <NavLink to="/About" className="header-bottom-item-lists">
                О компании
              </NavLink>
              <NavLink to="/Install" className="header-bottom-item-lists">
                Доставка и оплата
              </NavLink>
              <NavLink
                to="/Install"
                className="header-bottom-item-list-checks"
              >
                Доступна рассрочка
              </NavLink>
              <NavLink to="/Service" className="header-bottom-item-lists">
              Сервис и гарантия
              </NavLink>
              <NavLink to="/Drshop" className="header-bottom-item-lists">
              Опт/дропшиппинг
              </NavLink>
              <NavLink to="/Contact" className="header-bottom-item-lists">
              Контакты
              </NavLink>
              <NavLink to="/Aksiya" className="header-bottom-item-lists">
                Акции{" "}
                <img
                  className="header-bottom-item-list-img"
                  src={header_bottom_before}
                  width={20}
                  height={20}
                  alt={header_bottom_before}
                />
              </NavLink>
              <nav className="header-tops">
                <div className="header-top-left">
                  <div className="header-top-left-right">
                    <NavLink className={"header-top-navLink"} to="/service">
                      Service
                    </NavLink>
                    <NavLink className={"header-top-navLink"} to="/Cooperation">
                      Cooperation
                    </NavLink>
                    <span
                      className="header-top-padding"
                      onClick={() => {
                        modal.current.style.top = "100px";
                        overlays.current.style.display = "block";
                        hamburgerMedia.current.style.display = "none";
                        Closehamburgers.current.style.display = "none";
                        hamburgers.current.style.display = "flex";
                        FooterNav.current.style.display = "flex";
                        hamburgerMedia.current.style.display = "none";
                      }}
                    >
                      Заказать звонок
                    </span>
                  </div>
                </div>
                <div className="header-top-left-ItemLeft">
                  <a href="#">
                    <img
                      className="header-top-left-ItemLeft-img"
                      src={vieber}
                      width={15}
                      height={15}
                      alt={vieber}
                    />
                  </a>
                  <a href="#">
                    <img
                      className="header-top-left-ItemLeft-img"
                      src={whatsapp}
                      width={15}
                      height={15}
                      alt={vieber}
                    />
                  </a>
                  <a href="#">
                    <img
                      className="header-top-left-ItemLeft-img"
                      src={telegram}
                      width={12}
                      height={15}
                      alt={vieber}
                    />
                  </a>
                </div>
              </nav>
            </ul>
          </div>
          {/*TODO media hamburger */}
          {/* modal start */}
          <div className="modal-tel-zakaz" ref={modal}>
            <div className="modal-tel-zakaz-title">
              <div className="modal-tel-zakaz-left">
                <h2 className="modal-tel-zakaz-left-heading">
                  Менеджер позвонит вам в течение 5 минут
                </h2>
                <p className="modal-tel-zakaz-left-padding">
                  ответит на все вопросы и проконсультирует по продуктам Kugoo
                </p>
                <form className="modal-from">
                  <input
                    className="modal-tel-zakaz-left-input"
                    type="number"
                    placeholder="+998-91-123-45-67"
                    required
                  />
                  <button className="modal-tel-zakaz-left-btn">
                    Позвоните мне
                  </button>
                  <p className="modal-tel-zakaz-left-padding-a">
                    Нажимая на кнопку, вы соглашаетесь на обработку персональных
                    данных и политикой конфиденциальности
                  </p>
                </form>
              </div>
              <div className="modal-tel-zakaz-right">
                <img
                  className="modal-tel-zakaz-right-img"
                  src={modal_zakaz}
                  width={350}
                  height={493}
                  alt={modal_zakaz}
                />
              </div>
              <p
                className="modal-tel-zakaz-close"
                onClick={() => {
                  modal.current.style.top = "-1000px";
                  overlays.current.style.display = "none";
                }}
              >
                &times;
              </p>
            </div>
          </div>
        </div>

        {/* modal end */}
      </header>

      <div
        className="overlay"
        ref={overlays}
        onClick={() => {
          overlaykorzinka.current.style.display = "none";
          modal.current.style.top = "-1000px";
          modalCatalog.current.style.display = "none";
          overlays.current.style.display = "none";
          hamburgerMedia.current.style.display = "none";
          ModalForm.current.style.display = "none";
          ModalFormRegister.current.style.display="none";
          loginFormOks.current.style.display = "none"
        }}
      ></div>
      <div
        className="overlay-white"
        ref={overlayWhite}
        onClick={() => {
          modalOpenBtn.current.style.display = "block";
          modalCatalog.current.style.display = "none";
          overlayWhite.current.style.display = "none";
          modalCloseBtn.current.style.display = "none";
          overlaykorzinka.current.style.display = "none";
          hamburgerMedia.current.style.display = "none";
          signModal.current.style.display = "none";
          
        }}></div>
    </>
  );
}
export default Header;
