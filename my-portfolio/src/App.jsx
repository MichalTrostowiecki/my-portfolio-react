import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import Projects from './components/projectsPage';
import './App.css'

function App() {
return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/projects' element={<Projects />} />
	</Routes>
  )
}

export default App
