import axiosInstase from '../hepers/axiosInstance';

export async function fetchCoinData (){
    try{
        const respose = await axiosInstase.get("/coins/markets?vs_currency=inr");
        console.log(respose);
        return respose;
    }
    catch(err){
        console.log(err);
        return null;
    }
}