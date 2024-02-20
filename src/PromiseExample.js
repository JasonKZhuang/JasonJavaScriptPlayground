// the resolve and reject are all function pointers
const myPromise = new Promise((resolve, reject) => {

    resolve('I am a resolved promise');
    reject("I don't have your demand data.")
})


function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');

    setTimeout(f1, 2000);

    // new Promise((resolve, reject) =>
    //     resolve('I am a promise')
    // ).then(resolve => console.log(resolve))

    myPromise
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

    f2();
}

main();