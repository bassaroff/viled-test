import Brunello from '../../../assets/images/Brunello-Cucinelli.jpg';
import './ItemsListed.scss';
import {Link} from "react-router-dom";
export const ItemsListed = (props: {
    items: {}[]
}) => {
    const { items } = props;

    const getBrand = (id: number) => {
        let brand = {};

        return brand;
    }

    const getCategory = (id: number) => {
        let brand = {};

        return brand;
    }


    return (
        <div className='col-9 items-listed__wrapper'>
            <div className="row">
                {!items.length && (
                    <h2 style={{
                        margin: '40px 50px'
                    }}>
                        There is nothing to see
                    </h2>
                )}
                { items.map((item) => {
                    return (
                        <div className="col-4 col-sm-6 col-xs-12" key={`content-item-${item.id}`}>
                            <Link to={'/'} className="list-item__wrapper">
                                <div className="list-item__image-wrapper">
                                    <img src={item.previewUrl} alt='Brunello'/>
                                </div>
                                <div className="list-item__content">
                                    <div className="list-item__name">{ getBrand(item.brandId).label }</div>
                                    <div className="list-item__category">{ getCategory(item.categoryId).label }</div>
                                    <div className="list-item__price">{ item.price } ₸</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
