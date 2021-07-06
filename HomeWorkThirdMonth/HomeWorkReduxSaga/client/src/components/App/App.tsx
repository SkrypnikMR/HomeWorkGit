import React from 'react';
import Header from '../Header';
import Movies from '../Movies';
import './App.scss';
import Footer from '../Footer';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTheme } from '../hoc/withTheme.jsx';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={theme ? 'app' : 'app__dark'}>
            <Header />
            <Movies />
            <Footer />
            <NotificationContainer />
        </div>
    );
}



export default App;
