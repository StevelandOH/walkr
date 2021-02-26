import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Dog from '../../images/Untitled.jpg';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    const logout = (e) => {
        e.preventDefault();
        history.push('/login');
        dispatch(sessionActions.logout());
    };

    return (
        <div>
            <div className="logout-container">
                <img
                    src={Dog}
                    className="logout-picture"
                    onClick={toggleMenu}
                ></img>
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="dropdown-container">
                        <p style={{ color: 'white' }}>{user.username}</p>
                        <p>{user.email}</p>
                        <button className="logout-button" onClick={logout}>
                            logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileButton;
