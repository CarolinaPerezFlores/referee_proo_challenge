import React from 'react'
import VectorFootball from '../images/VectorFootball.png'



class GlobalHeader extends React.Component{
 render(){
     return(
       
       <div className="artOne">

          <div className="boxCorner">
               <img src={VectorFootball} className="imgBall" alt="logo" />
          </div>

          <div clasname="nameYslogan">
           <div> <p className="organizationName">RefereePro® FANS</p></div>
           <div><p className="slogan">El semillero del fútbol de México</p></div>

          </div>

       </div>

     )
 }   

}

export default GlobalHeader;