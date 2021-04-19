"use strict"



function getLastPushDate(gitHubUsername) {
    let url = `https://api.github.com/users/${gitHubUsername}/events`
    let gitHubApi = fetch(url, {headers: {'Authorization': `token ${gitHubToken}`}})
        return gitHubApi
            .then((response) => {
                return response.json();
        })
            .then((githubEventData) => {
                for(let githubEvent of githubEventData){
                    if(githubEvent.type === "PushEvent"){
                        return new Date(githubEvent.created_at);
                    }
                }
            })
}

getLastPushDate("John-Pierce42").then((date) => console.log(date))


function getLastPushDate(githubUsername) {
    let url = `https://api.github.com/users/${githubUsername}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${gitHubToken}`}});
    return githubResponse
        .then((response)=>{
            return response.json();
        })
        .then((githubEventData)=>{
            for (let githubEvent of githubEventData) {
                if(githubEvent.type === "PushEvent") {
                    console.log(githubEvent.created_at);
                    return new Date(githubEvent.created_at);
                }
            }
        });
}

getLastPushDate("douglas-codeup")
    .then((date)=>console.log(date));