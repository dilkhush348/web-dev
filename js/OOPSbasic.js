// class CreatePencil {
//     constructor(name, price, color) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
// }

// erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//         if(elem.style.color === this.color) {
//             elem.remove();
//         }
//     });
// }
//     write(text) {
//     let h1 = document.createElement("h1")
//     h1.textContent = text;
//     h1.style.color = this.color;
//      h1.dataset.color = this.color;
//     document.body.append(h1);
//   };
// }

// let p1 = new CreatePencil("natraj", 10, "black");
// let p2 = new CreatePencil("doms", 10, "blue");



class user {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name } : ${text}`;
        document.body.appendChild(h1);
    }
}
    
    class admin extends user {
        constructor(name, address, username, email) {
            super(name, address, username, email);
            this.role = "admin";
        }

        remove() {
            document.querySelectorAll("h1").forEach(function (elem) {
                elem.remove();
            });
        }
    }

let u1 = new user("dilkhush", "ludhiana", "_dilkhush.01_", "dilkhush@dil.com");
let u2 = new user("akash", "ludhiana", "akassshhhh", "akash@akas.com");
let a1 = new admin("admin", "india", "admiiinnee", "a@a.com");