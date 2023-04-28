import React, {Component} from 'react';

import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../../services/script"

class Service extends Component {
    render (){

        return (
            <div className="collection-filter-block ">
                <div className="product-service">
                    <div className="media">
                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                        <div className="media-body">
                            <h4>Беслатна достава</h4>
                            <p>Безплатна достава низ цела Македонија</p>
                        </div>
                    </div>
                    <div className="media border-0 m-0  ">
                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                        <div className="media-body">
                            <h4>Гаранција</h4>
                            <p>Секој продукт има Гаранција</p>
                        </div>
                    </div>
                    {/* <div className="media">
                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                        <div className="media-body">
                            <h4>festival offer</h4>
                            <p>new online special festival offer</p>
                        </div>
                    </div>
                    <div className="media border-0 m-0">
                        <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
                        <div className="media-body">
                            <h4>online payment</h4>
                            <p>Contrary to popular belief.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Service;