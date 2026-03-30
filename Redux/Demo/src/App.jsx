import './App.css'
import { useSelector, useDispatch } from 'react-redux' //reads the data from store, usedispatch lets you send actions to the store
import { addbook, emptyBooks } from './store/Slices/SocialSlice.js';
import { addBook, emptyAllBooks, incrementalEnrolledstudents } from './store/Slices/PhysicSlice.js';
import { addTopic, emptyAllTopics, incrementStudents } from './store/Slices/MathsSlice.js';

function App() {
  let books = useSelector(state => state.Social.books); //dispatch calls
  let physicsBooks = useSelector(state => state.Physics.books); //dispatch calls
  let studentcount = useSelector(state => state.Physics.enrollmentstudentCount);
  let mathsTopics = useSelector(state => state.Maths.topics);
  let mathsStudents = useSelector(state => state.Maths.studentCount);

  const dispatch = useDispatch()

  function addBookTotheSlice() { //dispacth function
    dispatch(addbook("Social Book 6"))
  }
  function emptyBooksSlice() {
    dispatch(emptyBooks())
  }
  function printCurrentBooks() {
    console.log("current books:", books)
  }
  function addTopicToMaths() {
    dispatch(addTopic("Trigonometry"))
    console.log("Maths Topics after add:", mathsTopics)
  }
  function emptyMathsTopics() {
    dispatch(emptyAllTopics())
  }
  function printMathsStats() {
    console.log("Maths Topics:", mathsTopics)
    console.log("Maths Students:", mathsStudents)
  }
  function printPhysicsStats() {
    console.log("Physics Stats")
    console.log("Total Books:", physicsBooks.length)
    console.log("Total Students:", studentcount)
  }

  return (
    <>
      <button onClick={addBookTotheSlice}>add Book</button>
      <button onClick={printCurrentBooks}>get Books</button>
      <button onClick={emptyBooksSlice}>empty Books</button>
      <button onClick={printPhysicsStats}>print Physics Stats</button>
      <button onClick={addTopicToMaths}>Add Maths Topic</button>
      <button onClick={emptyMathsTopics}>Empty Maths Topics</button>
      <button onClick={printMathsStats}>Print Maths Stats</button>
    </>
  )
}

export default App