import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./Header.jsx"
import UserDashboard from './UserDashboard.jsx';
import UserProfile from './userProfile.jsx';
import WarningAlert from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <UserDashboard />
    <UserProfile />
    <WarningAlert />
  </StrictMode>,
)
