## Command to create react app 
``` npx create-react-app ```

## Command to run the app
(be inside the project folder)
``` npm start ```

# Components in react
* component represents a part of user interface
* There may be many components in the ui, say header, sidenav, main content and footer , 
these components are all contained by one outer component mostly said as the root (App component)
* components are reusable, let say the right sidenav can be the left sidenav

#### component code is usually placed in a js file , ie app component is placed in app.js

#### In react there are two component types , a stateless functional component and statefull class component
 * The Stateless functional component are usually the js functions which return the html for the ui
 * The statefull components are those class extending component class
   Render method for returning the html

### Functional Componets 
* Its just like a javascript functions which take up the object properties and return the html(jsx) which describe the ui

### Class components
* Unlike the functional components it also take up the object properties and return the html , and also it can have some states (maintains their own private data) that is specific for that particular class

### JSX (Javascript XML)
* Its an extension to js language syntax
* Write XML like codes for elements and components
* jsx have tag name, attributes and children
* jsx makes your react code simpler and elegant

### Props and State
#### Props
* Props get passed to the component
* Function Parameters
* Props are immutable
* props - function components
* this.props - Class components

#### State
* State is managed within the component
* Varaible declared in the function body
* State can be changed
* UseState Hook - Functional Component
* this.state - Class components