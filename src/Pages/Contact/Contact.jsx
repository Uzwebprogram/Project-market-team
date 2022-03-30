import "./Contact.css"
import Header from "../../Components/Header/Header"
import { NavLink } from "react-router-dom"
import polygonImg from "../../Assets/Img/contacts_images/polygonImg.png"
import clockImg from "../../Assets/Img/contacts_images/clockImg.png"
import mailImg from "../../Assets/Img/contacts_images/mailImg.png"
import { YMaps, Map, Placemark } from 'react-yandex-maps';
function Contact() {
    return(
        <>
            <Header/>
            <div className="contacts_container">
                <div className="top-navigation">
                    <NavLink className="top-navigation_title" to = "/main">Главная</NavLink>
                    <img className="top-navigation_img" src={polygonImg}/>
                    <p className="top-navigation_text">Контакты</p>
                </div>
                <h2 className="contacts_title">Контакты</h2>
                <div className="contacts_section1">
                    <div className="section1_left">
                        <ul className="section1_left-list">
                            <li className="section1_list-item">
                                <div className="section1_list-item-content">
                                    <p className="section1_list-item-adress">СПб, Ул. Дыбенко д.23 к.1</p>
                                    <p className="section1_list-item-number">+7 (812) 509-23-43</p>
                                </div>
                                <img className="section1_left-item-img" src = {polygonImg}/>
                            </li>
                            <li className="section1_list-item">
                                <div className="section1_list-item-content">
                                    <p className="section1_list-item-adress">СПб, Пр. Энгельса д.113 к.2</p>
                                    <a href="tel:78125092343">
                                    <p className="section1_list-item-number">+7 (812) 509-23-43</p>

                                    </a>
                                </div>
                                <img className="section1_left-item-img" src = {polygonImg}/>
                            </li>
                            <li className="section1_list-item">
                                <div className="section1_list-item-content">
                                    <p className="section1_list-item-adress">СПб, Ул. Ленсовета д.81</p>
                                    <p className="section1_list-item-number">+7 (812) 602-74-02</p>
                                </div>
                                <img className="section1_left-item-img" src = {polygonImg}/>
                            </li>
                            <li className="section1_list-item">
                                <div className="section1_list-item-content">
                                    <p className="section1_list-item-adress">СПб, ул. Тарасова д.10</p>
                                    <p className="section1_list-item-number">+7 (967) 555-01-06</p>
                                </div>
                                <img className="section1_left-item-img" src = {polygonImg}/>
                            </li>
                        </ul>
                        <div className="section1_left-bottom">
                            <hr/>
                            <a href="/" className="section1_left-gmail">
                                <img className="section1_left-gmail-img" src = {mailImg}/>
                                <p className="section1_left-gmail-text">smart-tekhnika@gmail.com</p>
                            </a>
                            <div className="section1_left-bottom-rejim">
                                <img className="section1_left-rejim-img" src = {clockImg}/>
                                <p className="section1_left-rejim-text">Режим работы</p>
                            </div>
                            <p className="section1_left-bottom-text">Пн-вс с 10:00 до 21:00</p>
                        </div>
                    </div>
                    {/* <div className="section1_right"> */}
                       <YMaps>
                           <div className='ymaps'>
                               <Map 
                                defaultState={{
                                   center: [41.325145, 69.245275],
                                   zoom: 9,
                               }}>
                                    <Placemark geometry={[41.325145, 69.245275]} />
                               </Map>
                           </div>
                       </YMaps>
                    {/* </div> */}
                </div>
                <div className="contacts_section2">
                    <h2 className="section2_title">Связаться с нами</h2>
                    <form action="#" className="section2_form">
                        <div className="form_top">
                            <div className="from_top-left">
                                <div className="from_top-left-input">
                                    <label htmlFor="name">Имя</label>
                                    <input className="from_top-left-input1" id="name" type={"text"} placeholder= {"Введите имя"} ></input>
                                </div>
                                <div className="from_top-left-input">
                                    <label htmlFor="phoneNumber">Телефон</label>
                                    <input className="from_top-left-input2" id="phoneNumbe" type={"text"} placeholder= {"Введите номер телефон"} ></input>
                                </div>
                            </div>
                            <div className="from_top-right">
                                <label htmlFor="message">Сообщение</label>
                                <textarea  className="from_top-left-input3" id="message" type={"text"} placeholder= {"Введите сообщение"} ></textarea>
                            </div>
                        </div>
                        <div className="form_bottom">
                            <div className="form_bottom-left">
                                <button className="form_bottom-btn" type="submit">Отправить</button>
                            </div>
                            <div className="form_bottom-right">
                                <input className="form_bottom-checkBox" checked type="checkbox"  id="checkBox" name="checkBox"></input>
                                <label className="form_bottom-checkBoxL" for="checkBox">Отправляя данную форму вы соглашаетесь с политикой конфиденциальности</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact