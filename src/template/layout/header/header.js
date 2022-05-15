import React from 'react'
import Logo from '../../component/logo'
import Menu from './menu'

const Header = () => {
  return (
    <header id="header">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-auto">
                        <Logo />
                    </div>
                    <div className="col-lg">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header