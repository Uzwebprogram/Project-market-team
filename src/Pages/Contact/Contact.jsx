import "./Contact.css"
import Header from "../../Components/Header/Header"
import { NavLink } from "react-router-dom"
import polygonImg from "../../Assets/Img/contacts_images/polygonImg.png"
import clockImg from "../../Assets/Img/contacts_images/clockImg.png"
import mailImg from "../../Assets/Img/contacts_images/mailImg.png"
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
                                    <p className="section1_list-item-number">+7 (812) 509-23-43</p>
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
                    <div className="section1_right">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25275557.77165248!2d31.438816324999998!3d39.3472853931632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sru!2s!4v1647674908734!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    </div>
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
                                <label htmlFor="phoneNumber">Сообщение</label>
                                <input className="from_top-left-input3" id="phoneNumbe" type={"text"} placeholder= {"Введите сообщение"} ></input>
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