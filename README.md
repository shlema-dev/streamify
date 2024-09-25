Streamify - Music Streaming Analytics Dashboard
Project Overview
This project is a music streaming analytics dashboard built with Next.js, TailwindCSS, and shadcn for chart components. Mock data is served via json-server, and each component fetches its own data to optimize load times.

Thought Process
Data Fetching: To improve the user experience and reduce loading times, each component fetches its own data independently. This allows components to display content as soon as their respective data is available, rather than waiting for other components.

State Management: Given the simplicity of this project, I opted to manage state locally within each component, avoiding the need for complex global state management libraries.

Charts & Visualizations: Used shadcn to render responsive and interactive charts for user growth, revenue distribution, and top streamed songs. This library provided flexibility in customizing charts with minimal setup.

Design: TailwindCSS was used to create a responsive and modern design, adhering to good UX/UI principles.

Trade-offs
Independent Data Fetching: While fetching data independently optimizes load times, this approach may result in slightly increased API calls. This was a trade-off I made for improving the perceived performance and user experience.

State Management Simplicity: Opting for local component state instead of a global state management solution like Redux or Context API reduces complexity, though it may limit scalability for larger projects. I made this decision because I don't think it is a good idea to implement something before it is needed. At it's current state, this application works well with local state management as there are no instances where the state needs to be shared among components.

How to Run the Project
Clone the repository:
git clone https://github.com/your-username/streamify-dashboard.git

Navigate to the project directory:
cd streamify-dashboard

Install dependencies:
npm install

Start the JSON Server (for mock data):
npx json-server data/db.json --port 8000 (port 8000 because default is 3000 and we need that for next frontend)

Run the development server:
npm run dev
Open the app in your browser at http://localhost:3000