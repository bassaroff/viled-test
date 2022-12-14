import './ItemsListed.scss';
import {Link} from "react-router-dom";
import {getBrand, getType} from "../../../services/getSelectedFilterItemWithToggleAction";
import {FilterItems} from "../models/FilterItems";
import {Items} from "../../../mock/data";

export const ItemsListed = (props: {
    items: {}[]
}) => {
    const {items} = props;

    return (
        <div className='col-9 items-listed__wrapper'
             style={{
                 borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
             }}>
            <div className="row">
                {!items.length && (
                    <h2 style={{
                        margin: '40px 50px'
                    }}>
                        There is nothing to see
                    </h2>
                )}
                {items.map((item) => {
                    return (
                        <div className="col-4 col-sm-6 col-xs-12" key={`content-item-${item.id}`}>
                            <Link to={'/'} className="list-item__wrapper">
                                <div className="list-item__image-wrapper">
                                    <img src={item.previewUrl} alt='Brunello'/>
                                </div>
                                <div className="list-item__content">
                                    <div className="list-item__name">{getBrand(item.brandId).name}</div>
                                    <div className="list-item__category">{getType(item.typeId).name}</div>
                                    <div className="list-item__price">{item.price} ₸</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
