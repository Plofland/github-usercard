/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const result = axios.get('https://api.github.com/users/Plofland');
console.log(result);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
    DONE
    Skip to STEP 3.
*/

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

const followersArray = [];

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

// const cardHolder = document.querySelector();

function cardMaker(data){
  const divCard = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const userHandle = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  const profileLink = document.createElement('a')

  divCard.appendChild(cardImg);
  divCard.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userHandle);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(profileLink);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  divCard.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  divCard.classList.add("username");

  cardImg.src = data.avatar_url;
  userName.textContent = data.name;
  userHandle.textContent = data.login;
  userLocation.textContent = `Location: ${data.location}`;
  profileLink.href = data.blog;
  profileLink.textContent = "Personal Portfolio";
  userFollowers.textContent = data.followers;
  userFollowing.textContent = data.followering;
  userBio.textContent = data.bio;



  return divCard;

};


// Place loop here to append all results from cardMaker to cardHolder

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
