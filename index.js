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
                // let docElem = document.createElement("P")
                // docElem.appendChild(objID);
                // document.appendChild(docElem);
                document.body.innerHTML = obj.id;
            })
            .catch(function(error) {
                //alert("Bad things! Ragnarők!");
                //console.log(error.message);
                //let errorElem = document.createElement("p");
                //errorElem.appendChild(error.message);
                document.body.innerHTML = error.message;
              });
            
}

