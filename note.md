DOM - (document object model) is repreasentation of HTML that is abstracted  into  a object and available for usewith programing languages as JS /can be manipulated by  and dealt with User , HTML is baseline, DOM is abstraction over that HTML that we can be interacted with 

DOM is a abstraction , a node-strutured tree like object that represents the HTML (can be interacted with by programing languages)

virtuel DOM - is creation within react and react uses the vertual DOM to compare it to the actual DOM that's being manipulated by the User and once there any defferences between two causes a change of the state 

virtuel DOM is another level of abstraction 
virtual DOM is JS object that represents the DOM (can be interacted with by us React developers)
virtuel DOM in tearms of data structures and languages is big JS object that represents how DOM should look, and DOM represents how HTML should look

Component - a react representation of some peace of UI (could be gient container or some small piece)

Class component - writen as JS class 
-can contain state
-must have `render{}` -render method
- can take advantage of lifecycle methodes

Functional component
-a component that is written as JS function
-could be  function expression (arrow function or using `function keyword) (which means probably `const` =) 
-could be function declaration (begin with keyword function and is named)
-used to be that it could not have state - now they can with hooks (impurt useState and useEffect and declare state inside functional component)

Container vs Presentational component
- Containers could do something, hold state, hold other components , use lifecycle, maybe Routes
-Presentational components take props and show them -usually these are functional components

JSX
-a new syntaxthat React has given us to wriste XML(HTML)/component/JS code quicklys
// XML is markdown language where I can choose tag whatever I want
<SomeComponent props={theProps}/>
<h1>Hello</h1>
{// curly brackets indicate code here is executed as JS}