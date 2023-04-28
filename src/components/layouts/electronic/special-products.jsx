import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'

import { getBestSeller, getBestSellerProducts, getMensWear, getNewProducts, getWomensWear } from '../../../services/index'
import { addToCart, addToWishlist, addToCompare } from "../../../actions/index";
import ProductItem from './product-item';
import ProductListing from '../../collection/common/product-style-two.jsx'
import axios from 'axios'
import './featured.scss'
import url from '../../../constants/global'
class SpecialProducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    async componentDidMount() {
        console.log('adsadsas asd');
        let { data } = await axios.get(
            url + '/products/featured'
        )
        this.setState({
            products: data
        })
        console.log(data);
    }
    render() {

        return (
            <div className="featured">
                <h1>Препорачани Производи</h1>
                <div className='featured-products-container'>
                    <div className='row featured-product'>
                        {
                            this.state.products.map(el => (
                                <div className="col-md-4 col-grid-box">
                                    <ProductListing product={el} />
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
    newProducts: getNewProducts(state.data.products, ownProps.type),
    featuredProducts: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, { addToCart, addToWishlist, addToCompare })(SpecialProducts);