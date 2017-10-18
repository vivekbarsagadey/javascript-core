/**
 * Created by vivek_000 on 27/02/2017.
 */


//Covert string to "vivek shyam barsagadey" to  "VIVE..., SHYA..., BARS..."
const name = "vivek   shyam barsagadey";
let fullName  = name.split(" ").filter(x=>x).map((x) =>{ return x.toUpperCase()}).map((x) =>{ return x.slice(0,4) + (x.length > 4 ? "..." : "" )  }).join(", ");

//Steps
//1 create array   : split(" ")
//2. remove empty data from array : filter(x=>x)
//3. covert upper case by using map : map((x) =>{ return x.toUpperCase()})
//4. slice only 4 char and add ... (3 dot) if it is more than 4 char
console.info("fullName ",fullName);