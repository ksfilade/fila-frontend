import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'


// Layouts

import Electronic from './components/layouts/electronic/main';


//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";

import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

import PageNotFound from './components/pages/404'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"
import rightSidebar from './components/products/right-sidebar';

// Portfolio Features
class Root extends React.Component {
    componentDidMount(){
        console.log(' index objess');
    }
    render() {
        store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Electronic}/>
                            
                            <Layout>

								{/*Routes For Features (Product Collection) */}
								<Route path={`${process.env.PUBLIC_URL}/products/:category`} component={CollectionLeftSidebar}/>
								<Route path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`} component={rightSidebar}/>
								

								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>
								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>

                                <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


