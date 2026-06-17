import './App.css';
import Home from './Pages/Home';
import Log from './Scripts/loggingMiddleware';
import fetchNotification from './Scripts/db';
import Display from './Pages/DisplayNotifications';

function App() {
  Log("backend", "error", "handler", "received string, expected bool");
  return (
    <>
      <Home />
      <fetchNotification />
      <Display />
    </>
  );
}

export default App;