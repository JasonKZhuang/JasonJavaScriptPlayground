const seconds = new Date().getTime() / 1000;

setTimeout(() => {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 5000);

while (true) {
    console.log(new Date());
    if (new Date().getTime() / 1000 - seconds >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}


(() => {
    console.log("this is the start");

    setTimeout(() => {
        console.log("Callback 1: this is a msg from call back");
    }); // has a default time value of 0

    console.log("this is just a message");

    setTimeout(() => {
        console.log("Callback 2: this is a msg from call back");
    }, 0);

    console.log("this is the end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
