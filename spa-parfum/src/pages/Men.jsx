import React, { useEffect, useCallback, useState } from 'react';

import GoodsItem from '../components/GoodsItem';

const Men = () => {
  const [{ loading, success, error }, setAlerts] = useState({ loading: true });
  const loadData = useCallback(async () => {
    setAlerts({ loading: true });

    try {
      const data = await fetch('http://localhost:1234/goods').then((response) => {
        if (response.status < 200 || response.status >= 300) {
          return response.json().then(({ error: err }) => {
            throw Error(err || 'Oops an error occurred.');
          });
        }

        return response.json();
      });

      setAlerts({ success: data || [] });
    } catch (err) {
      setAlerts({ error: err });
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading)
    return (
      <div className="goods">
        <h3 align="center">Loading.....</h3>
      </div>
    );

  return (
    <div className="goods">
      {success?.length === 0 && <h3 align="center">No data</h3>}
      {Boolean(error) && <h3 align="center">{`Error: ${error?.message ? error.message : error}`}</h3>}
      {success?.length > 0 && (
        <ul className="goods__items">
          {success.map((item) => (
            <GoodsItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Men;
