function createToaster(config) {
    return function (notification) {
      let div = document.createElement("div");
      div.textContent = notification;
      div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-dark"} px-6 py-3 rounded shadow-lg pointer-events-none`;

      document.querySelector(".parent").appendChild(div);

      if (config.positionX !== "left" || positionY !== "top") {
        document.querySelector(".parent").className +=
        `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`
      } 
      setTimeout(function () {
        document.querySelector(".parent").removeChild(div);
      }, config.duration*1000);
    }
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});
toaster("download Done");

setTimeout (function () {
    toaster("your device is safe")
}, 2000);