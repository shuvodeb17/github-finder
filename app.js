const searchBtn = document.getElementById('search-btn');
let userInput = document.getElementById('search-users-area');
let ui = new UI();
searchBtn.addEventListener('click', function () {
    // user value reccieved
    let userValueRecieved = userInput.value;

    // alerts 
    let emptyAlert = document.querySelector('.alerts')
    if (userInput.value == '') {
        emptyAlert.classList.add('show-alert')
    } else{
        emptyAlert.classList.remove('show-alert')
    }


    //Featch Api 
    if (userInput != '') {
        fetch(`https://api.github.com/users/${userValueRecieved}`)
            .then((response) => response.json())
            .then(data => {
                if (userInput.value == '') {
                    emptyAlert.classList.add('show-alert')
                } else {
                    ui.showProfile(data)
                }
            })
    } else {
        ui.clearProfile();
    }

})