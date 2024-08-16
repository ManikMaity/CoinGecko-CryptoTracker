import React, { useEffect } from 'react'
import { fetchCoinData } from '../../services/fetchCoinData'

const CoinTable = () => {

  useEffect(() => {
    fetchCoinData().then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  })

  return (
    <div>
      <h1>Coin Table</h1>
    </div>
  )
}

export default CoinTable
