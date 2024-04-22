import {Link} from 'react-router-dom'
export default function Footer() {
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
        <Link to="#cart">
            <img src="/images/sell_stock_96px.png" alt="Shopping Cart" />
        </Link>
        <Link to="#notification">
            <img src="/images/notification_96px.png" alt="Notification"/>
            </Link>
    </div>
</div>
  )
}
