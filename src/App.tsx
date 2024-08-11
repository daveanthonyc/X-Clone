import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
    // replace
    const user = false;

    if (!user) {
      return <Login />
    }

    return (
        <Home />
    )
}

export default App
