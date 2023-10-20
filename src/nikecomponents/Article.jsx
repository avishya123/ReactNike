import React from 'react'
import './Nike.css';

function Article() {

  return (
    <>
    <div className="para">
    <div className="d1">
        <h1>YOUR FEET</h1>
        <h1>DESERVE</h1>
        <h1>THE BEST</h1>
        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt, ea harum et tenetur quaerat error placeat fugit, quae minima odit commodi quas eligendi laborum blanditiis in, eos sed. Dicta!</h4>
      <p className='btns'> <button className='b1'>Shop Now</button>
    <button className='b2'>Category</button></p> 
    </div>
    <div className="d2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF85GEuR-KCKMbGCThJ5yQP660XP6j58EAww&usqp=CAUy667 " alt="" className='img' />
    </div>
    </div>
    
    </>
  )
}

export default Article