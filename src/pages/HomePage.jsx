import Dashboard from '../components/Dashboard';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const access = window.sessionStorage.getItem("access")
	return (
		<>
			{access === 'true' ? <Dashboard /> :
				<div className='text-center'>
					<h1 className='text-3xl'>
						You don't have access
					</h1>
					<Link to='/' className='text-2xl text-blue-600'> Click me</Link>
				</div>
			}
		</>
	);
};

export default HomePage;
