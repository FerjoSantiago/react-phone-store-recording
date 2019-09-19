import React, { Component } from 'react';
import Producto from './Producto';
import Title from './Title';
import {ProductConsumer} from '../context';

import Modal from './Modal';

export default class ListaProducto extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                  <div className="container">
                    <Title
                        name="nuestros" title="productos"
                    />
                    <div className="row">
                        <ProductConsumer>
                            {value => {

                                return value.products.map( product => {
                                    return <Producto key={product.id} 
                                                    product={product} 
                                                    
                                    />;
                                })
                                
                            }}
                        </ProductConsumer>
                    </div>

                    <Modal/>

                  </div>  
                </div>
            </React.Fragment>
        )
    }
}
