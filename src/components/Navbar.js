import React from 'react'
import loolgo from '../images/loolgo.png'
import fugacity from '../images/Fugacity.png'
class Navbar extends React.Component {
    render() { 
        return (
                <nav id="navbar">
                  <div id="logo">
                    <img src={loolgo} />
                  </div>
                  <div id="fugacity">
                    <img src={fugacity} />
                  </div>
                  <ul>
                    <li className="item"><a href="#">Home</a></li>
                    <li className="item" id="mal"><a href="#">Events</a></li>
                    <li className="item"><a href="#">Sponsors</a></li>
                    <li className="item"><a href="#">Our Team</a></li>
                  </ul>
                </nav>
        );
    }
}
 
export default Navbar;