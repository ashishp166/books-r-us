import React from 'react'
import "./Nav.css";
import search from '../../assets/svg/loupe.svg'
import cart from '../../assets/svg/shopping-cart.svg'

export default function Nav() {
    return (
        <div className="Nav">
            <div className="nav-container">
                <h4 className="header">Books-R-Us</h4>
                <div className="nav-input-container">
                    <select>
                        <option>All</option>
                    </select>
                    <input />
                    <button className="nav-btn">
                        <img src={search}/>
                    </button>
                </div>
                <div className="nav-cart-container">
                    <img src={cart}/>
                    <h2>cart</h2>
                </div>
            </div>
        </div>
    )
}
