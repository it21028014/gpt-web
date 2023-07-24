import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet to be fined that Chapt GPT-3 have made some lives more easier and makes the type of misakes that himan can have reduced to more than anytinh that sould have worked during the time</p>


        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your email Address'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600 have requested access through the portal</p>
        </div>



      </div>
      <div className='gpt3__header-image'>
        <img src={ai} />
      </div>
    </div>
  )
}

export default Header
