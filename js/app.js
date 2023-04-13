const APIURL = "https://api.github.com/users/";
const main = document.querySelector("main")


console.log(APIURL);

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  const data = await response.json();
  console.log(data);
  const card = ` <div class="card">
  <div>
      <img class="avatar" src="${data.avatar_url}"
          alt="Florin Pop">
  </div>
  <div class="user-info">
      <h2>${data.login}</h2>
      <p>${data.bio}</p>
      <ul class=" user_info">
          <li>${data.following}<strong>Following</strong></li>
          <li>${data.followers}<strong>Followers</strong></li>
          <li>${data.public_repos}<strong>Repos</strong></li>
      </ul>
      <div id="repos">

      </div>
  </div>
</div>`

main.innerHTML = card;
getRepos(username);

}

getUser("TaylorOtwell");

const getRepos = async (username) =>
{
    const repos = document.querySelector("#repos");

    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    console.log(data);

data.forEach(item => {
        const element = document.createElement('a');
        element.classList.add("repo")
        element.href = item.html_url
        element.innerText = item.name;  
        element.target = "_blank"
        repos.appendChild(element)
    
});
    
        
  
}

const formSubmit= () =>
{
    const searchbox = document.querySelector("#search")
    if(searchbox.value != "")
    {
        getUser(searchbox.value);
        searchbox.value = "";
    }
    return false; 
} 
