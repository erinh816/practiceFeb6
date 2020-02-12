const todos = [{
  text: 'Wake up',
  completed: false
}, {
  text: 'Eat the breakfast',
  completed: true
}, {
  text: 'Eat the lunch',
  completed: false
}, {
  text: 'Go to work',
  completed: true
}, {
  text: 'Study',
  completed: true
}]

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
  searchTodo: ''
}

const renderTodos = function (todos, filter) {
  const filteredTodos = todos.filter(function (element) {
    return element.text.toLowerCase().includes(filter.searchTodo.toLowerCase())
  })
  // console.log(filteredTodos)


  const incomplete = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  console.log(incomplete)//this is an array 

  document.querySelector('#todo').innerHTML = ''

  const summary = document.createElement("p")
  summary.textContent = `you have ${incomplete.length} todos left`
  document.querySelector('#todo').appendChild(summary)



  filteredTodos.forEach(function (todo) {
    console.log(todo.text)
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todo').appendChild(p)
  })


}

renderTodos(todos, filterTodo)





//********END TODO FILTER Challenge */


document.querySelector('#add').addEventListener('click', function (event) {
  console.log(event)
  event.target.textContent = 'ADDED'
})

document.querySelector('#new-todo').addEventListener('input', function (event) {
  // console.log(event.target.value)
  filterTodo.searchTodo = event.target.value
  renderTodos(todos, filterTodo)
})


//TODO Filter Challenge
//1.setup a div contain for todos
//2.setup filters (searchText) and wire up a new filter input to change it
//3.create a renderTodos function to render and rerender the latest filtered data



