import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'

import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare } from '../../../actions'
import { getVisibleproducts } from '../../../services';
import ProductListItem from "./product-list-item";
import ProductListItemTwo from "./product-style-two";
import url from '../../../constants/global'
class ProductListing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            limit: 20, hasMoreItems: true,

            products: []
        }
    }

    componentDidMount() {
       console.log('mounted');
       var url = new URL('http://www.example.com/t.html' + this.props.history.location.search);
       var c = url.searchParams.get("price");
       console.log(c);
        if (this.props.category != 'search')
            this.fetchMoreItems(this.props.category,url.searchParams.get("page"), url.searchParams.get("price"));
        else
            this.searchItems(this.props.history.location.search.split('=')[1])
        // this.props.history.listen((location, action) => {
        //     console.log('object');
        //     this.fetchMoreItems();
        // })

        this.unlisten = this.props.history.listen((location, action) => {
            // this.props.changePage(1)
            let params = new URLSearchParams(location.search.split('?')[1]);
            if (params.get('keyword') != null)
                this.searchItems(params.get('keyword'), params.get('page'), params.get('price'))
            else
                this.fetchMoreItems(location.pathname.split('/')[2], params.get('page'), params.get('price'));

        })
    }
    componentWillUnmount() {
        this.unlisten();
    }
    searchItems = async (keyword, page, price) => {
        console.log(price);
        console.log('search');
        if (page == undefined)
            page = 1
        if (price == undefined)
            price = '1-100000'

        let data = await axios.get(
            url + '/products/search?keyword=' + keyword + '&page=' + page + '&price=' + price
        )
        console.log(data.data);
        this.props.changeResCount(data.data.count);
        this.setState({
            products: data.data.data,

        })
    }
    fetchMoreItems = async (category, page, price) => {
        // console.log(category.toLowerCase().replace('-*-','/').replace(new RegExp("-", "g"), '+'));
        if (page == undefined)
            page = 1
        if (category == undefined)
            return
        if (price == undefined)
            price = '1-100000'
        let data = await axios.get(
            url + '/products?page=' + page + '&category=' + category.toLowerCase().replace('-*-','+/+').replace(new RegExp("-", "g"), '+') + '&price=' + price)
            console.log('fetch');
            console.log(data.data);
            this.props.changeResCount(data.data.count);
        this.setState({
            products: data.data.data
        })
        setTimeout(() => {
            this.setState({
                limit: this.state.limit + 15
            });
        }, 3000);
    }

    render() {
        const { products, addToCart, symbol, addToWishlist, addToCompare } = this.props;
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {products.length > 0 ?

                            <div className="row">
                                {this.state.products.slice(0, this.state.limit).map((product, index) =>
                                    <div className={`${this.props.colSize === 3 ? 'col-xl-3 col-md-6 col-grid-box' : 'col-lg-' + this.props.colSize}`} key={index}>
                                        <ProductListItemTwo product={product} symbol={symbol}
                                            onAddToCompareClicked={() => addToCompare(product)}
                                            onAddToWishlistClicked={() => addToWishlist(product)}
                                            onAddToCartClicked={addToCart} key={index} />
                                    </div>)
                                }
                            </div>
                            :
                            <div className="row">
                                <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                    <p>Please check if you have misspelt something or try searching with other words.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">Продолжи со Гледање</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: getVisibleproducts(state.data, state.filters),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, { addToCart, addToWishlist, addToCompare }
)(ProductListing)