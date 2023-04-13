import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, [])

  return (
    <div className="App">
      <RouterProvider
        router={router}
      ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
