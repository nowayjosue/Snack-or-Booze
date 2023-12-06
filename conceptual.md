### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is a library for routing in React applications. Its purpose is to enable navigation and provide a way to manage the application's UI based on the URL. It allows developers to create a single-page application (SPA) where different components render based on the URL, giving users a seamless and dynamic experience.

- What is a single page application?

A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. SPAs use techniques such as AJAX and dynamic updating of HTML to achieve a more fluid and responsive user experience.

- What are some differences between client side and server side routing?

Client-side routing is handled on the clients' browser. Server-side routing is handled on the server.

- What are two ways of handling redirects with React Router? When would you use each?
Using the <Redirect> component is useful when you want to redirect the user based on certain conditions. The History object is userful when you want to perform redirects based on certain user interactions.

- What are two different ways to handle page-not-found user experiences using React Router? 

Using a <Route> with a wildcard path will match any URL that hasn't matched any of the defined routes, rendering a "Not Found" component. On the other hand, you can set up a default route that redirects to a 404 page if no other routes match.

- How do you grab URL parameters from within a component using React Router?
You can use the useParams hook provided by React Router.

- What is context in React? When would you use it?
Context in React provides a way to share values like themes, user authentication status, or other global settings without explicitly passing them through every level of the component tree. It's useful when data needs to be accessible by many components at different nesting levels.

- Describe some differences between class-based components and function
  components in React.

  Class-based components use a class syntax. Function components use a function syntax.

- What are some of the problems that hooks were designed to solve?

Class components can become complex with lifecycle methods and state management. Hooks provide a more straightforward way to manage state and side effects. With class components, logic for state and lifecycle methods often had to be duplicated or managed in higher-order components. Hooks enable logic to be reused across components. Class components might have less readable code due to the separation of concerns between lifecycle methods. Hooks allow a more functional and organized approach to component logic. Hooks provide a way to encapsulate related logic within a custom hook, promoting better organization and separation of concerns.