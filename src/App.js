import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

export default function App() {
    return (
        <>
            <div id='Header'>
                <Header />
            </div>
            
            <div id='Content'>
                <Content />
            </div>
        </>

    );
}