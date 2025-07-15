const employees = [
    {
        "id": 1,
        "name": "Pratik",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix login bug",
                "description": "Resolve login failure when email is blank",
                "date": "2025-07-08",
                "category": "Bug",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "UI Audit",
                "description": "Audit homepage for design consistency",
                "date": "2025-07-07",
                "category": "UI",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Database Backup",
                "description": "Backup MongoDB data to cloud",
                "date": "2025-07-06",
                "category": "Backend",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "name": "Rohan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Add product filters",
                "description": "Add size and brand filters to shop page",
                "date": "2025-07-08",
                "category": "Frontend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update Auth API",
                "description": "Secure auth routes with JWT",
                "date": "2025-07-07",
                "category": "Backend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Bug triage",
                "description": "Go through all open GitHub issues",
                "date": "2025-07-06",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Arjun",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Create test cases",
                "description": "Write unit tests for user signup",
                "date": "2025-07-08",
                "category": "QA",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Design dashboard",
                "description": "Create UI wireframes for admin dashboard",
                "date": "2025-07-07",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Resolve merge conflict",
                "description": "Fix issues in product.js after team merge",
                "date": "2025-07-06",
                "category": "DevOps",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Nikhil",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Research SEO",
                "description": "Prepare SEO checklist for marketing team",
                "date": "2025-07-08",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Refactor code",
                "description": "Clean up utils folder and remove unused files",
                "date": "2025-07-07",
                "category": "Refactor",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Create roadmap",
                "description": "Define next 3 sprints for the team",
                "date": "2025-07-06",
                "category": "Planning",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "name": "Sandip",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Client feedback",
                "description": "Collect UI feedback from recent clients",
                "date": "2025-07-08",
                "category": "Communication",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Add dark mode",
                "description": "Implement theme toggle button",
                "date": "2025-07-07",
                "category": "Frontend",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fail email test",
                "description": "Debug nodemailer error when sending test email",
                "date": "2025-07-06",
                "category": "Bug",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
]



const admin = [{
    "id": 1,
    "name": "Vikram",
    "email": "admin@example.com",
    "password": "123"
}
]

export const setlocalstorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))

}


export const getlocalstorage = () => {
    let employees = JSON.parse(localStorage.getItem("employees"))
    let admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin };
}
