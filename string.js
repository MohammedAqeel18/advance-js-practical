//string length
{ 
let message ="I love you hafsa"

    console.log(message)
}


{ 
let message ="I love you hafsa"
console.log(message.length) 
}


//changing case
{ 
let text = "SRILANKA"

console.log(text.toLowerCase());
}

{
    let text = "srilanka"

    console.log(text.toUpperCase());
}


//Concatenating Strings
let firstname="Aqeel"
let lastname ="Ashari"

let fullname = firstname + " " +lastname;

console.log(fullname);

{
    let universityname="uva wellassa univeristy"
    let countryname="of srilanka"

    let stateuniversityname= universityname + " " + countryname

    console.log(stateuniversityname)
}

//Finding a Substring
let phrase = "hafsa love you"
console .log(phrase.includes("aqeel"));
console.log(phrase.indexOf("love"));

{
    let phrase ="uva wellassa university"

    console.log(phrase.includes("uva"))
    console.log(phrase.indexOf("srilanka"))
}

//Extracting a Substring
let sentence = "I love JavaScript programming.";
console.log(sentence.slice(7, 18)); 

//Splitting a String
let names = "Alice, Bob, Charlie";
let nameArray = names.split(", ");
console.log(nameArray); // Output: [ 'Alice', 'Bob', 'Charlie' ]

//replace string
let statement = "I like apples.";
let newStatement = statement.replace("apples", "bananas");
console.log(newStatement);

//Trimming Spaces
let greeting = "   Hello!   ";
console.log(greeting.trim());

//Repeating a String
let laugh = "Ha";
console.log(laugh.repeat(3))

//Template Literals
let age = 25;
let name = "Alice";
console.log(`My name is ${name} and I am ${age} years old.`);

//Character Access
let word = "JavaScript";
console.log(word.charAt(4));  // Output: S
console.log(word[4]); 

//Converting to String
let num = 123;
let str = num.toString();
console.log(str, typeof str); 