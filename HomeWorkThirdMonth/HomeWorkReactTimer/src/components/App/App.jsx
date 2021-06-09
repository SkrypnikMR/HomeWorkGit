import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import { ThemeContext, themes } from '../../context/themeContext';
import './App.scss';
import {icon} from '../../helper/iconCreator'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: themes.light, toggleTheme: this.toggleTheme.bind(this), bulb: icon(themes.light)} 
    }
    toggleTheme() {
        if (this.state.theme === themes.light) return this.setState({ theme: themes.dark, bulb: icon(themes.dark)})
        this.setState({ theme: themes.light, bulb: icon( themes.light)})
    }
    render() {
        return (<ThemeContext.Provider value={this.state}>
            <div className={`app-${this.state.theme}`}>
                <Header />
                <Main />
                <Footer />
            </div>
        </ThemeContext.Provider >)
    }
}




export default App;