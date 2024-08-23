import React from 'react'
import {laxy} from "react";
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Layout from '../../pages/Layout'

const CoinDetailsPage = laxy(() => import('../../pages/CoinDetailsPage'))

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/details/:coinId' element={<CoinDetailsPage/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default Routing
