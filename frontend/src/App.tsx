import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import FormLayout from './layout/FormLayout'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import StudentFormPage from './pages/StudentFormPage'

function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainLayout><Home /></MainLayout>} />
				<Route path="/form" element={<FormLayout><StudentFormPage /></FormLayout>} />
			</Routes>
		</Router>

	)
}

export default App
