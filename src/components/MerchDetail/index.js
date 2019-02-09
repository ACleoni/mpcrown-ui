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
			color: 'White',
			size: 'S',
			quantity: 1
		}
		this._handleChangeEvent = this._handleChangeEvent.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}


	_handleChangeEvent(event) {
		this.setState({[event.target.name]: event.target.value})
	}


	_handleSubmit(event) {
		event.preventDefault();

		const _cartItemObject = {
			id: this.props.user.item.id,
			name: this.props.user.item.name,
			itemDescription: this.props.user.item.description,
			itemPrice: this.props.user.item.price,
			itemSize: this.state.size,
			itemColor: this.state.color,
			itemQuantity: this.state.quantity,
			filterId: this.props.user.item.id + this.state.color + this.state.size
		}

		setTimeout(() => {
			this.props.addToCart(_cartItemObject);
			this.props.user.cartContainer.push(this.props.user.cartItem);
			window.location.reload()
		}, 100)

	}


	render(){
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
								<Link to='/store' className={styles.btn}>View All</Link>
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
									<Link to='/mycart'>
										<img src={shoppingCart} className={styles.cart} alt='Cart'/>
									</Link>
								</div>
								<div className={styles.cartItemVal}>{this.props.user.cartContainer.length}</div>
							</div>
					</section>
                    <section id={styles.merchContent}>
						
							<div className={styles.item}>
								<div>
									<img src={require(`${this.props.user.item.name}`)} alt='item' draggable={false} />
								</div>
								
							</div>

							<div>
								<div className={styles.itemDetails}>
									<div style={{margin: '0 0 12px 0', fontSize: '24px'}}>
										{this.props.user.item.description}
									</div>
									<div style={{margin: '0 0 20px 0', fontSize: '18px', fontWeight: '300'}}>
										${this.props.user.item.price}
									</div>
								</div>

								<div className={styles.itemFormDetails}>
									<form style={{alignItems: 'flex-start'}} onSubmit={this._handleSubmit}>
										<div style={{padding: '0px 0px 10px', margin: '0 0 10px', display: 'flex', flexDirection: 'column', width: '60px'}}>
											<label>Size</label>
											<select name="size" onChange={this._handleChangeEvent}>
												<option value="S">S</option>
												<option value="M">M</option>
												<option value="L">L</option>
												<option value="XL">XL</option>
												<option value="XXL">XXL</option>
											</select>
										</div>
										
										<label>Select a color</label>
										<div className={styles.colorSelector} onChange={this._handleChangeEvent}>
											<label className={styles.checkboxContainer}>Wht
												<input type="radio" name="color" value={'White'} selected={"checked"} />
												<span className={styles.checkmark}
														style={{backgroundColor: 'white'}}>
														
												</span>
											</label>
											<label className={styles.checkboxContainer}>Blk
												<input type="radio" name="color" value={'Black'} />
												<span className={styles.checkmark}
														style={{backgroundColor: 'black'}}>
														
												</span>
											</label>
											<label className={styles.checkboxContainer}>Red
												<input type="radio" name="color" value="Red" />
													<span className={styles.checkmark}
															style={{backgroundColor: 'red'}}>
													</span>
											</label>
											<label className={styles.checkboxContainer}>Grn
												<input type="radio" name="color" value="Green"  />
												<span className={styles.checkmark}
														style={{backgroundColor: 'green'}}>
												</span>
											</label>
											<label className={styles.checkboxContainer}>Blu
												<input type="radio" name="color" value="Blue" />
												<span className={styles.checkmark}
														style={{backgroundColor: 'blue'}}>																										
												</span>
											</label>
											<label className={styles.checkboxContainer}>Bro
												<input type="radio" name="color" value={'Brown'} />
												<span className={styles.checkmark}
														style={{backgroundColor: 'saddlebrown'}}>	
												</span>
											</label>
											<label className={styles.checkboxContainer}>Orng
												<input type="radio" name="color" value={'Orange'} />
												<span className={styles.checkmark}
														style={{backgroundColor: 'orange'}}>									
												</span>
											</label>
											
										</div>
										<div name='color' className={styles.colorName}>{this.state.color}</div>

										<div style={{padding: '0px 0px 10px', display: 'flex', flexDirection: 'column', width: '60px'}} onChange={this._handleChangeEvent}>
											<label>Quantity</label>
											<input type='number' name='quantity' min='1' defaultValue={1} />
										</div>
						
										<input className={styles.inputSubmit} type='submit' value="Add To Cart"/>
									</form>
								</div>
							</div>

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
