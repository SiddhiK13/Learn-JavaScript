// 1. Fetch 'albums' data using AXIOS by using jsonplaceholder.


// Using Axios fetch Data 

function fetchData(){
    const details = {
        method : "get",
        url : "https://jsonplaceholder.typicode.com/albums"
    };

    axios(details).then(function(response) {
        console.log(response);
        console.log(response.data);

        let api_data = response.data;
        api_data.map((x)=>{


        //  create row in table 
            let row = document.createElement("tr");

        // create table data 

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
           

            td1.innerText = x.userid;
            td2.innerText = x.id;
            td3.innerText = x.title;
          

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
        

            let parent = document.getElementById("parentid");
            parent.appendChild(row);
        })
    })
}
// 2. Fetch 'todos data using AXIOS by using jsonplaceholder.


function fetchTodos(){
    const details1 = {
        method : "get",
        url : "https://jsonplaceholder.typicode.com/todos"
    };

    axios(details1).then(function(response1) {
        console.log(response1);
        console.log(response1.data);

        let api_todos = response1.data;
        api_todos.map((y)=>{

            let row = document.createElement("tr");

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");

            td1.innerText = y.userid;
            td2.innerText = y.id;
            td3.innerText = y.title;
            td4.innerText = y.completed;

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);

            let parent1 = document.getElementById("parentid1");
            parent1.appendChild(row);

        })
    })
}