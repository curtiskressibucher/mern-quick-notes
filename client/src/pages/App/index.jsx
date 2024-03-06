import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewOrderPage } from '../NewOrderPage/NewOrderPage';
import { AuthPage } from '../AuthPage';
import { OrderHistoryPage } from '../OrderHistoryPage/OrderHistoryPage';
import { getUser } from '../../utilities/users-service';
import { NavBar } from '../../components/NavBar';
import NotesForm from '../../components/NotesForm/NotesForm';
import Notes from '../../components/Notes/Notes';

function App() {
    const [user, setUser] = useState(() => {
        return getUser();
    });

    return (
        <>
            <main className='App'>
                <header>
                    <NavBar user={user} setUser={setUser} />
                </header>
                {user ? (
                    <Routes>
                        <Route
                            path='/'
                            element={<Navigate to='/orders' replace />}
                        />
                        <Route path='/orders/new' element={<NewOrderPage />} />
                        <Route path='/orders' element={<Notes />} />
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route
                            path='/auth'
                            element={<AuthPage setUser={setUser} />}
                        />
                        <Route path='*' element={<Navigate to='/auth' />} />
                    </Routes>
                )}

                {user && (
                    <>
                        <h1>My Notes App</h1>
                        <NotesForm user={user} setUser={setUser} />
                        <Notes />
                    </>
                )}
            </main>
            <footer></footer>
        </>
    );
}

export default App;
