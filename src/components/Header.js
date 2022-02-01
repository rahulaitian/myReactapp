import { Link } from "react-router-dom"


const Header = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="dropdown-item" to="addcustomer" >Add Customer</Link>
          </li>
          <li className="nav-item active">
          <Link className="dropdown-item" to="purchase" >Purchase</Link>
          </li>
          
          <li className="nav-item active">
          <Link className="dropdown-item" to="shipping" >Shipping Address</Link>
          </li>
          <li className="nav-item">
          <Link className="dropdown-item" to="customer" >Customer</Link>
          </li>
         </ul>
      </div>
    </nav>
  )
}

export default Header
