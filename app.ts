const searchBar = document.querySelector('.form-control');


// Define Search Topic From Search Bar


console.log(searchBar);
//Init UI
const ui = new UI;

const searchSubmit = document.getElementById('searchSubmit')   

searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value;

    if(searchText !== ''){
        console.log(searchText);
    }
});

