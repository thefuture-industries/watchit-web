import React from "react";
import HomePage from "./HomePage";
import { Helmet } from 'react-helmet-async';

const IHomePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="description" content="" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <link rel="canonical" href="" />
            </Helmet>

            {/* page content */}
            <HomePage />
        </React.Fragment>
    )
}

export default IHomePage
