import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-2">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-white text-center text-capitalize">
                        <h5>All rights reserved  &copy;{new Date().getFullYear().toString()}</h5>
                        <h6>Aykut Sarac</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}
