import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CreateTask from './pages/CreateTask';
import PendingTask from './pages/PendingTask';
import InProgressTask from './pages/InProgressTask';
import ReviewTask from './pages/ReviewTask';
import DoneTask from './pages/DoneTask';
import OverallTasks from './pages/OverallTasks';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import UpdatePage from './pages/UpdatePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/sign-in" element={<SignInPage />} />
				<Route path="/task-create" element={<CreateTask />} />
				<Route path="/task-pending" element={<PendingTask />} />
				<Route path="/task-inprogress" element={<InProgressTask />} />
				<Route path="/task-review" element={<ReviewTask />} />
				<Route path="/task-done" element={<DoneTask />} />
				<Route path="/task-overall" element={<OverallTasks />} />
				<Route path="/update-task/:id" element={<UpdatePage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
