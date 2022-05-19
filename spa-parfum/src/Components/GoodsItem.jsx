import React from 'react';
import { useNavigate } from 'react-router-dom';
import PT from 'prop-types';

const GoodsItem = ({ id, title, price, image, category }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(`/goods/${id}`, {
      state: {
        price,
        category,
      },
    });
  };

  return (
    <li className="goods__item">
      <div className="goods__item__img">{image && <img src={image} alt={title} />}</div>
      <div className="goods__caption">
        <button type="button" className="goods__caption__name" onClick={handleClick}>
          {title}
        </button>
        <div className="goods__caption__subname">{category}</div>
        <div className="goods__caption__price">${price} $</div>
        <button type="button" data-id={id} className="goods__caption__btn">
          +
        </button>
      </div>
    </li>
  );
};

GoodsItem.propTypes = {
  id: PT.number.isRequired,
  title: PT.string.isRequired,
  price: PT.number.isRequired,
  image: PT.string.isRequired,
  category: PT.string.isRequired,
};

export default GoodsItem;
