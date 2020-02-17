// Fetch existing todos from localStorage
// getSavedTodos

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}


// Save todos to localStorage
// saveTodos
const saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
// renderTodos

const renderTodos = function (todos, filter) {
    let filteredTodos = todos.filter(function (element) {
        return element.text.toLowerCase().includes(filter.searchTodo.toLowerCase())
    })
    // console.log(filteredTodos)

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filterTodo.hideCompleted) {
            //if it's checked
            return !todo.completed
        } else {
            return true
        }
        // return !filters.hideCompleted || !todo.completed
    })


    const incomplete = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    console.log(incomplete)//this is an array 

    document.querySelector('#todo').innerHTML = ''


    document.querySelector('#todo').appendChild(generateSummaryDOM(incomplete))



    filteredTodos.forEach(function (todo) {
        // generateTodoDOM(todo)
        document.querySelector('#todo').appendChild(generateTodoDOM(todo))
    })


}

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}



// Get the DOM elements for list summary
// generateSummaryDOM
const generateSummaryDOM = function (incomplete) {
    const summary = document.createElement("p")
    summary.textContent = `you have ${incomplete.length} todos left`
    return summary
}
