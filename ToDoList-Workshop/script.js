/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{   
        id: 1,
		title: "Learn basic JavaScript",
		completed: false,
	},
	{   
        id: 2,
		title: "Learn DOM",
		completed: false,
	},
	{
        id: 3,
		title: "Take over the world",
		completed: false,
	},
];

console.log(todos);

const logList = () => {

    todosEl.innerHTML = '';
    todos.forEach(todo => {
        let cssClasses = "list-group-item";
        
        if (todo.completed){
            cssClasses += " completed";
        } 

        todosEl.innerHTML += `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;
        
    })
}
logList();

document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === "LI"){

        const todoId = e.target.dataset.todoId
        
        const find_todo = todos.find(todo => todo.id == todoId);

        find_todo.completed = !find_todo.completed
    }

             logList();
        });


newTodoFormEl.addEventListener('submit', e => {
    e.preventDefault();

    const maxTodoId = todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId);
    }, 0);

    const newTodoId = maxTodoId + 1;
    console.log(newTodoId)

   todos.push({
    id: newTodoId,
    title: newTodoFormEl.newTodo.value,
    completed: false
   })

        console.log(todos);

        logList();

        newTodoFormEl.reset();

})





