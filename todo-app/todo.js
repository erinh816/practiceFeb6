
// const todos = [{
//   text: 'Wake up',
//   completed: false
// }, {
//   text: 'Eat the breakfast',
//   completed: true
// }, {
//   text: 'Eat the lunch',
//   completed: false
// }, {
//   text: 'Go to work',
//   completed: true
// }, {
//   text: 'Study',
//   completed: true
// }]

const todos = getSavedTodos()




//TASK1:remove all p tags that have "the" in the text
//step 1: grab all p
//step 2: find all p with "the"
//step 3: remove 

// const p=document.querySelectorAll('p')
// p.forEach(function(paragraph){
//   console.log(paragraph)
//   if(paragraph.textContent.includes('the')){
//       paragraph.remove()
//   }  
// })


//TASK2:
//print "you have xxx todos left" in a p tag
//add a p for each todo above

//*****Start TODO Filter Challenge */
//Step 1
const filterTodo = {
  searchTodo: '',
  hideCompleted: false
}


renderTodos(todos, filterTodo)


//********END TODO FILTER Challenge */


// document.querySelector('#add').addEventListener('click', function (event) {
//   console.log(event)
//   event.target.textContent = 'ADDED'
// })

document.querySelector('#new-todo').addEventListener('input', (event) => {
  // console.log(event.target.value)
  filterTodo.searchTodo = event.target.value
  renderTodos(todos, filterTodo)
})


//*TODO Filter Challenge
//1.setup a div contain for todos
//2.setup filters (searchText) and wire up a new filter input to change it
//3.create a renderTodos function to render and rerender the latest filtered data


//*TODO Form Challenge
//1.Create a form with a single input for todo text
//2.Setup an submit handler and cancel the default action
//3.Add a new item to the todos array with that text data(completed value of false)
//4.Rerender the application
//5.Clear the input filed value

document.querySelector('#todo-form').addEventListener('submit', (event) => {
  event.preventDefault()

  console.log(event.target.elements.todoName.value)

  todos.push({
    id: uuidv4(),
    text: event.target.elements.todoName.value,
    completed: false
  })


  saveTodos(todos)
  // localStorage.setItem('todos', JSON.stringify(todos))

  renderTodos(todos, filterTodo)


  //clear input cell
  event.target.elements.todoName.value = ''

})


//*CHECKBOX Challenge

//1.Create a checkbox and setup event listener ->"Hide Completed"
//it'll be unchecked by default??
//2.Create new hideCompleted filter (default false)
//alongside the search filter(default is an empty string), the default value of the new one will be false
//3.Update hideCompleted an rerender list on checkbox change
//when someone checks or unchecks the box, we want to update hideCompleted correctly
//and we want to rerender that list
//4.Setup renderTodos to remove completed items
//in renderTodos, we're going to take this filter into account
//if it's true, we don't want to show the ones completed
//if it's false, we want to show everything cuz it hasn't checked the Hide Completed checkbox



document.querySelector('#for-fun').addEventListener('change', (event) => {
  filterTodo.hideCompleted = event.target.checked
  console.log(event.target.checked)
  renderTodos(todos, filterTodo)
})




