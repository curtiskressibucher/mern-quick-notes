import { Link } from 'react-router-dom';
import { logout } from '../../utilities/users-service';

export function NavBar({ user, setUser }) {
    return (
        <nav>
            {user ? (
                <>
                    <Link to='/notes'>Notes</Link>
                    <br />
                    <Link to='/orders'>All Orders</Link>
                    <br />
                    <Link
                        to=''
                        onClick={() => {
                            // logout via the users-service
                            logout();
                            // setUser back to null
                            setUser(null);
                        }}>
                        Logout
                    </Link>
                </>
            ) : (
                <Link to='/login'>Login</Link>
            )}
        </nav>
    );
}
