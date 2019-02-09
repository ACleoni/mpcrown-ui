import React, {Component} from 'react';
import styles from './styles.module.css';

import apple from '../../assets/apple.svg';
import itunes from '../../assets/itunes.svg';
import google from '../../assets/google.svg';
import spotify from '../../assets/spotify.svg';
import tidal from '../../assets/tidal.svg';

import axios from 'axios';
import {validate} from '../../utils';

import { API_DEV, API_PROD } from '../../private';


export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this._handleInputEmail = this._handleInputEmail.bind(this)
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

    render() {
        return (
            <React.Fragment>
                <div className={styles.mainContainer}>
                    <header id={styles.header}>
                        <div className={styles.logo}></div>
                        <nav className={styles.mainNav}>
                            <ul className={styles.mainNavList}>
                                <li><a className={styles.nav} href='/'>Home</a></li>
                                <li><a className={styles.nav} href='/music'>Music</a></li>
                                <li><a className={styles.nav} href='/'>Tour</a></li>
                                <li><a className={styles.nav} href='/store'>Merch</a></li>
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

                    <section id={styles.componentTitle}>
						<h2 style={{fontFamily: 'Helvetica', opacity: 0.8}}>Music</h2>
                    </section>

                    <section id={styles.mainContent}>
                        <div className={styles.albumCover}>
							<img src={require('../../images/Dreality.jpg')} alt="Dreality"/>
						</div>
                        <div className={styles.trackList}>
                            <iframe title="Apple Music Playlist" allow="autoplay *; encrypted-media *;" frameborder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dreality/1280594384?app=music" width="660"></iframe>
                        </div>
                    </section>

                    <section id={styles.componentIcons}>
						
                        <a href='https://geo.itunes.apple.com/us/album/dreality/1280594384?mt=1&app=music'><img src={apple} alt="Apple Music" /></a>
                        <a href='https://itunes.apple.com/us/album/dreality/1280594384?app=itunes'><img src={itunes} alt="iTunes Store" /></a>
                        <a href='https://play.google.com/store/music/album/MP_Crown_Dreality?id=Bafrhvttq4mrsws4ldoybefnex4&hl=en'><img src={google} alt="Google Play Store" /></a>
                        <a href='https://open.spotify.com/artist/1cUYtVsz3BxrGyDnN7ifnb'><img src={spotify} alt="Tidal" /></a>
                        <a href='https://listen.tidal.com/album/78447165'><img src={tidal} alt="Tidal" /></a>
                        
                        
                    </section>

                    <section id={styles.mailing}> 
                        <div className={styles.formContainer}>
                            <div className={styles.formLabel}>
                                <h1>Join Mailing List</h1>
                            </div>
                            <form className={styles.formComponent} onSubmit={this._handleInputEmail} ref={'form'}>
                                <input type='text' name="email" className={styles.inputText} placeholder='Email Address' />
                                <input type='submit' value="Sign Up" className={styles.inputSubmit} />
                            </form>
                        </div> 
                    </section>
                </div>
            </React.Fragment>
        )
    }
}