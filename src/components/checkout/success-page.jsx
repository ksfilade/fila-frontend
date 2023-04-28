import React, { Component } from 'react';
import './checkout.scss'

class orderSuccess extends Component {

    constructor(props) {
        super(props)

    }

    render() {


        return (
            <div className='success_container'>

                <div className='success_container__box'>
                    <h1>Успешно направена Нарачка</h1>
                </div>
            </div>

        )
    }
}

export default orderSuccess