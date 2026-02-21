let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit" , this.submitForm.bind(this));
    },
    submitForm: function(dets) {
        dets.preventDefault();
       this.addUser();
       this.renderUi();
    },
    addUser: function () {
         this.users.push({
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        })

        form.reset();
    },
    renderUi: function(){
        document.querySelector(".users").innerHTML = "";
        this.users.forEach((user , index) => {
          const card = document.createElement("div");
          card.className = 
          "bg-white-90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blur-100 hover:scale-105 transition";

          card.addEventListener("click" , () => {
            this.removeUser(index)
          })

          const img = document.createElement("img");
          img.className = 
          "w-28 h-28 rounded-full object-color mb-5 border-4 border-blur-200 shadow";
          img.src = user.photo;
          img.alt = "user photo";
          card.appendChild(img);

          const name = document.createElement("h2");
          name.className = "text-2xl font-bold mb-1 text-blur-700";
          name.textContent = user.userName;
          card.appendChild(name);

          const role = document.createElement("p");
          role.className = "text-purple-500 mb-2 font-medium";
          role.textContent = user.role;
          card.appendChild(role);

          const bio = document.createElement("p");
          bio.className = "text-grey-700 text-center";
          bio.textContent = user.bio;
          card.appendChild(bio);

          document.querySelector(".users").appendChild(card);
        })
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
    this.renderUi();
    },
}

userManager.init();