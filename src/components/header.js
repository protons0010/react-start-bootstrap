import React from 'react'

function header() {
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">One Page Pretty</h1>
                    <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                    <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Know More</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    );
}

export default header
