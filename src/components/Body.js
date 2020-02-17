import React from 'react'
import Mini1 from '../images/Mini1.png'
import Mini2 from '../images/Mini2.png'
class Body extends React.Component{
 render(){
     return(
            
       <div className="tableUl">
           <p className="titleBody">Partidos de la Jornada</p>
           <div className="compGameOne">
               <div className="presentationGame"></div>
               <div> className="date" </div>
               <ul className="ulGame">
        <li className="liGame">-Resumen-</li>
        <li className="liGameS">Estadísticas</li>
        <li className="liGameM">3 ---- <img src={Mini1} className="miniLogo" alt="logoMini" />---- 1</li>
        <li className="liGameM">3 ---- <img src={Mini2} className="miniLogo" alt="logoMini" /> ---- 1</li>
        
    </ul>

           </div>
       </div>

     )
 }   

}

export default Body;