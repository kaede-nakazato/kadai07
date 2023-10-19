import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='card-wrapper'>
    <img className='img' src="images/winter.jpg" alt="ウィンター 写真" />
    <h1 className='name'>WINTER</h1>
    <p className='affiliation'>aespa</p>

    <button className='button'>FOLLOW</button>
    <p className='followers'><span className='num'>5M</span> followers</p>

    <h2 className='about'>About</h2>
    <p className='about-txt'>韓国の4人組多国籍女性アイドルグループ「aespa」のメンバー</p>

    <h2 className='profile'>Profile</h2>
    <p className='profile-txt'>Birth : 2001.01.01<br></br>
    Brood Type : A<br></br>
    MBTI : ISTP
    </p>

    <a href="https://www.instagram.com/imwinter/">
      <img className='insta' src="images/insta.png" alt="アイコン" />
    </a>
    </div>
  )
}

export default App
