import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoodsItem = ({ goods }) => {
  const { id, title, price, image, category } = goods;
  console.log(goods);
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
      <div className="goods__item__img">
        <img src={image} alt={title} />
      </div>
      <div className="goods__caption">
        <div
          className="goods__caption__name"
          onClick={() => {
            handleClick();
          }}
        >
          {title}
        </div>
        <div className="goods__caption__subname">{category}</div>
        <div className="goods__caption__price">${price} $</div>
        <button id={id} className="goods__caption__btn">
          +
        </button>
      </div>
    </li>
  );
};

export default GoodsItem;
