const nemo =["nemo"];

const largeArray = new Array(1000 * 10 * 10 * 10).fill("nemo");

function findNemo(array){
  
  let t0 = performance.now();

  for(let i=0;i< array.length; i++){
    if (array[i] === 'nemo'){
      console.log("Found Nemo");
    }
  }
  
  let t1 = performance.now();
  
  console.log("Call to find Nemo took " + (t1-t0) + "ms");
}

findNemo(largeArray);


function compressFirstBox(array){
  console.log(array[0]);
}