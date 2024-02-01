import React, { useState } from 'react';
import { PRIORITY } from '../../common/constants';

const EditTask = ({
	title,
	description,
	assignee,
	priority,
	createdDate,
	dueDate,
}) => {
	const someDate = new Date();
	const date = someDate.setDate(someDate.getDate());
	const defaultValue = new Date(date).toISOString().split('T')[0];

	const [taskForm, setTaskForm] = useState({
		title: '',
		description: '',
		assignee: '',
		priority: 'Low',
		createdDate: defaultValue,
		dueDate: '',
	});
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
		console.log('Form submitted:', taskForm);
	};
	return (
		<div className=" container">
			<form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
				<div className="flex flex-col flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							Title
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							name="title"
							type="text"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-last-name"
						>
							Description
						</label>
						<textarea
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-last-name"
							type="text"
							name="description"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6  bebra">
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-state"
						>
							Priority
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-state"
							>
								{PRIORITY.map((prior, idx) => (
									<option
										onClick={(el) => priorityHandler(el.target.value)}
										key={idx}
									>
										{prior}
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
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2 bebra">
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-city"
						>
							Create Date
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-city"
							type="date"
							name={createdDate}
							defaultValue={defaultValue}
							disabled
						/>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-zip"
						>
							Due Date
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-zip"
							type="date"
							name="dueDate"
						/>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-zip"
						>
							Assignee
						</label>
						<input
							onChange={handleChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-zip"
							type="text"
							name="assignee"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default EditTask;
