import { useSelector } from 'react-redux';
import apiData from '../modules/api';

export default function Details() {
  let stock;
  try {
    stock = useSelector((state) => state.filter((obj) => obj.details === true));
    return (
      <div className="details-container text">
        <p className="title">
          {stock[0].symbol}
        </p>
        <p className="sub-title">Key Data</p>
        <p className="n-t l">
          Ask Price:
          {' '}
          {stock[0].askPrice}
        </p>
        <p className="n-t r">
          Ask Size:
          {' '}

          {stock[0].askSize}
        </p>
        <p className="n-t l">
          Last sale Price:
          {' '}
          {stock[0].lastSalePrice}
        </p>
        <p className="n-t r">
          Last sale Size:
          {' '}
          {stock[0].lastSaleSize}
        </p>
        <p className="n-t l">
          Bid Price:
          {' '}
          {stock[0].bidPrice}
        </p>
        <p className="n-t r">
          Bid Size:
          {' '}
          {stock[0].bidSize}
        </p>
        <p className="n-t l">
          Volume:
          {' '}
          {stock[0].volume}
        </p>
        <p className="n-t r">
          Sector:
          {' '}
          {stock[0].sector}
        </p>
        <p className="n-t l">
          Security Type:
          {' '}
          {stock[0].securityType}
        </p>
      </div>
    );
  } catch (err) {
    stock = apiData;
    console.error('error fetching stock info, Go back to home page');
    return (
      <div className="details-container text">
        <p className="title">
          {stock[0].symbol}
        </p>
        <p className="sub-title">Key Data</p>
        <p className="n-t l">
          Ask Price:
          {' '}
          {stock[0].askPrice}
        </p>
        <p className="n-t r">
          Ask Size:
          {' '}

          {stock[0].askSize}
        </p>
        <p className="n-t l">
          Last sale Price:
          {' '}
          {stock[0].lastSalePrice}
        </p>
        <p className="n-t r">
          Last sale Size:
          {' '}
          {stock[0].lastSaleSize}
        </p>
        <p className="n-t l">
          Bid Price:
          {' '}
          {stock[0].bidPrice}
        </p>
        <p className="n-t r">
          Bid Size:
          {' '}
          {stock[0].bidSize}
        </p>
        <p className="n-t l">
          Volume:
          {' '}
          {stock[0].volume}
        </p>
        <p className="n-t r">
          Sector:
          {' '}
          {stock[0].sector}
        </p>
        <p className="n-t l">
          Security Type:
          {' '}
          {stock[0].securityType}
        </p>
      </div>
    );
  }
}
