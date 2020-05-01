const filterUsers =  async (name) =>
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
        .then(res => res.json())

function debouceEvent(fn, wait= 1000 ,time){

    return function(){
        clearTimeout(time)
        time = setTimeout( () => {
            fn.apply(this, arguments)
        }, wait)
    }

}

// arrou func debouceEvent
// const debouceEvent = () => (...args) => 
//     clearTimeout(time, time= setTimeout( () => fn(...args), wait))

function handleKeyUp(event){
    console.log('handlekeyUp')
    filterUsers(event.target.value)
        .then(users => console.log(users.map( user => user.name)))
  
}

document.querySelector("input")
    .addEventListener("keyup", debouceEvent(handleKeyUp, 500))