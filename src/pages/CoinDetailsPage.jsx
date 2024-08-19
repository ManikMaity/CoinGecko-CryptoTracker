import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinDetails } from '../services/fetchCoinDetails';

function CoinDetailsPage() {

    const {coinId } = useParams();

    const {data, isError, isLoading} = useQuery(["coinDetail", coinId], () => fetchCoinDetails(coinId), {
        cacheTime : 1000*60*2,
        staleTime : 1000*60*10
    })
    useEffect(() => {
        console.log(data);
    }, [data])

    if (isLoading){
        return (<div className='w-full h-80 grid place-content-center'>
            <span className="loading loading-spinner loading-lg my-auto"></span>
          </div>)
    }

    if (isError){
        return <div>Something Went Wrong</div>
    }

  return (
    <div className='w-full flex flex-col md:flex-row'>

        <div className='w-full md:w-1/3 items-center flex flex-col md:border-r-4 md:p-8'>
            <div className='max-w-32'>
                <img src={data?.image?.large} alt="" />
            </div>

            <div className=''>
                <p>{data?.description.en}</p>
            </div>

        </div>
        
    </div>
  )
}

export default CoinDetailsPage;
