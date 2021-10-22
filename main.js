const socialMediaLinks ={
  github: "gaabrielb",
  youtube: "#2",
  facebook: "#3",
  instagram: "#4",
  twitter: "#5",
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){

    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`

  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){

  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      nameGit.textContent = data.name
      userGit.textContent = data.login
      linkGit.href = data.html_url
      bioGit.textContent = data.bio
      imageGit.src = data.avatar_url
    })
}

getGitHubProfileInfos()