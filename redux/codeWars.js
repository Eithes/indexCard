// function wordsToMarks(string){
  
// }
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const sifer = {};
// alphabet.map((letter, i) =>  sifer[letter] = i+1);
// return string.split('').reduce((sum, l) => sum+sifer[l], 0);

// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// return [...str].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)

// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0) 


function paper(l, w, h) {
if (l === 0 || w === 0 || h === 0) return 'zero'    
let needed = ((l*200 / 52) + (w*200 / 52)) / (1000 / (h*100));
let extra = needed + needed.toFixed(2) / 100 * 15;
let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
if (Math.round(extra) <= 20) {
    return words[Math.round(extra)-1];
} else {
    return Math.round(extra);
}
}

console.log(paper(6.3, 4.5, 3.29));