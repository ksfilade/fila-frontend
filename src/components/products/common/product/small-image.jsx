
import React, { Component } from 'react';
import Slider from 'react-slick';

class SmallImages extends Component {
    constructor (props) {
        super(props);
        this.state = {
            nav2: null,
            show:false
        }
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider2,
            images:this.props.item.image.split(','),
            show: this.props.item.image.split(',').length > 1
        });
    }
    clickedImage (src) {
        this.props.changeThumbnail(src)
    }
    render() {
        const { item, settings } = this.props;
        var productsnav = settings;

        return (
            <div className="row">
                <div className="col-12 p-0">
                    {this.state.show && <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} className="slider-nav">
                        {item.variants?
                        item.variants.map((vari, index) =>
                            <div key={index} >
                                <img src={`${vari.images}`} key={index} alt=""  className="img-fluid" />
                            </div>
                        ):
                            this.state.images.map((vari, index) =>
                                <div key={index} onClick={ () => this.clickedImage(vari)}>
                                    <img src={`${vari}`} key={index} alt=""  className="img-fluid" />
                                </div>
                            )}
                    </Slider>}
                </div>
            </div>
        );
    }
}

export default SmallImages;