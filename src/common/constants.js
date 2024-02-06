import { v4 as uuidv4 } from 'uuid'

const PRIORITY = [
	{ value: "Low", label: "🟢 Low" },
	{ value: "Medium", label: "🟠 Medium" },
	{ value: "High", label: "🔴 High" },
];

const INCORRECTLY_DATA = 'Incorrectly entered data*'

const USERS = [
	{
		id: uuidv4(),
		name: 'Maks',
		email: 'maks@gmail.com',
		password: '123',
	},
	{
		id: uuidv4(),
		name: 'Vlad',
		email: 'vlad@gmail.com',
		password: '123',
	}
]

export { PRIORITY, USERS, INCORRECTLY_DATA };
