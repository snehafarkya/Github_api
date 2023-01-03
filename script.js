
// 
// let a = fetch(`https://api.github.com/users/${names}`)

// if(a.catch((error))){
//   console.log("Resolved");
// }
// else{
//   console.log("Valid")
// }
let names = prompt("Enter github username")
fetch(`https://api.github.com/users/${names}`, { 
                 headers: {
                      'Accept' : 'application/vnd.github.v3+json'
                  }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
                    const root = document.querySelector('#root');
                    root.innerHTML = `<a href='${data.html_url}'>Name: '${data.name}'</a>
                     <p>Followers : '${data.followers}'</p>`
                })
		.catch( error => console.error(error));