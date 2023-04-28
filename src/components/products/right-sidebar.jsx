import React, { Component } from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import { connect } from "react-redux";
import './product.scss'

// import custom Components
import Service from "./common/service";
import BrandBlock from "./common/brand-block";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import { Helmet } from 'react-helmet'

import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'
import axios from 'axios'
import url from '../../constants/global'


class RightSideBar extends Component {

    constructor() {
        super();
        this.state = {
            nav1: null,
            nav2: null,
            product: {},
            showSmall: false,
            productsImage: {}
        };
    }

    componentDidMount() {
        console.log('mounted');
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
        this.fetchProduct();
    }
    fetchProduct = async () => {
        let data = await axios.get(url + '/products/' + this.props.match.params.id)
        console.log(data);
        this.setState({
            product: data.data[0],
            showSmall: true

        }, () => {
            console.log('object');
            console.log(this.state.product);
            this.setState({
                productsImage:
                {
                    thumbnail: this.state.product.image.split(',')[0],
                    images: this.state.product.image.split(','),
                }
            })
        })


    }
    changeThumbnail = (thumb) => {
        console.log('object',thumb);
        // let arr = this.state.product.image.split(',')
        // let newArr = []
        // let flag = false
        // arr.forEach(element => {
        //   if(element == thumb){
        //       newArr.push(element)
        //   }
            

        // });
        // console.log(arr);
        this.setState({
            productsImage:
            {
                thumbnail: thumb,
            }
        })

    }

    render() {
        const { symbol, item, addToCart, addToCartUnsafe, addToWishlist } = this.props
        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };
        var productsnav = {
            slidesToShow: 3,
            swipeToSlide: true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div>
                <Helmet>
                    <title>Филаделфија</title>
                </Helmet>
                                {/*SEO Support End */}
                                {/* <Breadcrumb title={' Product / '+item.name} /> */}

                                {/*Section Start*/}
                                <section className="section-b-space">
                                    <div className="collection-wrapper">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-9 col-sm-12 col-xs-12">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="filter-main-btn mb-2">
                                                                    <span className="filter-btn">
                                                                        <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 product-thumbnail">
                                                                {this.state.showSmall && <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                                                    {this.state.product.image.split(',').map((vari, index) =>
                                                                        <div className='main-image big-image' key={index}>
                                                                            <ImageZoom image={this.state.productsImage.thumbnail} className="img-fluid image_zoom_cls-0" />
                                                                        </div>
                                                                    )}
                                                                </Slider>}
                                                                {this.state.showSmall && <SmallImages changeThumbnail={this.changeThumbnail} item={this.state.product} settings={productsnav} navOne={this.state.nav1} />}                                            </div>
                                                            <DetailsWithPrice symbol={symbol} item={this.state.product} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={addToWishlist} />
                                                        </div>
                                                    </div>
                                                    {/* <DetailsTopTabs item={item} /> */}
                                                </div>
                                                <div className="col-sm-3 collection-filter">
                                                    {/* <BrandBlock/> */}
                                                    <Service />
                                                    {/*side-bar single product slider start*/}
                                                    {/* <NewProduct/> */}
                                                    {/*side-bar single product slider end*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*Section End*/}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
                                let productId = ownProps.match.params.id;
    return {
                                item: state.data.products.find(el => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist})(RightSideBar);