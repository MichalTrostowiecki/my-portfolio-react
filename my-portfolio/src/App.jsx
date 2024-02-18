import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import Projects from './components/projectsPage';
import Contact from './components/contactPage';
import './App.css'
import './index.css'

function App() {
return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/projects' element={<Projects />} />
		<Route path='/contact' element={<Contact />} />
	</Routes>
  )
}

export default App
