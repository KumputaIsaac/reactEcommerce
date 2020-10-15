import React, { Component } from 'react'
// import ProductList from './ProductList'
import {storeProducts} from '../data'
import Title from './Title'

export default class Product extends Component {
    state={
        products:storeProducts
    }
    render() {
        console.log(this.state.products)
        return (
            <div className='py-5'>
                    <div className='container'>
                        <Title name='our' title="products"/>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
        )
    }
}
