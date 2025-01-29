import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Auth/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'
import Docs from './Pages/Docs/Docs.jsx';
import About from './Pages/About/About.jsx';

//publishable key
const PUBLISHABLE_KEY = pk_test_Y2FyaW5nLXNhbG1vbi0xMS5jbGVyay5hY2NvdW50cy5kZXYk

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

//routes object for efficient dynamic routing in the application.
const RoutesObj = [
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/Docs', element: <Docs /> },
  { path: '/About', element: <About /> },
]
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">


      <Routes>
        {
          RoutesObj.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        }
      </Routes>
    </ClerkProvider>
  </BrowserRouter>
)
