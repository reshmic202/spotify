import React from 'react'
import  './Main.css';

const Download = () => {
    return (
        
        <div>
            <div className="Dmain">
            <div className="Dmain1">
                <img id='img1' src='/img/laptop.svg'alt='' />
                <h1>Download Spotify</h1>
                <span>Play millions of songs and podcasts on your device.</span>
                <img id='img2' src="/img/microsoft.svg" alt="" />
                <a href="">Download directly from Spotify</a>
                </div>
            </div>
            <div className="Dmain2">
                <h1>Bring your music to mobile and tablet, too.</h1>
                <p>Listening on your phone or tablet is free, easy, and fun.</p>
                <div className="Dmain2Img">
                <img id='ic1' src="/img/a.webp" alt="" />
                <img id='ic1' src="/img/b.webp" alt="" />
                <img id='ic1'  src="/img/c.png" alt="" />
                <img id='ic1' src="/img/d.png" alt="" />
                </div> 
            </div>
            <div className="Dmain3">
                <img src="/img/Dimg.svg" alt="" />
                <h1>One account, listen everywhere.</h1>
                <ul className='Dli'>
                    <li id='liA' >MOBILE</li>
                    <li id='liA' >COMPUTER</li>
                    <li id='liA' >TABLET</li>
                    <li id='B'><a href="">CAR</a></li>
                    <li id='B'><a href="">PLAYSTATION</a></li>
                    <li id='B'><a href="">XBOX</a></li>
                    <li id='B'><a href="">TV</a></li>
                    <li id='B'><a href="">SPEAKER</a></li>
                    <li id='B'><a href="">WEB PLAYER</a></li>

                </ul>
            </div>

        </div>

    )
}

export default Download