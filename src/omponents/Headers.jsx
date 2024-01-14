import React from 'react'
import "./Main.css";

const Headers = () => {
  return (
    <div>
        <nav>
        <div class="left">
            <img src="/img/spotifyIc.png" alt="" />
            <h1>Spotify</h1>
        </div>
        <div class="right">
            <ul>
            <li><a href="/premium">Premium</a></li>
            <li><a href="">Support</a></li>
            <li><a href="/Download">Download</a></li>
            <li><a href="">Sign up</a></li>
            <li><a href="">Log in</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Headers