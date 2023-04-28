import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'
import { withRouter } from 'react-router-dom';

// Import custom components
import store from '../../../store';
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import {changeCurrency} from '../../../actions'
import {connect} from "react-redux";
import '../index.scss'
class HeaderFour extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false,
			keyword: ''
		}
		this.setStateFromInput.bind(this)
    }

    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
		console.log('header',this.props);
		
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
	}
	

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }
	setStateFromInput = (event) => {
		
		this.setState({
            keyword: event.target.value
        });

      }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	handleKeyPress = (event) => {
		if(event.key === 'Enter'){
		  console.log(this.props);
		  window.location.href = '/products/search?keyword='+this.state.keyword
		}
	  }
	
	render() {

		return (
			<div>
				<header >
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					{/* <TopBarWhite/> */}

					<div className="container-fluid navbar-search" >
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar/>
										</div>
										<div className="brand-logo">
										<Link to="/" >
											<img width={220} height={100} src="../../../assets/images/logonovo.fw_.png"></img>
										</Link>
										</div>
									</div>
									<div className="menu-right pull-right" style={{float: 'none', width: '100%', marginLeft: '2%'}}>
										{/*Top Navigation Bar Component*/}
										{/* <NavBar/> */}
										<div className='search-bar'>
										<input value={this.state.keyword} onKeyPress={this.handleKeyPress} onChange={this.setStateFromInput} type="text"></input>
										</div>
									
										<div>
										<div className="icon-nav">
												<ul>
													<Link to={"/products/search?keyword="+this.state.keyword}>
													<li className="onhover-div mobile-search">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.clickedSearch} className="img-fluid" alt="" />
															<i className="fa fa-search" onClick={this.clickedSearch}></i></div>
													</li>
													</Link>
													<li className="onhover-div mobile-setting">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />
															<i className="fa fa-cog"></i></div>
														<div className="show-div setting">
															<h6>language</h6>
															<ul>
																<li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
																<li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>
															</ul>
															<h6>currency</h6>
															<ul className="list-inline">
																<li><a href={null} onClick={() => this.props.changeCurrency('€')}>euro</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('₹')}>rupees</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('£')}>pound</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('$')}>doller</a> </li>
															</ul>
														</div>
													</li>
													{/*Header Cart Component */}
													<CartContainer/>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={this.closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			)
	}
}

export default connect(null,
    { changeCurrency }
)(HeaderFour);