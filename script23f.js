let programmingobject = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    Jokes:
"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

const keys=Object.keys(programmingobject);
console.log(keys);
for(let i=0;i<keys.length;i++){
    console.log(keys[i]);
}