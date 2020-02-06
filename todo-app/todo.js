const todos=[{
  text:'Wake up',
  completed:false
},{
  text:'Eat the breakfast',
  completed:true
},{
  text:'Eat the lunch',
  completed:false
},{
  text:'Go to work',
  completed:true
},{
  text:'Study',
  completed:true
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
const incomplete=todos.filter(function(todo){
  return !todo.completed
})
console.log(incomplete)//this is an array 


const summary= document.createElement("p")
summary.textContent=`you have ${incomplete.length} todos left`
document.querySelector('body').appendChild(summary)


todos.forEach(function(todo){
  console.log(todo.text)
  const p = document.createElement('p')
  p.textContent=todo.text
  document.querySelector('body').appendChild(p)
})


document.querySelector('#add').addEventListener('click', function(event){
  console.log(event)
  event.target.textContent='ADDED'
})

document.querySelector('#new-todo').addEventListener('input', function(event){
  console.log(event.target.value)
})

