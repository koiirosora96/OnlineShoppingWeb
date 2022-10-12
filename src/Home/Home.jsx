import NarBar from '../NarBar/NarBar.js'
import ContactSession from '../ContactSession/ContactSession.js';
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className='App'>
            <NarBar />
            <Outlet />
            <ContactSession />
        </div>
    )
}