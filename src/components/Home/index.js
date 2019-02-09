import React, {Component} from 'react';
import styles from './styles.module.css';

import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

import axios from 'axios';
import {validate} from '../../utils';

import { API_DEV, API_PROD } from '../../private';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
        }
        this._openModal = this._openModal.bind(this);
        this._closeModal = this._closeModal.bind(this)
        this._handleInputEmail = this._handleInputEmail.bind(this)
    }

    _openModal(){
        this.setState({
            modalIsOpen: true
        });
    };

    _closeModal(){
        this.setState({
            modalIsOpen: false
        })
    }

    _handleInputEmail(event) {
        event.preventDefault()

        const email = (event.target[0].value)

        const validEmail = validate(email, 'email')
        
        if (validEmail) {
            axios.post(`${API_PROD}/subscribe`, {email})
            .then(res => 
                alert(res.data))
            .catch(err => {
                alert(err)
            });
        } else {
            alert(email + ' is not a valid email. Please try again.')
        };
    };

    render(){
        return(
            <div className={styles.mainContainer}>

                <header id={styles.header}>
                    <div className={styles.logo}></div>
                    <nav className={styles.mainNav}>
                        <ul className={styles.mainNavList}>
                            <li>
                                <a className={styles.nav} href='/'>Home</a>
                            </li>
                            <li>
                                <a className={styles.nav} href='/music'>Music</a>
                            </li>
                            <li>
                                <a className={styles.nav} href='/'>Tour</a>
                            </li>
                            <li>
                                <a className={styles.nav} href='/store'>Merch</a>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <div id={styles.menuToggle}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id={styles.barMenu}>
                                <a href='/'><li>Home</li></a>
                                <a href='/music'><li>Music</li></a>
                                <a href='/'><li>Tour</li></a>
                                <a href='/store'><li>Merch</li></a>
                            </ul>
                        </div>
                    </nav>
                </header>
                    

                <section id={styles.headerBackground}>
                </section>


                <section id={styles.store}>

                    {/* STORE AND SHOP BUTTONS */}
                    <div className={styles.btnSetStore}>
                        <div className={styles.storeBtn}>
                            <a href='/music'>
                                Listen Now
                            </a>
                        </div>
                        <div className={styles.storeBtn}>
                            <a href='/store'>Shop</a>
                        </div>
                    </div>

                    {/* BOX LINKS */}
                    <div className={styles.storeItemsContainer}>

                        <div className={styles.video}>
                            <div className={styles.itemModal}>
                                <span className={styles.modalBtn}>
                                    <a href='https://www.youtube.com/watch?v=OE3MqCzVnc4&t=108s'>Watch</a>
                                </span>
                            </div>
                        </div>

                        <div className={styles.store}>
                            <div className={styles.itemModal}>
                                <span id="Spanner" className={styles.modalBtn}>
                                    <a href='/store'>Shop</a>
                                </span>
                            </div>
                        </div>

                        <div className={styles.album}>
                            <div className={styles.itemModal}>
                                <span className={styles.modalBtn}>
                                    <a href='/music'>Listen</a>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                        
                    <div className={styles.info}>

                        {/* CONTACT & SOCIAL MEDIA INFO */}
                        <div className={[styles.about, styles.contact].join(' ')}>
                            <h4>Contact</h4>
                            <div className={styles.contact}>
                                <div style={{fontSize:'14px', fontWeight: '400', textAlign: 'center', margin: '0 0 10px 0'}}><span>Management: </span><span style={{fontWeight: '400', color: 'darkgrey'}}>booking@mpcrown.com</span></div>
                                <div style={{fontSize:'14px', fontWeight: '400', textAlign: 'center'}}><span>Support: </span><span style={{fontSize:'14px', fontWeight: '400', color: 'darkgrey'}}>support@alexandercleoni.com</span></div>
                            </div>
                        </div>

                        <div className={[styles.about, styles.cfi].join(' ')}></div>

                        <div className={[styles.about, styles.connect].join(' ')}>
                            <h4>Connect</h4>
                            <div className={styles.socialIconContainer}>
                                <a href='https://twitter.com/MPCrownMusik'><img src={twitter} className={styles.iconStyle} alt="twitter" draggable={false} /></a>
                                <a href='https://www.instagram.com/mpcrownmusik/'><img src={instagram} className={styles.iconStyle} alt="instagram" draggable={false} /></a>
                                <a href='https://www.youtube.com/channel/UCQu2gtmauUW2UZ_Tkq-8Gpw'><img src={youtube} className={styles.iconStyle} alt="youtube" draggable={false} /></a>
                            </div>
                        </div>
                    </div>
                </section>
                

                <section id={styles.mainVideo}>
                    <iframe title='my-favorite'
                            width={'100%'} 
                            height={'100%'} 
                            src="https://www.youtube-nocookie.com/embed/cmk_Nfol-WA?rel=0" 
                            frameBorder="0" 
                            allow="autoplay; encrypted-media" 
                            allowFullScreen>
                    </iframe>
                </section>

                    
                <section id={styles.bioPic}></section>

            
                <section id={styles.bio}>
                    <div className={styles.bioHeader}></div>
                    <div className={styles.bioDescription}>
                        <p className={styles.bioP1}>MP Crown is an Atlanta based artist. 
                            Not only is MP a native of Atlanta but his 
                            unique upbringing immersed him in the grassroots 
                            era of Atlanta’s music culture. Born in Atlanta’s 
                            Zone 3 neighborhood and raised in East Atlanta’s 
                            Zone 6 community MP has seen the city from all angles 
                            and it really reflects in his music. Born to a 4x Grammy 
                            award winning music producer (Chanz Parkman) and Entertainment 
                            Manager (Toni Parkman) MP and his family have always been deeply 
                            rooted in the arts. From production, writing, engineering, management 
                            to playing instruments MP has diversified himself by engaging in every
                            area of music production.
                        </p>
                        <p className={styles.bioP2}> With the release of his debut project “Dreality” 
                            which is out now worldwide MP has shown he is not a fly by night artist 
                            but here to stay. With the recent success of his song “My Favorite” ft 
                            Lil Scrappy Produced by Whymen Grinding, MP has gone from a local artist 
                            to one of the most anticipated artists coming out of Atlanta. 
                            Under his own conglomerate Crown Family Incorporated, which consists of 
                            a roster of very talented artists, MP looks to continue to push the envelope 
                            through his music and visuals.
                        </p>

                        <div style={{display: 'flex', justifyContent:'center'}}>
                            <div className={styles.btnBio}>
                                <a href='/music'>
                                    Buy / Stream Album
                                </a>
                            </div>
                        </div>    
                    </div>   
                </section>

                    
                <section id={styles.upcoming}>
                    <div className={styles.modal} style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}><span style={{color: 'black', fontSize: '28px'}}>Latest News</span></div>
                    {/* <a href='http://doxygenmedia.com/fresh-out-the-gate-artist-spotlight-mp-crown/'> */}
                        <div className={styles.upcomingSubComponent}>
                            <div className={styles.itemModal}>
                                <span className={styles.modalBtn}>
                                    <a href='http://doxygenmedia.com/fresh-out-the-gate-artist-spotlight-mp-crown/'>View</a>
                                </span>
                            </div>
                            <p style={{textAlign: 'center'}}>Dox of Doxygen Media Interview <br></br> May 18, 2018</p>
                        </div>
                    {/* </a> */}
                </section>
                                


                <section id={styles.upcomingPic}>
                    
                </section>

                    
                <section id={styles.mailing}> 
                    <div className={styles.formContainer}>
                        <div className={styles.formLabel}>
                            <h1>Join Mailing List</h1>
                        </div>
                        <form className={styles.formComponent} onSubmit={this._handleInputEmail} ref={'form'}>
                            <input type='email' name="email" className={styles.inputText} placeholder='Email Address' />
                            <input type='submit' value="Sign Up" className={styles.inputSubmit} />
                        </form>
                    </div> 
                </section>

            </div>    
        )
    }
}


