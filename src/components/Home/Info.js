import React from 'react'
import { Link } from 'gatsby'
import Title from "../Globals/Title"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Vitae alias corporis
                            saepe quae odit autem porro dolorum
                            officiis consequuntur quia quas,
                            inventore adipisci nulla. In vel ipsum
                            ipsa tempore obcaecati harum provident
                            expedita a corporis commodi. Ex veniam
                            repellat eius dicta, eum officia culpa
                            totam consequatur quos, soluta nulla ut.
                        </p>
                        <Link to="/about/">
                            <button
                                className="btn text-uppercase btn-yellow">
                                about page</button>
                        </Link>


                    </div>
                </div>
            </div>

        </section>
    )
}
