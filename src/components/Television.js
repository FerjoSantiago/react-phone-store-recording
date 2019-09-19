import React from 'react';
import mantenimiento from '../mantenimiento.png';

export default function Television() {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h2 className="display-3">404</h2>

                        <img 
                            src={mantenimiento} 
                            alt="computadora"
                        />

                        <div className="py-5">

                        </div>
                    </div>
                </div>
            </div>
    )
}
