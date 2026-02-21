// let pr = new Promise(function (res , rej) {
//     setTimeout(function () {
//         let rn =Math.floor(Math.random()*10);
//         if (rn>5) res("resolved with " + rn );
//         else rej ("rejected with " + rn);
//     }, 3000);
// });

// pr.then(function (val) {
//     console.log(val);
// }).catch (function (val) {
//     console.log(val);
// });


function getUsers () {
  fetch("https://dummyjson.com/users?limit=3")
.then((raw) => raw.json())
.then((data) => {
  console.log(data.results);
    data.results.forEach(function (user) {
       const card = document.createElement("div");
card.className =
  "bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300 gap-4";

/* Header */
const header = document.createElement("div");
header.className = "h-24 bg-gradient-to-r from-blue-600 to-purple-700";
card.appendChild(header);

/* Profile Section */
const profile = document.createElement("div");
profile.className = "px-6 pb-6";

/* Avatar */
const avatarWrapper = document.createElement("div");
avatarWrapper.className = "flex justify-center -mt-12 mb-4";

const img = document.createElement("img");
img.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
img.className =
  "w-24 h-24 rounded-full border-4 border-gray-800 shadow-md";

avatarWrapper.appendChild(img);
profile.appendChild(avatarWrapper);

/* User Info */
const userInfo = document.createElement("div");
userInfo.className = "text-center mb-4";

const name = document.createElement("h2");
name.className = "text-2xl font-bold text-white";
name.textContent = user.name.first + " " + user.name.last;

const role = document.createElement("p");
role.className = "text-purple-400 font-semibold text-sm";
role.textContent = "Web Developer";

const location = document.createElement("p");
location.className = "text-gray-400 text-xs mt-1";
location.textContent = "📍 San Francisco, CA";

userInfo.append(name, role, location);
profile.appendChild(userInfo);

/* Bio */
const bio = document.createElement("p");
bio.className = "text-gray-400 text-center text-sm mb-6";
bio.textContent =
  "Passionate about creating beautiful and functional web experiences.";
profile.appendChild(bio);

/* Stats */
const stats = document.createElement("div");
stats.className =
  "grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-700";

function createStat(number, label) {
  const div = document.createElement("div");
  div.className = "text-center";

  const num = document.createElement("p");
  num.className = "text-2xl font-bold text-blue-400";
  num.textContent = number;

  const text = document.createElement("p");
  text.className = "text-gray-400 text-xs";
  text.textContent = label;

  div.append(num, text);
  return div;
}

stats.append(
  createStat("1.2K", "Followers"),
  createStat("850", "Following"),
  createStat("42", "Posts")
);

profile.appendChild(stats);

/* Buttons */
const buttons = document.createElement("div");
buttons.className = "flex gap-3";

const followBtn = document.createElement("button");
followBtn.className =
  "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg";
followBtn.textContent = "Follow";

const msgBtn = document.createElement("button");
msgBtn.className =
  "flex-1 border-2 border-blue-600 text-blue-400 hover:bg-gray-700 font-semibold py-2 px-4 rounded-lg";
msgBtn.textContent = "Message";

buttons.append(followBtn, msgBtn);
profile.appendChild(buttons);

/* Final attach */
card.appendChild(profile);
document.querySelector(".users").appendChild(card);

    })
})
}

document.querySelector("#refreshBtn").addEventListener("click" , function () {
  getUsers();
})