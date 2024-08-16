import React, { useEffect, useState } from 'react'

function CoinTable() {

    let [count, setCount] = useState(1);

    async function download (){
        const jsonResponse = await fetch("https://fakestoreapi.com/products");
        const data = await jsonResponse.json();
        console.log(data);
    }

    useEffect(() => {
        download();
    }, []) // execute one  time in mounting

    useEffect(() => {
        console.log("Change everytime")
    }) // change on all re-render because dependency array is not passed

    useEffect(() => {
        console.log("count changed")
    }, [count])


  return (
    <div>
      <p>Coin Table {count}</p>
      <button onClick={() => {setCount(++count)}}>Increase</button>
    </div>
  )
}

export default CoinTable
