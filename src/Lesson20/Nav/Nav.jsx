import { Link } from 'react-router-dom'
import './Nav.scss'


const Nav = () =>{
    return(
        <div className="Nav">
            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
        </div>
    )
}

export default Nav