const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

 //***********************************************
 let languages3 = users.filter(function (languages){
     return languages.languages.length > 2;
 })

console.log(languages3);

 //**********************************************
 let emailArr = users.map(function (emails){
     return emails.email
 });

console.log(emailArr);


//**********************************************
let yearsOfExp = users.reduce(function (total, num){
     return  total + num.yearsOfExperience;

}, 0);

let averageYearsOfExp = users.reduce(function (total,num){
    let totalYears = total + num.yearsOfExperience;
    let averageYrs = totalYears / 5;
    return averageYrs;
}, 0);

console.log(`Their total number years of exp are: ${yearsOfExp}!`);
console.log(`Their total average years of exp are: ${averageYearsOfExp}!`);


// let longestEmail = users.reduce(function (user,email){
//         if(user.email.length > email.email.length){
//             return user.email
//         }
// }, "")
//
// console.log(longestEmail);


//************ stack overFlow ************
let longestEmail = users.reduce(function (a,b){

        return a.length > b.length ? a : b;
},"");

console.log(longestEmail);

 // *******************************************
  let usersNameInString =  users.reduce(function (obj,ele){


}, "")