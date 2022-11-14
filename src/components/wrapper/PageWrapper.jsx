import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

function PageWrapper({ children }) {
    return (
        <div className="m-0 w-full bg-primary">
            <Header solidBg />

            <div className="">
                {children}
            </div>

            <Footer />
        </div>
    );
}

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageWrapper;
