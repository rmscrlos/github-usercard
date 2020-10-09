import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const myHub = axios
// 	.get('https://api.github.com/users/rmscrlos')
// 	.then((r) => {
// 		let prof = makeCard(r.data);
// 		cards.appendChild(prof);
// 		console.log(r.data);
// 	})
// 	.catch((err) => console.log(err));

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

// console.log(myHub);
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
	'https://api.github.com/users/rmscrlos',
	'https://api.github.com/users/tetondan',
	'https://api.github.com/users/dustinmyers',
	'https://api.github.com/users/justsml',
	'https://api.github.com/users/luishrd',
	'https://api.github.com/users/bigknell'
];

const others = followersArray.forEach((e) => {
	axios
		.get(e)
		.then((r) => {
			let others = makeCard(r.data);
			cards.appendChild(others);
			console.log(r.data);
		})
		.catch((err) => {
			console.log(err);
		});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeCard(data) {
	// creating elements
	const card = document.createElement('div');
	const img = document.createElement('img');
	const cardInfo = document.createElement('div');
	const button = document.createElement('button');
	const repo = document.createElement('div');
	const h3 = document.createElement('h3');
	let username = document.createElement('p');
	const location = document.createElement('p');
	const profile = document.createElement('p');
	const a = document.createElement('a');
	const followers = document.createElement('p');
	const following = document.createElement('p');
	const bio = document.createElement('p');
	const repoText = document.createElement('p')
	const repoLink = document.createElement('a');
	

	//add class
	card.classList.add('card');
	button.classList.add('btn');
	h3.classList.add('name');
	username.classList.add('username');
	// contribution.classList.add('calendar');
	cardInfo.classList.add('cardInfo')

	//adding textContent
	h3.textContent = data['name'];
	username.textContent = data['login'];
	location.textContent = `Location: ${data['location']}`;
	profile.textContent = 'Profile: ';
	followers.textContent = `Followers: ${data['followers']}`;
	following.textContent = `Following: ${data['following']}`;
	bio.textContent = `Bio: ${data['bio']}`;
	a.textContent = 'Git Handle';
	button.textContent = 'MORE';
	

	//assigning values to elements
	img.src = data['avatar_url'];
	a.href = data['html_url'];
	repoLink.href = data['repos_url'];

	//appending elements
	card.appendChild(img);
	card.appendChild(cardInfo);
	cardInfo.appendChild(h3);
	cardInfo.appendChild(username);
	cardInfo.appendChild(location);
	cardInfo.append(profile);
	profile.appendChild(a);
	cardInfo.appendChild(bio);
	cardInfo.appendChild(followers);
	cardInfo.appendChild(following);
	
	card.appendChild(button);
	card.appendChild(repo);
	repo.appendChild(repoText);
	repo.appendChild(repoLink);
	
	// repolink styles
	repoLink.style.display = 'none';
	repoLink.style.fontSize = '1.5rem';
	
	

	//event listener
	button.addEventListener('click', () => {
		repo.classList.toggle('repo');
		repoLink.textContent = 'Repos';
		repoText.textContent = `Hello There! \n Here is a link to my repos:`;

		if(repoText.style.display === 'block'){
			repoText.style.display = 'none';
			repoLink.style.display = 'none'
		} else {
			repoText.style.display = 'block'
			repoLink.style.display = 'block'
		}
	});

	return card;
}

const cards = document.querySelector('.cards');

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// Stretch
