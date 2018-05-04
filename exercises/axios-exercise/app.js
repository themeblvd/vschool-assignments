(function(axios){

    var app = document.getElementById('app');

    var todoList = app.querySelector('.todo-list');

    var user = 'jbobich';

    /**
     * Get initial todo list data to display.
     */
    axios.get(`https://api.vschool.io/${user}/todo`)
        .then(function(response){
            for (let i = 0; i < response.data.length; i++) {
                addTodoItem(response.data[i]);
            }
        })
        .catch(function(error){
            console.log(error);
        });

    /**
     * Add a new todo item on forms submission.
     */
    document.add.addEventListener('submit', function(event) {

        event.preventDefault();

        var newItem = {
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value
        };

        axios.post(`https://api.vschool.io/${user}/todo`, newItem)
            .then(function(response){
                console.log(response.data);
                addTodoItem(response.data);
            })
            .catch(function(error){
                console.log(error)
            });

    });

    /**
     * Add a new todo item to the DOM, given
     * the data.
     */
    function addTodoItem(data){

        var row = todoList.insertRow();

        if ( data.completed ) {
            row.classList.add('mute');
        }

        row.setAttribute('data-item-id', data._id);

        row.insertCell().appendChild( document.createTextNode( data.title ) );

        row.insertCell().appendChild( document.createTextNode( '$' + data.price ) );

        row.insertCell().appendChild( document.createTextNode( data.description ) );

        var checkbox = document.createElement('input');

        checkbox.addEventListener('click', handleCheckBox);
        checkbox.type = 'checkbox';
        checkbox.checked = data.completed ? true : false;

        row.insertCell().appendChild(checkbox);

        var link = document.createElement('a');

        link.addEventListener('click', handleRemoveClick);
        link.href = '#';
        link.classList.add('remove-item');
        link.textContent = 'Remove';

        row.insertCell().appendChild(link);

    }

    /**
     * Remove an item. Binded to the `click` event
     * for .remove-link.
     */
    function handleRemoveClick(event) {

        event.preventDefault();

        var itemID = event.target.closest('tr').getAttribute('data-item-id');

        axios.delete(`https://api.vschool.io/${user}/todo/${itemID}`)
            .then(function(response){
                event.target.closest('tr').remove();
            })
            .catch(function(error) {
                console.log(error);
            });

    }

    /**
     * Mark an item as completed. Binded to the `click`
     * event for checkboxes.
     */
    function handleCheckBox(event) {

        var itemID = event.target.closest('tr').getAttribute('data-item-id');

        axios.put(`https://api.vschool.io/${user}/todo/${itemID}`, {completed: event.target.checked})
            .then(function(response){
                if ( event.target.checked ) {
                    event.target.closest('tr').classList.add('mute')
                } else {
                    event.target.closest('tr').classList.remove('mute')
                }
            })
            .catch(function(error) {
                console.log(error);
            });

    }

})(axios);
