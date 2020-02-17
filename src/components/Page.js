
import React from 'react';
import GlobalHeader from './GlobalHeader.js';
import '../style/main.css';
import VectorStadium from '../images/Stadium.png'
import Body from './Body.js';
class Page extends React.Component{

render(){
  return(
    <div >
 <div className="headerMain">
 <img src={VectorStadium} className="imgStadium" alt="logoStadium" />
 
 
    <ul className="ulG">
        <li className="liG">INICIO</li>
        <li className="liG">COMPETICIONES</li>
        <li className="liG">REGLAMENTO</li>
        <li className="liG">CONTACTO</li>
        
    </ul>
 <div className="tableUl"></div>
 <Body></Body>
<GlobalHeader></GlobalHeader>
 </div>   
    </div>

  )
}   

}












export default Page;



