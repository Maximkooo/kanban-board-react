import React, { useEffect, useState } from 'react';
import { PRIORITY } from '../../common/constants';
import { v4 as uuidv4 } from 'uuid';
import mockData from '../../mockData';
import { useNavigate, useParams } from 'react-router-dom';
const EditTask = ({}) => {
	const someDate = new Date();
	const date = someDate.setDate(someDate.getDate());
	const defaultValue = new Date(date).toISOString().split('T')[0];

	const { id: titleID } = useParams();
	const navigate = useNavigate();
	const [taskForm, setTaskForm] = useState({
		id: uuidv4(),
		title: '',
		description: '',
		assignee: '',
		priority: 'Low',
		createdDate: defaultValue,
		dueDate: '',
		visible: true,
	});
	const updateTask = () => {
		const getTask = mockData
			.map((category) => category.tasks.find((task) => task.title === titleID))
			.filter((arrayEl) => arrayEl);
		if (getTask.length) {
			setTaskForm(getTask[0]);
		}
	};
	useEffect(() => {
		if (titleID) {
			updateTask();
		}
	}, [titleID]);
	console.log(taskForm);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setTaskForm((prevTaskForm) => ({
			...prevTaskForm,
			[name]: value,
		}));
	};
	const priorityHandler = (value) => {
		setTaskForm((prevState) => ({
			...prevState,
			priority: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		//check on existing task to update
		mockData[0].tasks.push(taskForm);
		//clear the edit task state
		console.log(taskForm);
		navigate('/');
		setTaskForm({
			title: '',
			description: '',
			assignee: '',
			priority: 'Low',
			createdDate: defaultValue,
			dueDate: '',
		});
		console.log('Form submitted:', taskForm);
	};
	return (
		<div className=" container">
			<form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
				<div className="mb-6">
					<label
						htmlFor="large-input"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Title
					</label>
					<input
						value={taskForm.title}
						onChange={handleChange}
						type="text"
						name="title"
						id="large-input"
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="default-input"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Description
					</label>
					<textarea
						value={taskForm.description}
						name="description"
						onChange={handleChange}
						type="text"
						id="large-input"
						className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="small-input"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Assignee
					</label>
					<input
						value={taskForm.assignee}
						name="assignee"
						onChange={handleChange}
						type="text"
						id="small-input"
						className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="mb-6 relative">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="grid-state"
					>
						Priority
					</label>
					<select
						value={taskForm.priority}
						onChange={(e) => priorityHandler(e.target.value)}
						className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						id="grid-state"
					>
						{PRIORITY.map((prior, idx) => (
							<option
								// onClick={(el) => priorityHandler(el.target.value)}
								key={idx}
							>
								{prior.value}
							</option>
						))}
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
						</svg>
					</div>
				</div>
				<div className="mb-6 flex justify-between">
					<div>
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							htmlFor="grid-city"
						>
							Create Date
						</label>
						<input
							value={taskForm.createdDate}
							onChange={handleChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							id="grid-city"
							type="date"
							disabled
						/>
					</div>
					<div>
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							htmlFor="grid-zip"
						>
							Due Date
						</label>
						<input
							value={taskForm.dueDate}
							onChange={handleChange}
							className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							id="grid-zip"
							type="date"
							name="dueDate"
						/>
					</div>
				</div>
				<div className="mb-6 flex justify-center">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditTask;
