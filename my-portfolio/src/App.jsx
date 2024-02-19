import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import Contact from './components/contactPage';
import ProjectsPage from './components/projectsPage'
import './App.css'
import './index.css'
import AboutPage from './components/aboutPage';
import ProjectDetails from './components/ProjectCard/projectDetails'

function App() {
return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/projects' element={<ProjectsPage />} />
		<Route path='/contact' element={<Contact />} />
		<Route path='/about-me' element={<AboutPage />} />
		<Route path="/projects/:projectId" element={<ProjectDetails />} />
	</Routes>
  )
}

export default App
