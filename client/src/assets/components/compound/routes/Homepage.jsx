import React from 'react';
import Footer from '../../simple/homepage/Footer';
import Header from '../../simple/homepage/Header'
import RegisterArea from '../../simple/homepage/RegisterArea';

export default function Homepage(props) {
    return (
        <div>
            <Header />
            <RegisterArea />
            <Footer />
        </div>
    )
}
