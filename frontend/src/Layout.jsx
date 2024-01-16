import React, { useState , useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

export function Layout(props) {
   
    return (
        <>
        <RecoilRoot>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </RecoilRoot>
        </>
    )
}
