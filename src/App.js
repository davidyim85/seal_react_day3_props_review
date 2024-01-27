

// question 1. 
// Which component(s) will have a hello world and hello again on the screen?
// function App() {

//a. shows
// return <div><h1>hello world</h1><h2>hello again</h2></div>

//b. nothing
// return 
//   <div><h1>hello world</h1><h2>hello again</h2></div>

//c.shows
// return <div>
//   <h1>hello world</h1>
//   <h2>hello again</h2>
// </div>
// }
// without parenthesis
// When using the keyword return it must return one thing
// The “one thing” must be on the SAME line as the return line
// even if the "one thing " has a part of it on the return return line - it oucnts 


// question 2.
// Which component(s) will have a hello world and hello again on the screen?
// implicit return means there is a lack of a keyword return
// implicit return can only be used when the function doesnt have a curly bracket pair at the end

// a. will show nothing
// this is because there are brackets, and there is no return keyword
// const App = () => {
//   <div><h1>hello world</h1><h2>hello again</h2></div>
// }

// b. will show 
//the return keyword is assumed to be placed on the same line as the jsx
// const App = () => 
//   <div><h1>hello world</h1><h2>hello again</h2></div>



// c. will show 
// with parenthesis, the return is assumed to be placed at the start of the parenthesis
// const App = () => (
//   <div><h1>hello world</h1><h2>hello again</h2></div>
// )

// d. will show 
// const App = () =>
//   <div>
//     <h1>hello world</h1>
//     <h2>hello again</h2>
//   </div>

// e. will show
// const App = () => <div><h1>hello world</h1><h2>hello again</h2></div>


// Which is NOT returning a ‘one thing’ ?
// a. will error
// const App = () => <h1>hello world</h1> <h2>hello again</h2>

// b. shows because its returning one thing
// const App = () => <div> <h1>hello world</h1> <h2>hello again</h2></div>


// Which component(s) will have a hello world and hello again on the screen?
// a. will show
// the one thing is on the same line as return
// const App = () => {
//   return <div>
//     <h1>hello world</h1> <h2>hello again</h2></div>
// }

// b. will show
// apolgies same as A
// const App = () => {
//   return <div>
//     <h1>hello world</h1> <h2>hello again</h2></div>
// }

// c. will not show
// the one thing is not on the same line as the return
// const App = () => {
//   return
//   <div><h1>hello world</h1> <h2>hello again</h2></div>
// }

// d. will show
// the parenthesis encapsulates the jsx and is considered the 'one thing'
//therefore the start of the opening parenthesis being on the same line as the return 
//results in the hello worlds on the screen
// const App = () => {
//   return (
//     <div><h1>hello world</h1> <h2>hello again</h2></div>
//   )
// }

// e. will show
// const App = () => {
//   return (<div>
//     <h1>hello world</h1> <h2>hello again</h2></div>
//   )
// }


// export default App;


///////////////////////////////////
//import here
import ChildExample from "./ChildExample";

const ParentExample = () => {

  const gaArr = [
    { name: 'alex' },
    { name: 'david' },
    { name: 'joy' },
    { name: 'kyle' },
  ]

  const darkKnightArr = [
    { name: 'nolan' },
    { name: 'bale' },
  ]
  return (
    <div>

      <ChildExample
        title={'General Assembly'}
        instructors={gaArr}
        location={'zoom'}
        unitNum={3}
      />
      <ChildExample
        // title={'Batman2'}
        instructors={darkKnightArr}
        location={'regal'}
        unitNum={2}
      />
    </div>
  )
}
export default ParentExample;

