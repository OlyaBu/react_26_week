import React from 'react';
import './Heroes.css';

class Heroes extends React.Component{
    render(){
        const {name,url,realname,friends,superpower,universe, id}= this.props;
    return (
        <div className='card-hero'>
        <img classNmae="hero-pic" src={url}/>
        <div className='hero-discription'>
         <div className="hero-name">Имя: {name}</div>
         
         <div className="hero-realName">Настоящее имя: {realname}</div>
         <div className="hero-universe">Вселенная: {universe}</div>
         <div className="hero-friend">Друзья: {friends}</div>
         <div className="hero-power">Суперспособности: {superpower}</div>
     
</div>
        </div>
          
    );
}
}
export default Heroes;
