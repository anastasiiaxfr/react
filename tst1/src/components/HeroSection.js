import React from 'react';
import { Button } from './Button/Button';
import '../App.css';
import './HeroSection.sass';

function HeroSection() {
  return (
    <div className='hero__container'>
        <video src="/video/video-2.mp4" autoPlay loop muted></video>
        <h1> Adventure Awaits </h1>
        <p> What are you waiting for? </p>

        <div className='hero__btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Get started </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> WATCH TRAILER  <i className='far fa-play-circle'></i>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection