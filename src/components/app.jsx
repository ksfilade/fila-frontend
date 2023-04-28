import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import HeaderFour from './common/headers/header-four';

import FooterOne from "./common/footers/footer-one";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"


import './landing.scss'
class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('object');
        console.log(this.props);
    }
    render() {
        return (
            <div className='header__main'>
                <HeaderFour logoName={'logo.png'} />
                {this.props.children}
                <FooterOne logoName={'logo.png'}/>

                {/* <ThemeSettings /> */}

            </div>
        );
    }
}

export default withTranslate(App);
