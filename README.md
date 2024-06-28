# Tasker

Tasker is a Todo application that allows users to create, read, edit, and delete todos. When a task is marked as finished, it is moved to the completed tasks category. The application is built using TypeScript, React, and TailwindCSS, and includes drag-and-drop functionality for task management. All data is stored in local storage.

## Features

- **Create Todos:** Add new tasks to your todo list.
- **Read Todos:** View all your current tasks.
- **Edit Todos:** Update task details.
- **Delete Todos:** Remove tasks from your list.
- **Mark as Completed:** Move finished tasks to the completed tasks category.
- **Drag and Drop:** Reorder tasks using drag and drop.
- **Local Storage:** Persist tasks across browser sessions using local storage.

## Technologies Used

- **TypeScript:** For type-safe JavaScript.
- **React:** For building the user interface.
- **TailwindCSS:** For styling the application.
- **hello-pangea/dnd:** For drag-and-drop functionality.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kaspra/tasker.git
   cd tasker
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

### Creating a Todo

1. Enter the task description in the input field.
2. Click the "Go" button.

### Reading Todos

- All your current tasks are displayed in the Active Tasks.

### Editing a Todo

1. Click the "Edit" button next to the task you want to edit.
2. Update the task details and save.

### Deleting a Todo

- Click the "Delete" button next to the task you want to remove.

### Marking a Todo as Completed

- Click the "Finish" button next to the task. The task will move to the completed tasks category.

### Drag and Drop

- Drag a task to reorder it within the list or to the other category.

### Local Storage

- All tasks are stored in the browser's local storage, so your todos persist even after refreshing the page or closing the browser.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
