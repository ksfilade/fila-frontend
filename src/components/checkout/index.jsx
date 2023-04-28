import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'
import Breadcrumb from "../common/breadcrumb";
import { removeFromWishlist } from '../../actions'
import { getCartTotal } from "../../services";
import url from '../../constants/global'
class checkOut extends Component {

    constructor(props) {

        super(props)

        this.state = {
            payment: 'stripe',
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            country: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            create_account: '',
            showErrorMessage: false
        }
        this.validator = new SimpleReactValidator();
    }
    componentDidMount() {

    }
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    setStateFromCheckbox = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.checked;
        this.setState(obj);

        if (!this.validator.fieldValid(event.target.name)) {
            this.validator.showMessages();
        }
    }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }
    checkOutOrder = () => {
        if (this.state.first_name == '' || this.state.last_name == '' || this.state.address == '' || this.state.email == '' || this.state.city == '') {
            this.setState({
                showErrorMessage: true
            })
        }
        else {
            let cartItems = []
            let qty = []
            this.props.cartItems.map((el) => {
                cartItems.push(el.id)
                qty.push(el.qty)
            })
            let data = {
                customername: this.state.first_name,
                customerlastname: this.state.last_name,
                address: this.state.address + ', '+this.state.city,
                email: this.state.email,
                productid: cartItems,
                quantity: qty,
                phone: this.state.phone,
                city: this.state.city
            }

            axios.post(url + '/products/cart', data).then((res) => {
                if (res.data.success) {
                    this.props.history.push('/order-success');
                }
            })
        }
    }


    render() {
        const { cartItems, symbol, total } = this.props;

        // Paypal Integration
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.history.push({
                pathname: '/order-success',
                state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
            })

        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        const client = {
            sandbox: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
            production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        }


        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>Филаделфија</title>
                    <meta name="description" content="asdasds" />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={'Нарачка'} />

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>Информации</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Име</div>
                                                    <input type="text" name="first_name" style={{ border: (this.state.showErrorMessage && this.state.first_name == '') ? "solid red 1px" : '' }} value={this.state.first_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Презиме</div>
                                                    <input type="text" name="last_name" style={{ border: (this.state.showErrorMessage && this.state.last_name == '') ? "solid red 1px" : '' }} value={this.state.last_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('last_name', this.state.last_name, 'required|alpha')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Телефон</div>
                                                    <input type="text" name="phone" style={{ border: (this.state.showErrorMessage && this.state.phone == '') ? "solid red 1px" : '' }} value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Email адреса</div>
                                                    <input type="text" name="email" style={{ border: (this.state.showErrorMessage && this.state.email == '') ? "solid red 1px" : '' }} value={this.state.email} onChange={this.setStateFromInput} />
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                                </div>

                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Адреса</div>
                                                    <input type="text" name="address" style={{ border: (this.state.showErrorMessage && this.state.address == '') ? "solid red 1px" : '' }} value={this.state.address} onChange={this.setStateFromInput} placeholder="Street address" />
                                                    {this.validator.message('address', this.state.address, 'required|min:20|max:120')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Град</div>
                                                    <input type="text" name="city" style={{ border: (this.state.showErrorMessage && this.state.city == '') ? "solid red 1px" : '' }} value={this.state.city} onChange={this.setStateFromInput} />
                                                    {this.validator.message('city', this.state.city, 'required|alpha')}
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Продукт <span> Вкупно</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {cartItems.map((item, index) => {

                                                            return <li key={index}>{item.productname.length < 26 ? item.productname : item.productname.slice(0, 23) + '...'} × {item.qty} <span>{'ден.'} {item.saleprice ? item.saleprice : item.price}</span></li>
                                                        })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Вкупно <span className="count">{'ден.'}{total}</span></li>

                                                    </ul>
                                                </div>

                                                <div className="payment-box">

                                                    {(total !== 0) ?
                                                        <div className="text-right">
                                                            <button type="button" className="btn-solid btn" onClick={this.checkOutOrder} >Порачај</button>
                                                        </div>
                                                        : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    { removeFromWishlist }
)(checkOut)