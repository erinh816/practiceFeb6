// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}


// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Remove one todo by clicking deleteButton
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (oneTodo) {
        return oneTodo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (oneTodo) {
        return oneTodo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
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
//1.Setup a root div
//2.Setup and append a checkbox (set type attribute)
//someNode.setAttribute('type','text')
//3.Setup and append a span (set text)
//4.Setup and append a button (set text)

const generateTodoDOM = function (todo) {
    const rootDiv = document.createElement('div')
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('button')
    const text = document.createElement('span')
    text.textContent = todo.text

    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.completed
    checkBox.addEventListener('change', function (event) {
        toggleTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos, filterTodo)
    })

    deleteButton.textContent = 'x'
    deleteButton.addEventListener('click', function (event) {
        // console.log(todo)
        removeTodo(todo.id)
        saveTodos(todo)


        renderTodos(todos, filterTodo)
    })

    rootDiv.appendChild(checkBox)

    rootDiv.appendChild(text)

    rootDiv.appendChild(deleteButton)


    return rootDiv
}


// Get the DOM elements for list summary
const generateSummaryDOM = function (incomplete) {
    const summary = document.createElement("p")
    summary.textContent = `you have ${incomplete.length} todos left`
    return summary
}

//用这个删除已经加了UUID的todo
// document.querySelector('#remove-all').addEventListener('click', function (event) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })