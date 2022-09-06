function time(){
    var x = document.getElementById("job");
    x.innerHTML = Date();
}

let vue = new Vue({
    el: "#app",
    data: {
        todos:[
            {title: 'assignment1', checked: true},
            {title: 'assignment2', checked: false},
            {title: 'assignment3', checked: false},
        ],
    },
});