import React from 'react';
import Container from './Components/Container';
import Footer from './Components/Footer';
const App = () => {
    return (
        <div className="w-full h-screen grid bg-[#1f2632]">
            <div className="self-center">
                <Container />
            </div>
            <div className="self-end">
                <Footer />
            </div>
        </div>
    );
};
