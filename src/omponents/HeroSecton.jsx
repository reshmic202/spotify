import React, { useState } from 'react'
import  './Main.css';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const dummyData = [
    {
        title: "How do I create a playlist?",
        desc: `playlists are a great way to save collections of music, either for your own listening or to share.
        <br />
            To create one: <br />

            1. Tap Your <br />
            2. Tap CREATE. <br />
            3. Give your playlist a name. <br/>
            4. Start adding songs (and we'll help you along). <br/>`
    },
    {
        title: "How do I activate Data Saver mode?",
        desc: `1. Tap Home.<br/>
        2. Tap Settings.<br/>
        3. Tap Data Saver.<br/>
        4. Switch on Data Saver. <br/>`
    },
    {
        title: " Is it only possible to shuffle play music?",
        desc: `Any playlist with the shuffle icon will play on shuffle.<br/>
        Some playlists won't have the shuffle icon, so you can tap any song to play it. <br/>`
    },
    {
        title: "Where can I find Podcasts?",
        desc: `playlists are a great way to save collections of music, either for your own listening or to share.
        <br />
            To create one: <br />

            1. Tap Your <br />
            2. Tap CREATE. <br />
            3. Give your playlist a name. <br />
            4. Start adding songs (and we'll help you along). <br />`
    },
]

const HeroSecton = () => {
    const [isClicked, setIsClicked] = useState('')

    const clickBtn = (e) => {
        setIsClicked(e.title)
        if (isClicked === e.title) {
            setIsClicked("");
        }
    }

    return (
        <div>
            <main>
                <img src="./img/phoneimg.jpeg" alt="" />
                <div class="main1">
                    <h1>Play millions of songs and podcasts, for free.</h1>
                    <button><b>GET SPOTIFY HERE</b></button>
                </div>
            </main>
            <div class="main2">
                <h1><b>Why Spotify ?</b></h1>
                <div class="about">
                    <div class="ab1">
                        <img src="./img/pauseimg.png" alt="" />
                        <h2>Play your favorites.</h2>
                        <p>Listen to the songs you love, and</p>
                        <p>discover new music and</p>
                        <p>podcasts.</p>
                    </div>
                    <div class="ab1">
                        <img src="./img/playlist.png" alt="" />
                        <h2>Playlists made easy.</h2>
                        <p>We'll help you make</p>
                        <p>playlists. Or enjoy playlists</p>
                        <p>made by music experts.</p>
                    </div>
                    <div class="ab1">
                        <img src="./img/heart.png" alt="" />
                        <h2>Make it yours.</h2>
                        <p>Tell us what you like, and</p>
                        <p>we'll recommend music for</p>
                        <p>you.</p>
                    </div>
                    <div class="ab1">
                        <img src="./img/messenger.png" alt="" />
                        <h2>Save mobile data.</h2>
                        <p>To use less data when you</p>
                        <p>play music, turn on Data</p>
                        <p>Saver in Settings.</p>
                    </div>
                </div>
            </div>
            <div class="main3">
                <h1>It's free.</h1>
                <h1>No credit card required.</h1>
            </div>

            <div class="main4">
                <h1 > Got questions?</h1>
                {
                    dummyData.map((item, index) => {
                        return (
                            <div class="mainFAQ" key={index}>
                                <div class="faq">
                                    <p id='faqID' onClick={() => { clickBtn(item) }}>{item.title}?</p>
                                    {
                                        isClicked === item.title?(<IoIosArrowDropup  onClick={() => {
                                            clickBtn(item)
                                        }} size={20} />):(<IoIosArrowDropdown onClick={() => {
                                            clickBtn(item)
                                        }} size={20} />)
                                    }
                                    
                                </div>
                                {
                                    isClicked === item.title ? (
                                        <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                                    ) : (null)
                                }
                            </div>
                        )
                    })
                }

            </div>

            <div class="main5">
                <h1>Ready? Let's play.</h1>
                <button><b>GET SPOTIFY FREE</b></button>
            </div>
        </div>
    )
}

export default HeroSecton