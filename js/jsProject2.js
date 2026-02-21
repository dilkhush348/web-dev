const users = [
    {
        name: "kiara sharma",
        pic: "https://images.unsplash.com/photo-1768324972954-2780a71d099a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "silent chaos in a loud world  | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1769063159859-1c4a03b21f4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
        bio: "main character energy | coffee > everything",
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1768933294181-82778103e501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "walking through dreams in doc martens | late night thinker",
    },
    {
        name: "kiran rawat",
        pic: "https://images.unsplash.com/photo-1768326205125-e7a30f054696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "too glam to give a damn | filter free soul",
    },
    {
        name: "isha mehta",
        pic: "https://images.unsplash.com/photo-1768405942784-0d48a1f44fe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "a little chaos , a lot of art | just vibes",
    },
    {
        name: "tanya rawat",
        pic: "https://images.unsplash.com/photo-1768413167547-a35de5f4bf59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        bio: "don't text , just vibe | soft heart , sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://images.unsplash.com/photo-1769628027250-d2a7a5a4eb64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
        bio: "aesthatic overload | living in lowercase",
    }
];



function showUsers(arr) {
    arr.forEach(function(user) {
        
const card = document.createElement("div");
card.classList.add("card");

const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`;
blurredLayer.classList.add("blurred-layer");

const content = document.createElement("div");
content.classList.add("content");

const heading = document.createElement("h3");
heading.textContent = user.name;

const para = document.createElement("p");
para.textContent = user.bio;

content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input" , function () {
    let newUsers = users.filter( function(user) {
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
})
