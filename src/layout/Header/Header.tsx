import {Link} from "react-router-dom";

import SearchIcon from '../../assets/images/search-icon.svg';
import PersonIcon from '../../assets/images/person-icon.svg';
import HeartIcon from '../../assets/images/heart-icon.svg';
import CartIcon from '../../assets/images/cart-icon.svg';
import MenuBurger from '../../assets/images/menu-hamburger.svg';
import Xmark from '../../assets/images/x-mark.svg';
import ViledLogo from '../../assets/images/VILED Logotype.svg';
import {ViledLogo as ViledLogoComp} from '../../components/ViledLogo';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import './header.scss';

export const Header = (props) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const refHeader = useRef(null);
    const [headerH, setHeaderH] = useState('0px')

    useLayoutEffect(() => {
        window.addEventListener('resize', updateHeaderHeight);
    }, []);

    const updateHeaderHeight = () => {
        if (refHeader) {
            setHeaderH(refHeader.current.offsetHeight);
        }
    }

    useEffect(() => {
        updateHeaderHeight();
    }, [])

    return (
        <div style={{
            marginBottom: headerH
        }}>
            <section ref={refHeader} className='header'>
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
                                    <a onClick={() => setSidebarIsOpen(true)}>
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

            <div className={`menu-nav ${sidebarIsOpen ? 'is-open' : ''}`}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12">
                            <div className='menu-top'>
                                <div className='h-100 d-flex justify-center align-items-center'>
                                    <ViledLogoComp/>
                                </div>
                                <img onClick={() => setSidebarIsOpen(false)} className='menu-x-mark' src={Xmark}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className='searching-area'>
                                <div className='row'>
                                    <div className="col-6">
                                        <img src={SearchIcon} alt='search-icon'/>
                                    </div>
                                    <div className="col-6 d-flex justify-space-between align-items-center">
                                        <Link className={'login-link'} to={'/login'}>Войти</Link>
                                        <img src={HeartIcon} alt={'heart-icon'}/>
                                        <img src={CartIcon} alt={'cart-icon'}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
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
                            </div>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
                                    return (
                                        <div className='d-flex justify-space-between align-items-center'
                                             key={`menu-link-${item}`}>
                                            <Link to={'/'} className={'menu-link'}>
                                                Hello
                                            </Link>
                                            <p className={'menu-link__arrow'}>{">"}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
