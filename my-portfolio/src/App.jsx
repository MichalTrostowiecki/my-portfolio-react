import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import Contact from './components/contactPage';
import ProjectsPage from './components/projectsPage'
import './App.css'
import './index.css'

function App() {
return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/projects' element={<ProjectsPage />} />
		<Route path='/contact' element={<Contact />} />
	</Routes>
  )
}

export default App
