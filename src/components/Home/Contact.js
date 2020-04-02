import React from 'react'
import Title from '../Globals/Title'
export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="" method="POST">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="What's your name?" />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="What's your email?" />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">Message</label>
                            <textarea name="description" id="description" className="form-control" rows="5" placeholder="Your Message..."></textarea>
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
                </div>
            </div>


        </section>
    )
}
