import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import { withRouter } from 'react-router-dom';
import Pagination from "react-js-pagination";
import '../collection/common/collection.scss'
import {changePageNum} from '../../actions/index'
class CollectionLeftSidebar extends Component {

    
    constructor (props) {
        super (props)
        this.state = {
            count: 1
        }
              
    }
    
    state = {
        layoutColumns:3,
        rerender: true,
        activePage: 1
    }
    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }
    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    changeResCount = (count) => {
        console.log('object 123');
        console.log(count);
        if(count == 0)
            count = 1;
        this.setState({
            count: count
        })
    }
    handlePageChange = (pagNumber) =>{
        console.log('hereeeee');
        this.setState({
            activePage: pagNumber
        })
        let params = new URLSearchParams(this.props.location.search.split('?')[1]);
        if(params.get("page") == null )
            params.append("page",pagNumber)
        else
            params.set("page",pagNumber)        
        this.props.history.push(this.props.location.pathname+'?'+params.toString())
    }
    
    render (){
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Филаделфија</title>
                    <meta name="description" content=" wasdasdasdasd" />
                </Helmet>
                {/*SEO Support End */}

                {/* <Breadcrumb title={'Collection'}/> */}

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter">
                                    <StickyBox offsetTop={120} offsetBottom={20}>
                                        <div>
                                            <Filter history={this.props.history}/>
                                           
                                        </div>
                                    </StickyBox>
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    {/* <div className="top-banner-wrapper"> */}
                                                        {/* <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt=""/></a>
                                                        <div className="top-banner-content small-section">
                                                            <h4>fashion</h4>
                                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                                        </div>
                                                    </div> */}
                                                    <div className="collection-product-wrapper">
                                                        {/* <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                        </div> */}

                                                        {/*Products Listing Component*/}
                                                        <ProductListing changePage={this.handlePageChange} changeResCount={this.changeResCount} colSize={4} history={this.props.history } location = {this.props.location} category={this.props.match.params.category}/>
                                                        <Pagination
                                                        activePage={this.state.activePage}
                                                        itemsCountPerPage={10}
                                                        totalItemsCount={this.state.count}
                                                        pageRangeDisplayed={5}
                                                        onChange={this.handlePageChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default CollectionLeftSidebar;