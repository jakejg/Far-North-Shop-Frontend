import React from 'react';
import NavBar from './NavBar'
import Routes from './Routes'
import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes />
            <footer>Copyright Far North Woodworks 2020. All Rights Reserved</footer>
        </div>
    );
}

export default App;
