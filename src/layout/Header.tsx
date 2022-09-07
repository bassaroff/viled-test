import {Link} from "react-router-dom";

import SearchIcon from '../assets/images/search-icon.svg';
import PersonIcon from '../assets/images/person-icon.svg';
import HeartIcon from '../assets/images/heart-icon.svg';
import CartIcon from '../assets/images/cart-icon.svg';
import MenuBurger from '../assets/images/menu-hamburger.svg';
import Xmark from '../assets/images/x-mark.svg';
import ViledLogo from '../assets/images/VILED Logotype.svg';
import {ViledLogo as ViledLogoComp} from '../components/ViledLogo';

export const Header = (props: {
    handleSidebarClose: () => void;
    handleSidebarOpen: () => void;
    sidebarIsOpen: boolean
}) => {
    const {handleSidebarClose, handleSidebarOpen, sidebarIsOpen} = props;
    console.log(props)
    return (
        <div>
            <section className='header'>
                <div className='container'>
                    <div className='row justify-space-between'>
                        <div className="col-5 header-part__left">
                            <div className='main-links'>
                                <ul>
                                    <li>
                                        <Link to='/women' className='is-active'>Женщины</Link>
                                    </li>
                                    <li>
                                        <Link to='/men'>Мужчины</Link>
                                    </li>
                                    <li>
                                        <Link to='/kids'>Дети</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2 col-sm-4 logo-wrapper">
                            <div className='logo'>
                                <Link to='/'>
                                    <img src={ViledLogo} alt='viled-logo'/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-5 col-sm-8 header-part__right">
                            <ul>
                                <li>
                                    <Link to='/'>
                                        <img className='header-nav-icons' src={SearchIcon}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img className='header-nav-icons' src={PersonIcon}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img className='header-nav-icons' src={HeartIcon}/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img className='header-nav-icons' src={CartIcon}/>
                                    </Link>
                                </li>
                                <li className='menu-hamburger'>
                                    <a onClick={handleSidebarOpen}>
                                        <img className='header-nav-icons' src={MenuBurger}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container header__bottom-nav'>
                    <ul>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Новинки
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Бренды
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Одежда
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Обувь
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Сумки
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Ювелирные украшения
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Часы
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Аксессуары
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Косметика
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Интерьер
                            </Link>
                        </li>
                        <li>
                            <Link className='header__bottom-link' to='/'>
                                Выгодные предложения
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <div className={`menu-nav ${sidebarIsOpen && 'is-open'}`}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12">
                            <div className='menu-top'>
                                <div className='h-100 d-flex justify-center align-items-center'>
                                    <ViledLogoComp/>
                                </div>
                                <img onClick={handleSidebarClose} className='menu-x-mark' src={Xmark}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
