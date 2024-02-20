// Updating parts of a string, returns a new string
let browserType = "mozilla";
const updated = browserType.replace("moz", "van123");
console.log(updated); // "van123illa"
console.log(browserType); // "mozilla"

browserType = browserType.replace("moz", "van");
console.log(browserType); // "vanilla"