// Add your code here


function submitData(n, e){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: n,
            email: e
        })
    })
            .then(resp => resp.json())
            .then((obj) => {
                let objID = obj.id;
                console.log("obj:", obj)
                console.log("objID:", objID)
                document.body.innerHTML = obj.id;
            })
            .catch(function(error) {
                document.body.innerHTML = error.message;
              });
            
}

//document.addEventListener("DOMContentLoaded", submitData("jeff", "jeff@jeff"));