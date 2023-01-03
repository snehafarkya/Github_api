
// 
// let a = fetch(`https://api.github.com/users/${names}`)

// if(a.catch((error))){
//   console.log("Resolved");
// }
// else{
//   console.log("Valid")
// }
let names = prompt("Enter github username")
fetch(`https://api.github.com/users/${names}`)
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
                    const root = document.querySelector('#root');
                    root.innerHTML = `<a href='${data.html_url}'>Name: '${data.name}'</a>
                     <p>Followers : '${data.followers}'</p>
                     <p>Following : '${data.following}'</p>
                     <p>Location : '${data.location}'</p>
                     <p>Twitter username : '${data.twitter_username}'</p>
                     <p>Created at : '${data.created_at}'</p>
                     <p>Your Bio : '${data.bio}'</p>`
                })
		.catch( error => console.error(error));