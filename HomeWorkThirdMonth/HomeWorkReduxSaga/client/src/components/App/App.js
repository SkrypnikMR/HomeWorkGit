import React from 'react';
import Header from '../Header';
import Movies from '../Movies';
import './App.scss';
import Footer from '../Footer';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App = () => (
    <div className='app'>
        <Header />
        <Movies />
        <Footer />
        <NotificationContainer />
    </div>
);

export default App;
