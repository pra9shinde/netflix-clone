import { BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Browse from './pages/Browse';

import { IsUserRedirect, ProtectedRoute } from './helper/authRoute';
import useAuthListener from './hooks/useAuthListener';

function App() {
    const { user } = useAuthListener();
    console.log(user);

    return (
        <BrowserRouter>
            <Switch>
                <IsUserRedirect user={user} path='/signin' loggedInPath='/browse' exact>
                    <SignIn />
                </IsUserRedirect>

                <IsUserRedirect user={user} path='/signup' loggedInPath='/browse' exact>
                    <SignUp />
                </IsUserRedirect>

                <ProtectedRoute user={user} path='/browse' exact>
                    <Browse />
                </ProtectedRoute>

                <IsUserRedirect user={user} path='/' loggedInPath='/browse' exact>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
