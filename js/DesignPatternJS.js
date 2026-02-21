// let bank = (function () {                 // module pattern (IIFE)
//     let bankbalance = 12000;

//     function checkBalance() {
//         console.log(bankbalance);
//     }

//     function setBalance(val) {
//         bankbalance = val;
//     }

//     function withdraw(val) {
//         if(val <= bankbalance) {
//             bankbalance -= val;
//             console.log(bankbalance);
//         }
//     }

//     return {
//         check: checkBalance,
//         set: setBalance,
//         draw: withdraw,
//     };
// })();

// bank.checkBalance();




// function createProduct(name, price) {             // factory function
//     let stock = 10;
//     return {
//     name,
//     price,
//     checkStock() {
//         console.log(stock);
//     },
//     buy(qty) {
//         if (qty <= stock) {
//             stock -= qty;
//             console.log(`${qty} pieces booked - ${stock} pieces left`);
//         }
//         else {
//             console.error(`we have only ${stock} pieces`);
//         }
//     },
//     refill(qty) {
//           stock += qty;
//           console.log(`refilled the stock - ${stock} piece now`)
//     }
// }
// }

// let iphone = createProduct("iphone" , 70000);
// iphone.buy(2);




class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscriber(user) {
        this.subscribers.push(user);
        user.update(` you have subscribed the channel.`);
    }
     
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(` you have un-subscribed the channel.`);
    }

    notify (message) {
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class user {
    constructor(name) {
        this.name = name;
    }

    update(data) {
         console.log(`${this.name}, ${data}`);
    }
}

let xyzchannel = new YoutubeChannel();
let user1 = new user("akash");

xyzchannel.subscriber(user1);
xyzchannel.notify("new video uploaded");