let theInput = document.querySelector(".get-repos input"),
    getButton = document.querySelector(".get-button"),
    reposdata = document.querySelector(".show-data");

    getButton.onclick = function () {
        getRepos();
    };

    //get Repos Function 
    function getRepos() {
        if (theInput.value == "") {
            reposdata.innerHTML = "<span> Please write Github UserName</span";
        }
        else {
            fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => response.json())
            .then((repositories) => {
                // empty the container
                reposdata.innerHTML = '';
                //loop on repositeries
                repositories.forEach(repo => {
                    //rete the main div element 
                    let mainDiv = document.createElement("div");
                    //Create Repo name text 
                    let repoName = document.createTextNode(repo.name);
                    //Appent the text to main div 
                    mainDiv.appendChild(repoName);
                    //create repo url anchor
                    let theUrl = document.createElement('a');
                    //create repo url text 
                    let theUrlText = document.createTextNode(' visit');
                    //append the repo Url text to anchor tag
                    theUrl.appendChild(theUrlText);
                    // add the hybertext refernce 
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
                    // set attribute blank
                    theUrl.setAttribute('target', '_blank');
                    //append url anchor o main div
                    mainDiv.appendChild(theUrl);
                    // creat stars count span 
                    let starsSpan = document.createElement("span");
                    // creat the star count text 
                    let starText = document.createTextNode(`  Stars  ${repo.stargazers_count}`);
                    //add stars count text to stars span
                    starsSpan.appendChild(starText);
                    //append stars count span to main div 
                    mainDiv.appendChild(starsSpan);
                    //add class on main div 
                    mainDiv.className = 'repo-box';
                    //append the main div to caontainer
                    reposdata.appendChild(mainDiv);
                });
                    
                });             
                
            }
    }