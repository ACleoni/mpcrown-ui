import React, {Component} from 'react';
import styles from './styles.module.css';

import shoppingCart from '../../assets/shoppingCart.svg';

import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

import copyright from '../../assets/copyright.svg';

import {Link} from 'react-router-dom'




export default class Feed extends Component {
	constructor(props){
		super(props);
		this.state = {
					
		}
		this._handleSetItem = this._handleSetItem.bind(this);
		this._handleSetAll = this._handleSetAll.bind(this);
		this._handleSetFilter = this._handleSetFilter.bind(this);
	}



	_handleSetItem(id, name, description, price) {
		const item = {
			id: id,
			name: name,
			description: description,
			price: price
		}
		this.props.renderSetItem(item)
	}


	_handleSetAll() {
		this.props.renderAllItems(true)
	}


	_handleSetFilter(option) {
		this.props.renderFilteredItems(option)
	}


	render(){
		const {match} = this.props;
		return(
			<React.Fragment>
				<div className={styles.mainContainer}>
					<header id={styles.header}>
						<div className={styles.logo}>
						
						</div>
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
						<h2 style={{fontFamily: 'Helvetica', opacity: 0.8}}>Merch</h2>
						
							<div className={styles.btnContainer}>
								<button className={styles.btn} onClick={()=> this._handleSetFilter('A')}>All</button>
								<button className={styles.btn} onClick={()=> this._handleSetFilter('M')}>Men</button>
								<button className={styles.btn} onClick={()=> this._handleSetFilter('F')}>Women</button>
								<button className={styles.btn} onClick={()=> this._handleSetFilter('K')}>Kids</button>
							</div>
						
						<div className={styles.login}>
								{/* <div>
									<span className={styles.accountBtns}>
										LOG IN
									</span>
									<span style={{fontSize: '14px', opacity: 0.6, margin: '0 5px 0 5px'}}> 
										OR 
									</span> 
									<span className={styles.accountBtns}>
										CREATE AN ACCOUNT
									</span>
								</div> */}
								<div>
									<Link to='/mycart'><img src={shoppingCart} className={styles.cart} alt='Cart'/></Link>	
								</div>
								<div className={styles.cartItemVal}>{this.props.user.cartContainer.length}</div>
							</div>
					</section>


					<section id={styles.merchContent}>
						{this.props.user.items.map((item, index) =>  {
							return(
								<Link style={{color: 'black'}} to={`${match.url}/${item.description}`} key={index}>
									<div className={styles.item} key={index} onClick={() => this._handleSetItem(item.id, item.name, item.description, item.price)}>
										<div>
											<img src={require(`${item.name}`)} alt='item' draggable={false} />
										</div>
										<div style={{opacity: .98, fontFamily: 'Helvetica', fontWeight: '700', margin: '15px 0 0 0'}}>{item.description}</div>
										<div style={{opacity: 0.6, margin: '5px 0 0 0'}}>${item.price}</div>
									</div>
								</Link>
							)}
						)}
					</section>
					

					<section id={styles.btmContent}>
						
						<div className={[styles.about, styles.connect].join(' ')}>
							<div className={styles.socialIconContainer}>
								<a href='https://twitter.com/MPCrownMusik'><img src={twitter} className={styles.iconStyle} alt="twitter" draggable={false} /></a>
								<a href='https://www.instagram.com/mpcrownmusik/'><img src={instagram} className={styles.iconStyle} alt="instagram" draggable={false} /></a>
								<a href='https://www.youtube.com/channel/UCQu2gtmauUW2UZ_Tkq-8Gpw'><img src={youtube} className={styles.iconStyle} alt="youtube" draggable={false} /></a>
							</div>
							<div className={styles.legal}>
								<span className={styles.copyrightText}>
									Copyright
								
								<img src={copyright} alt={'copyright'} className={styles.copyrightImg}/>	

									2018 Crown Family Inc. All rights reserved.
								</span>
							</div>
						</div>

					</section>
				</div>
			</React.Fragment>
		)
	}
}