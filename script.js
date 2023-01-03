
// 
// let a = fetch(`https://api.github.com/users/${names}`)

// if(a.catch((error))){
//   console.log("Resolved");
// }
// else{
//   console.log("Valid")
// }

function sub(){
var names = document.querySelector('input').value;
var card = document.getElementById("card").style.display="block";
var inp = document.querySelector('input').style.display="none";
var inp = document.getElementById('btn').style.display="none";

fetch(`https://api.github.com/users/${names}`)
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {setTimeout(()=>{

                    const root = document.querySelector('#root');
                    root.innerHTML = `<a class='name' href='${data.html_url}'>Name: '${data.name}'</a>
                     <p>Followers : '${data.followers}'</p>
                     <p>Following : '${data.following}'</p>
                     <p>Location : '${data.location}'</p>
                     <p>Twitter username : '${data.twitter_username}'</p>
                     <p>Created at : '${data.created_at}'</p>
                     <p>Your Bio : '${data.bio}'</p>`
                     
    }) 
                })
		.catch( error => console.error(error));
}