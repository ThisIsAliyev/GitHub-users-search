let imageSection = document.querySelector('img');
let userName1 = document.querySelector('.userName1');
let userName2 = document.querySelector('.userName2');
let bio = document.querySelector('.bio');
let joinedDate = document.querySelector('.joinedDate');
let repos = document.querySelector('.repos');
let following = document.querySelector('.following');
let followers = document.querySelector('.followers');
let loc = document.querySelector('.location');
let twitter = document.querySelector('.twitter');
let userLink = document.querySelector('a');
let link = document.querySelector('.link');
let building = document.querySelector('.building');

let mainContainer = document.querySelector('main');
let loadingContainer = document.querySelector('.loading-container');
let notFound = document.querySelector('.user-not-found');

document.querySelector('button').addEventListener('click',() => {
    let value = document.querySelector('.searchInput').value;

    mainContainer.style.display = 'none';
    loadingContainer.style.display = 'grid';
    notFound.style.display = 'none';

    if (!value) {
        loadingContainer.style.display = 'none';
        notFound.style.display = 'flex';
        return;
    }   
    else {
    fetch(`https://api.github.com/users/${value}`).then(
    (Response) => {
                return Response.json();
                console.log(Response);
    }
    ).then(
        (data) => 
        {
            mainContainer.style.display = 'flex';
            loadingContainer.style.display = 'none';

            if(data.message === 'Not Found') {
                notFound.style.display = 'flex';
                mainContainer.style.display = 'none';
                return;
            } else {
                notFound.style.display = 'none';
                mainContainer.style.display = 'flex';
            imageSection.src = data.avatar_url;
            
            userName1.textContent = (data.name === null) ? '' : data.name;
            userName2.textContent = data.login;
            bio.textContent = (data.bio === null) ? 'This profile has no bio' : data.bio;
            repos.textContent = data.public_repos;
            following.textContent = data.following;
            followers.textContent = data.followers;
            loc.textContent = (data.location === null) ? 'Not available' : data.location;
            twitter.textContent = (data.twitter_username === null ) ? 'Not available' : data.twitter_username;
            link.textContent = data.html_url;
            userLink.href = data.html_url

            let months = [null,'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            let creatDate = data.created_at.substring(5,7);
            let monthX = Number(creatDate);

            joinedDate.textContent = `Joined ${data.created_at.substring(8,10)} ${months[monthX]} ${data.created_at.substring(0,4)}`;
            }
            }
    )
    }
})

let label = document.querySelector('label');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let htmlEl = document.querySelector('html');
let themes;
moon.addEventListener('click',() => {
    htmlEl.setAttribute('data-theme','ligth');
})

sun.addEventListener('click',() => {
    htmlEl.setAttribute('data-theme','dark');
})


//Responsive desogn 

window.onresize = () => {
    if(window.innerWidth < 1000) {
        console.log(window.innerWidth);
    }
}