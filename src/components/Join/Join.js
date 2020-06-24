import React from 'react';
import './Join.css';
import a1 from '../../assets/a1.png';
import p1 from '../../assets/p1.png';
import s1 from '../../assets/s1.png';

const join = (props)=>{
    return (
        <section id="join-section"className="se2">

        <div className="row3">
        <div className="column3">
            <h2>Join Classes</h2>
            <h3 >Download <span style={{color:"#2980b9"}}>Mobishaala</span> App</h3>
            <h3 >Use Institute Code<span style={{color:"#2980b9"}}>PICS1005</span> App</h3>
            <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
                <img className="img1" src={p1} alt="iphone"/>
            </a>
            <a href="https://itunes.apple.com/gb/app/mobishaala/id1316602075?mt=8" target="_blank">
                <img className="img2" src={a1} alt="iphone"/>
            </a>
        </div>
        <div className="column3"> 
        <img className="imgs" src={s1} alt="iphone"/>
         </div>
        </div>
        </section>

    );
}

export default join;