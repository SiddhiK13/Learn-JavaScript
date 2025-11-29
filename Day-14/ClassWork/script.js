// 1. Fetch 'posts' data using AXIOS by using jsonplaceholder.

function fetchData(){
    const details = {
        method : "get",
        url : "https://jsonplaceholder.typicode.com/posts"
    };

    axios(details).then(function(response){
        console.log(response);
        console.log(response.data);

        let api_data = response.data;
        api_data.map((x)=>{

            let row = document.createElement("tr");

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");

            td1.innerText = x.userid;
            td2.innerText = x.id;
            td3.innerText = x.title;
            td4.innerText = x.body;

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);

            let parent= document.getElementById("parentid");
            parent.appendChild(row);
        })

    })
}
// 2. Fetch 'comments' data using AXIOS by using jsonplaceholder.

function fetchComments(){
    const detail = {
        method : "get",
        url : "https://jsonplaceholder.typicode.com/comments"
    };

    axios(detail).then(function(response1){
        console.log(response1);
        console.log(response1.data);

        let api_comments = response1.data;
        api_comments.map((y)=>{
            let row = document.createElement("tr");

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");


            td1.innerText = y.postid;
            td2.innerText = y.id;
            td3.innerText = y.name;
            td4.innerText = y.email;
            td5.innerText = y.body;

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);

            let parent1= document.getElementById("parentid1");
            parent1.appendChild(row);
        })
        
    })
}