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
                            The modern Australian menu features a fantastic range of a steaks,
                            burgers and a la carte dishes.
                            Steaks are a highlight of our grills menu.
                            From T-Bone to porterhouse, Reserve Angus rib eye fillet to Wagyu scotch fillet,
                            you’ll be spoilt for choice.
                        </p>
                        <Link to="/about/">
                            <button
                                className="btn text-uppercase btn-yellow">
                                about us</button>
                        </Link>


                    </div>
                </div>
            </div>

        </section>
    )
}
