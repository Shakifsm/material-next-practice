import React from 'react';
import Bootstrap from '../Bootstrap/Bootstrap';
import Header from '../Header/Header';
import Test from '../Test/Test';

const HomeComponent = () => {
    return (
        <div>
            <Header></Header>
            <Test></Test>
            <Bootstrap></Bootstrap>
        </div>
    );
};

export default HomeComponent;