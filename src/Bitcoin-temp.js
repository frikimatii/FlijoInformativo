import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherAndBitcoin = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {

    const fetchBitcoinPrice = async () => {
      try {
        const bitcoinResponse = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        if (bitcoinResponse.data && bitcoinResponse.data.bpi && bitcoinResponse.data.bpi.USD && bitcoinResponse.data.bpi.USD.rate) {
          setBitcoinPrice(bitcoinResponse.data.bpi.USD.rate);
        }
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };
    fetchBitcoinPrice();
  }, []);

  return (
    <div>
      <h1>Flujo Informativo</h1>
      <p>Bitcoin: ${bitcoinPrice}</p>
    </div>
  );
};

