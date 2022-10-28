import React from 'react'
import ReactDOM from 'react-dom'
// import Home from './pages/Home'
// import Snowfall from 'react-snowfall'
const Snowflake = (props) => {
 return (
  <p className='Snowflake' id={`item${props.id}`} style={props.style}>
   *
  </p>
 )
}

class Snow extends React.Component {
 snow = () => {
  let animationDelay = '0s';
  let fontSize = '100px';
  let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
  return arr.map((el, i) => {
   animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
   fontSize = `${(Math.floor(Math.random() * 10) + 10)}px`;
   let style = {
    animationDelay,
    fontSize
   }
   return (<Snowflake key={i} id={i} style={style} />)
  })
 }

 render() {
  return (
   <div className='App'>
    {this.snow()}
   </div>
  )
 }
}
//************************************
// ReactDOM.render(
//  <Snow />,
//  document.getElementById('root')
// );