import {Link} from "react-router-dom";

import InstagramIcon from '../../assets/images/instagram-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';
import VkIcon from '../../assets/images/vk-icon.svg';
import TelegramIcon from '../../assets/images/telegram-icon.svg';
import GooglePlayIcon from '../../assets/images/Google-play-icon.svg';
import AppStoreIcon from '../../assets/images/AppStore-icon.svg';
import './footer.scss';

export const Footer = (props) => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-2 col-sm-6">
                        <ul>
                            <li className='footer-links__header'>
                                <p>О компании</p>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    О нас
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Компания
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    История
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 col-sm-6">
                        <ul>
                            <li className='footer-links__header'>
                                <p>Обслуживание клиентов</p>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Условия оплаты
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Условия доставки
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Условия возврата
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Условия пользования
                                </Link>
                            </li>
                            <li className='footer-links__item'>
                                <Link to={'/'}>
                                    Политика конфиденциальности
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links__socials col-4 col-sm-12">
                        <ul>
                            <li className='footer-links__header'>
                                <p>Viled в соцсетях</p>
                            </li>
                        </ul>
                        <div className="footer-links__icons-wrapper">
                            <img src={InstagramIcon} alt={'insta'}/>
                            <img src={FacebookIcon} alt={'facebook'}/>
                            <img src={TelegramIcon} alt={'telegram'}/>
                            <img src={VkIcon} alt={'vk'}/>
                        </div>
                    </div>
                    <div className="col-3 col-sm-12">
                        <div className="footer-links__apps-wrapper d-flex align-items-center">
                            <img src={GooglePlayIcon} alt={'google-play'}/>
                            <img src={AppStoreIcon} alt={'app-store'}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className='copyright'>
                            © Copyright 2019 VILED. Все права защищены
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
