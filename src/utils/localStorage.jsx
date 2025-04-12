const employees = [
  {
    Id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      totalTasks: 3,
      activeTasks: 0,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update project documentation",
        taskDescription: "Add the missing API docs to the project README.",
        taskDate: "2025-04-12",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve the issue causing login to fail on Safari.",
        taskDate: "2025-04-10",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design homepage layout",
        taskDescription: "Create a new design layout for the homepage section.",
        taskDate: "2025-04-09",
        category: "Design"
      }
    ]
  },
  {
    Id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      totalTasks: 4,
      activeTasks: 0,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 2
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build navbar component",
        taskDescription: "Implement a responsive navbar using React.",
        taskDate: "2025-04-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create API endpoint",
        taskDescription: "Develop the endpoint for fetching user data.",
        taskDate: "2025-04-11",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize images",
        taskDescription: "Compress and optimize all product images.",
        taskDate: "2025-04-10",
        category: "Performance"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Refactor cart logic",
        taskDescription: "Clean up and simplify the cart reducer logic.",
        taskDate: "2025-04-12",
        category: "Refactor"
      }
    ]
  },
  {
    Id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      totalTasks: 3,
      activeTasks: 1,
      completedTasks: 1,
      failedTasks: 0,
      newTasks: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test payment gateway",
        taskDescription: "Run integration tests for Stripe payments.",
        taskDate: "2025-04-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix 404 error",
        taskDescription: "Debug and fix the 404 error on blog pages.",
        taskDate: "2025-04-11",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add animation to hero section",
        taskDescription: "Use GSAP to animate homepage hero elements.",
        taskDate: "2025-04-12",
        category: "Frontend"
      }
    ]
  },
  {
    Id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      totalTasks: 3,
      activeTasks: 0,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set up CI pipeline",
        taskDescription: "Configure GitHub Actions for automated testing.",
        taskDate: "2025-04-10",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate Firebase",
        taskDescription: "Add Firebase authentication to the app.",
        taskDate: "2025-04-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Draft team onboarding guide",
        taskDescription: "Write a guide for new team members.",
        taskDate: "2025-04-12",
        category: "HR"
      }
    ]
  },
  {
    Id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      totalTasks: 4,
      activeTasks: 1,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Style dashboard components",
        taskDescription: "Improve the UI styling on the admin dashboard.",
        taskDate: "2025-04-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Build user profile page",
        taskDescription: "Create a page for users to view and edit their profile.",
        taskDate: "2025-04-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Set up database schema",
        taskDescription: "Define and create tables for the new project DB.",
        taskDate: "2025-04-08",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Audit code for security issues",
        taskDescription: "Check for vulnerabilities and bad practices.",
        taskDate: "2025-04-12",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    Id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  // Ensure no newTask is also marked active
  employees.forEach(employee => {
    employee.tasks.forEach(task => {
      if (task.newTask) task.active = false;
    });
  });

  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};