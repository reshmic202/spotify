import React from 'react'
import './Main.css';
import { GoDash } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import  { useState } from 'react'

const dummyData = [
    {
        title: "How does the Spotify Premium trial work?",
        desc: `If you've never had Premium before, you may be eligible for a free (or reduced rate) trial.<br/>

        For trials, you'll still need to enter a valid payment method to sign up. We'll use this to confirm your country or region and take payments if you want to keep Premium after the offer ends.<br/>
        
        We'll send you a reminder 7 days before your trial ends. Country restrictions and Terms apply.<br/>`
    },
    {
        title: "How do I cancel my Premium plan?",
        desc: `You can easily cancel your Premium plan any time online on your account page. Your Premium stays until your next billing date, then your account switches over to our free plan.<br/>

        You'll keep all your playlists, saved music, and be able to listen with ads when your account is free. <br/>`
    },
    {
        title: " How does the Premium Duo plan work?",
        desc: `Premium Duo is a plan for a couple who lives together. Compared with having two full-price Premium Individual accounts, it's also cheaper. We'll ask for your address to ensure you live at the same address. You can invite a member to the plan right after the purchase. Each member has their own separate Premium account and can listen at the same time with their own account. All saved music and playlists are their own. The other account holder cannot see what you are listening to.<br/>

        Read more info about Premium Duo. <br/>`
    },
    {
        title: "How does the Premium Family Plan work?",
        desc: `Premium Family is a plan for up to 6 family members who live together. Compared with everyone having their own full-price Premium Individual account, it's also cheaper. We will ask for your address to ensure you live at the same address. You can invite members to the plan right after the purchase. Each member has their own separate Premium account and can listen at the same time with their own account. All saved music and playlists are their own. Other account holders cannot see what you are listening to.<br /><br />

        Read more info about Premium Family. <br />`
    },
    {
        title: "How does the Premium Student Plan work?",
        desc: `If you are a student enrolled at an accredited college or university, and above the age of 18, then yes. You can get Premium Student for up to 4 years. Student plan holders don't have audiobook listening time included in their Premium plan.<br />

        Read more info about Premium Student. <br />`
    },
    {
        title: " How much is Spotify Premium in USA?",
        desc: `The Spotify Premium prices in USA are different depending on which Premium plan you choose: The Spotify Premium Individual plan costs $10.99 per month, the Premium Duo plan costs $14.99 per month, the Premium Family plan costs $16.99 per month, the Premium Student plan costs $5.99 per month. If you've never had a Premium plan before, you may be eligible for a free (or reduced rate) trial. Country restrictions and terms apply. <br />`
    }
]
const Premium = () => {

    const [isClicked, setIsClicked] = useState('')
    const clickBtn = (e) => {
        setIsClicked(e.title)
        if (isClicked === e.title) {
            setIsClicked("");
        }
    }


    return (
        <div>

            <div class="mainCont1">
                <div class="main6">
                    <h1>Listen without limits. Try 1 month of Premium Individual for free.</h1>
                    <h2>Only $10.99/month after. Cancel anytime.</h2>

                    <button id="btn1">Try free for 1 month</button>
                    <button id="btn2">View all Premium plans</button>

                    <p>Free for 1 month, then $10.99 per month after. Offer only available if you haven't tried Premium before. Terms apply.</p>
                </div>
                <div class="main7">
                    <img src="./img/premium.png" alt="" />
                </div>
            </div>

            <div class="mainCont2">
                <h1> Experience the difference</h1>
                <h3>Go Premium and enjoy full control of your listening. Cancel</h3>
                <h3>anytime.</h3>


                <table class="spotify-table" border={1} >
                    <tr>
                        <th>What you'll get</th>
                        <th>Spotify's Free plan</th>
                        <th className='A1'>Spotify's Premium plan</th>
                    </tr>
                    <tr>
                        <td >Ad-free music listening</td>
                        <td><GoDash /></td>
                        <td className='A2'><IoCheckmarkCircleOutline /></td>
                    </tr>
                    <tr>
                        <td>Download to listen offline</td>
                        <td><GoDash /></td>
                        <td className='A3'><IoCheckmarkCircleOutline /></td>
                    </tr>
                    <tr>
                        <td>Play songs in any order</td>
                        <td ><GoDash /></td>
                        <td className='A'><IoCheckmarkCircleOutline /></td>
                    </tr>
                    <tr>
                        <td>High audio quality</td>
                        <td><GoDash /></td>
                        <td className='A'><IoCheckmarkCircleOutline /></td>
                    </tr>
                    <tr>
                        <td>Listen with friends in real time</td>
                        <td><GoDash /></td>
                        <td className='A'><IoCheckmarkCircleOutline /></td>
                    </tr>
                    <tr>
                        <td>Organize listening queue</td>
                        <td><GoDash /></td>
                        <td className='A'><IoCheckmarkCircleOutline /></td>
                    </tr>


                </table>

            </div>
            <div class="mainCont3">
                <h1>Affordable plans for any situation</h1>
                <h4>Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime.</h4>
                <div class="main8">
                    <img src="./img/visa.png" alt="" />
                    <img src="./img/mstrCard.png" alt="" />
                    <img src="./img/amex.png" alt="" />
                    <img src="./img/discoverNet.png" alt="" />
                    <img src="./img/p.png" alt="" />
                </div>
                <div class="main9">
                    <h2> All Premium plans include</h2>
                    <p><IoCheckmarkSharp />Ad-free music listening</p>
                    <p><IoCheckmarkSharp />Download to listen offline</p>
                    <p><IoCheckmarkSharp />Play songs in any order</p>
                    <p><IoCheckmarkSharp />High audio quality</p>
                    <p><IoCheckmarkSharp />Listen with friends in real time</p>
                    <p><IoCheckmarkSharp />Organize listening queue</p>
                </div>
            </div>
            <div className="mainCont4">
                <div className="main10">
                <button id='btn3'>Free For 1 Month</button>
                    <div className="main10Sub">
                    <div className="main10A">
                        <h1>Premium </h1>
                        <h1>Individual</h1>
                    </div>
                    <div className="main10B">
                        <h1>Free</h1>
                        <p>FOR 1 MONTH</p>
                    </div>
                    </div>
                   <div className="main10C">
                   <ul>
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>15 hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                   </div>
                   <button id='btn4'> Try Free for 1 month</button>
                   <div className="para1">
                   <p >Free for 1 month, then $10.99 per month after. Offer only</p>
                   <p>available if you haven't tried Premium before. Terms</p>
                   <p>apply.</p>

                   </div>
                </div>

                <div className="main11">
                    <div className="main10Sub">
                    <div className="main10A">
                        <h1> Premium Duo </h1>
                    </div>
                    <div className="main10B">
                        <h1>$14.99</h1>
                        <p>PER MONTH</p>
                    </div>
                    </div>
                   <div className="main11C">
                   <ul>
                        <li>2 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)</li>
                    </ul>
                   </div>
                   <button id='btn5'> Get Premium Duo</button>
                   <div className="para2">
                   <p >For couples who reside at the same address. Terms apply.</p>
                   </div>
                </div>

                <div className="main12">
                    <div className="main10Sub">
                    <div className="main10A">
                        <h1> Premium Family </h1>
                    </div>
                    <div className="main10B">
                        <h1>$16.99</h1>
                        <p>PER MONTH</p>
                    </div>
                    </div>
                   <div className="main12C">
                   <ul>
                        <li>Up to 6 Premium or Kids accounts</li>
                        <li>Block explicit music</li>
                        <li>Access to Spotify Kids</li>
                        <li>Cancel anytime</li>
                        <li>15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)</li>
                    </ul>
                   </div>
                   <button id='btn6'> Get Premium Duo</button>
                   <div className="para3">
                   <p >For up to 6 family members residing at the same address. Terms apply.</p>
                   </div>
                </div>

            </div>

        <div className="mainCont5">
        <div className="main13">
                <button id='btn7'>Free For 1 Month</button>
                    <div className="main13Sub">
                    <div className="main13A">
                        <h1>Premium Student</h1>
                        
                    </div>
                    <div className="main13B">
                        <h1>Free</h1>
                        <p>FOR 1 MONTH</p>
                    </div>
                    </div>
                   <div className="main13C">
                   <ul>
                        <li>1 verified Premium account</li>
                        <li>Discount for eligible students</li>
                        <li>Access to Hulu</li>
                        <li>Cancel anytime</li>
                    </ul>
                   </div>
                   <button id='btn8'> Try Free for 1 month</button>
                   <div className="para4">
                   <p >Free for 1 month, then $5.99 per month after. Offer</p>
                   <p>currently includes access to Hulu (With Ads) plan, subject</p>
                   <p>to eligibility. Offer available only to students at an</p>
                   <p>accredited higher education institution and if you haven't</p>

                   </div>
                </div>
        </div>

        <div className="mainCont6">
        <h1 > Questions?</h1>
        <h3>We've got answers.</h3>
        <h5>Get even more questions answered here.</h5>
                {
                    dummyData.map((item, index) => {
                        return (
                            <div class="mainFAQ1" key={index}>
                                <div class="faq1">
                                    <p id='faqID1' onClick={() => { clickBtn(item) }}>{item.title}?</p>
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
            
        </div>
    )
}

export default Premium