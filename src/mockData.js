
const mockData = [
  {
    id: '1',
    title: ' 📃 To do',
    tasks: [
      {
        id: '101',
        "title": "Design Landing Page",
        "description": "Create a visually appealing landing page for the website.",
        "assignee": "Mary Davis",
        "priority": "High",
        "createdDate": "2023-09-15",
        "dueDate": "2024-03-03",
        "visible": true
      },
      {
        id: '102',
        "title": "Develop User Registration",
        "description": "Implement user registration functionality with email verification.",
        "assignee": "Jane Smith",
        "priority": "Medium",
        "createdDate": "2023-09-16",
        "dueDate": "2023-10-10",
        "visible": true
      },

    ]
  },
  {
    id: '2',
    title: ' ✏️ In progress',
    tasks: [
      {
        id: '201',
        "title": "Release Version 1.0",
        "description": "Prepare for the release of the first version of the application.",
        "assignee": "Sarah Brown",
        "priority": "High",
        "createdDate": "2023-09-18",
        "dueDate": "2023-10-05",
        "visible": true
      },
    ]
  },
  {
    id: '3',
    title: ' ⭕ Review',
    tasks: [
      {
        "id": '301',
        "title": "Update Documentation",
        "description": "Update user documentation with the latest features and changes.",
        "assignee": "David Wilson",
        "priority": "Low",
        "createdDate": "2023-09-19",
        "dueDate": "2024-09-30",
        "visible": true
      }
    ]
  },
  {
    id: '4',
    title: ' 👍 Completed',
    tasks: [
      {
        id: '401',
        "title": "Bug Fix: Login Issue",
        "description": "Investigate and fix the login problem reported by users.",
        "assignee": "Mark Johnson",
        "priority": "High",
        "createdDate": "2023-09-17",
        "dueDate": "2023-09-25",
        "visible": true
      },
    ]
  }
]

export default mockData