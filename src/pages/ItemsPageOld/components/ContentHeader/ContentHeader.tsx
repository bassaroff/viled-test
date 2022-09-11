import {Link} from "react-router-dom";

import BackArrow from '../../../../assets/images/back-arrow-icon.svg';
import './content-header.scss';

export const ContentHeader = (props) => {
    const getHeaderTitle = () => {
      return (
          <div className='content-header__title-wrapper'>
              <h3 className='content-header__title'>
                  Лоферы
              </h3>
          </div>
      )
    }

    return (
        <div className='content-header'>
            <div className="container">
                <div className="breadcrumbs">
                    <ul>
                        <li>
                            <Link to={'/'}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                Обувь
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                Лофер
                            </Link>
                        </li>
                    </ul>
                    <div className='back-breadcrumb__wrapper'>
                        <img src={BackArrow} alt='back-arrow'/>
                        <Link to={'/'}>
                            Назад
                        </Link>
                    </div>
                </div>
                { getHeaderTitle() }
            </div>
        </div>
    )
}
