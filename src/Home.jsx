import { Route, Routes } from 'react-router-dom';
import './Home.scss';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CreateTask from './pages/CreateTask';
import PendingTask from './pages/PendingTask';
import InProgresTask from './pages/InProgresTask';
import ReviewTask from './pages/ReviewTask';
import DoneTask from './pages/DoneTask';
import OverallTasks from './pages/OverallTasks';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

// import Sidebar from './components/Sidebar'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="task_create" element={<CreateTask />} />
				<Route path="task_pending" element={<PendingTask />} />
				<Route path="taks_inprogres" element={<InProgresTask />} />
				<Route path="task_review" element={<ReviewTask />} />
				<Route path="task_done" element={<DoneTask />} />
				<Route path="task_overall" element={<OverallTasks />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
