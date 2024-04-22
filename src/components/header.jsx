import {Link} from 'react-router-dom'
import './header.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/context'
export default function Header() {
    const {cart}=useContext(CartContext)
  return (
    <div className="nav">
    <div className="nav-logo">
        <h1><span>K</span>M <span>T. C</span>O<span>M</span></h1>
    </div>
    <div className="nav-menu">
        <Link  to="/">home</Link>
        <Link  to="/about">about</Link>
        <Link  to="#contact">contact</Link>
        <Link  to="#product">products</Link>
    </div>
    <div className="cart">
        <Link to="#cart" className='cart-button'>
            <img src="/images/sell_stock_96px.png" alt="Shopping Cart" />
            <span className="cart-count">{cart.length}</span>
        </Link>
        
        {/* <Link to="#notification">
            <img src="/images/notification_96px.png" alt="Notification"/>
            </Link> */}
    </div>
</div>
  )
}
