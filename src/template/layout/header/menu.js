import React from 'react'

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu">
        <li className="active">
          <a href="#!">Games</a>
        </li>
        <li>
          <a href="#!">Membership</a>
        </li>
        <li>
          <a href="#!">Download</a>
        </li>
        <li>
          <a href="#!">Blog</a>
        </li>
        <li>
          <a href="#!">Support</a>
        </li>
      </ul>
      <div>
        <button type="button" className="btn btn-success">LET'S PLAY</button>
      </div>
    </div>
  )
}

export default Menu