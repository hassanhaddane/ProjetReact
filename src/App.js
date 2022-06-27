import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Exercice1 from './components/Exercice1';
import Exercice2 from './components/Exercice2';
import Exercice3 from './components/Exercice3';
import Exercice4 from './components/Exercice4';
import Exercice5 from './components/Exercice5';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <br/>
                <Exercice1 />
                <br/>
                <Exercice2 />
                <br/>
                <Exercice3 />
                <br/>
                <Exercice4 />
                <br/>
                <Exercice5 />
                <br/>
                <Footer />
            </div>
        );
    }
}

export default App;