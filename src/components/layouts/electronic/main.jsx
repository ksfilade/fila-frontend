import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import './main.scss'
// Import custom components
import HeaderFour from "../../common/headers/header-four"
import SpecialProducts from "./special-products"
import FooterOne from "../../common/footers/footer-one";
import ThemeSettings from "../../common/theme-settings"
import img1 from '../../../assets/images/pic1.jpg'
import img8 from '../../../assets/images/pic8.jpg'
import img5 from '../../../assets/images/pic5.jpg'
import img6 from '../../../assets/images/pic6.jpg'

// import '../../../assets/images/'

class Electronic extends Component {

    componentDidMount() {
        console.log('object 12344 homepage');
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color7.css` );
    }

    render(){

        return (
            <div className="container-fluid layout-8">
                <Helmet>
                <title>Филаделфија</title>
                </Helmet>
                <HeaderFour logoName={'logo/3.png'} history={this.props.history} />
                
                <section className="p-0 padding-bottom-cls">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                
                                                    {/* <h4>заштеди 30%</h4>
                                                    <h1>Фрижидер</h1> */}
                                                    <img className="slider-contain__image" src={img1}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">   
                                            <div className="slider-contain ">
                                                {/* <div>
                                                    <h4>save upto 30%</h4>
                                                    <h1>Печка</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">shop now</a></div> */}
                                                    <img className="slider-contain__image" src={img8}></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">   
                                            <div className="slider-contain ">
                                                {/* <div>
                                                    <h4>save upto 30%</h4>
                                                    <h1>Печка</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">shop now</a></div> */}
                                                    <img className="slider-contain__image" src={img5}></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">   
                                            <div className="slider-contain ">
                                                {/* <div>
                                                    <h4>save upto 30%</h4>
                                                    <h1>Печка</h1>
                                                    <a href="#" className="btn btn-outline btn-classic">shop now</a></div> */}
                                                    <img className="slider-contain__image" src={img6}></img>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                <div className="">
                    {/*About Section*/}
                    {/* <section className="banner-goggles ratio2_3">
                        <div className="container-fluid">
                            <div className="row partition3">
                                <div className="col-md-4">
                                    <a href="#">
                                        <div className="collection-banner">
                                            <div className="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub1.jpg`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div className="contain-banner banner-3">
                                                <div>
                                                    <h4>10% off</h4>
                                                    <h2>speaker</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <div className="collection-banner">
                                            <div className="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub2.jpg`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div className="contain-banner banner-3">
                                                <div>
                                                    <h4>10% off</h4>
                                                    <h2>earplug</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <div className="collection-banner">
                                            <div className="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub3.jpg`}
                                                     className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div className="contain-banner banner-3">
                                                <div>
                                                    <h4>50% off</h4>
                                                    <h2>best deal</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/*About Section End*/}

                    {/*Product slider*/}
                    <SpecialProducts type={'electronics'} />                                                        
                    {/*Product slider End*/}
                </div>
                <div className="footer-white">
                    <FooterOne logoName={'logo/3.png'} />
                </div>

                {/* <ThemeSettings /> */}
            </div>
        )
    }
}


export default Electronic;