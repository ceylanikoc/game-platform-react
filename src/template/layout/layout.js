import React from 'react'
import Header from './header/header'
import Content from './content/content'
import Home from '../pages/home/home'
import Footer from './footer/footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Content>
            <Home/>
        </Content>
        <Footer/>
    </>
  )
}

export default Layout