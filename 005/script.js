// let txt =
//   "Not only did Jian visit the mountain after school almost every day, but he’d also go there on the weekends to play with his friends. \\ At the peak of the mountain, there were many trees and bushes, perfect for tag and hide and seek. Depending on the season, the mountain housed a variety of bugs, which Jian and his friends used to taunt each other. On the trees with lighter bark, Jian often saw spotted lanternflies, a moth-like insect with gray and white polka dot wings, and a bright red body. Jian always found these ones a little freaky because of how far they could jump. Jian’s friends would often poke them with twigs, sending them bouncing off the trees, like mini red fireballs. In the summertime, spiders the size of baseballs cast their webs in between the trees — Jian and his friends would dare each other to hit the webs down with rocks.  At the lower part of the mountain, bordering the music department buildings, there was a patch of tree-covered grass that was persistently soft and muddy. One spring, an infestation of small black caterpillars took over every cubic centimeter of that patch of grass—they hung in dense clumps on their silk threads, making it impossible to walk through without becoming utterly intertwined. Jian remembers his friend Wang Liang grabbing a fist full of caterpillars and seeing them squirming around in his hand. He had to avoid the mountain for a short while because his mother was tired of him coming home covered in the caterpillars and their larvae. ";
 let mycolor;

let txt =
  "Not only did Jian visit the mountain after school almost every day, but he’d also go there on the weekends to play with his friends. \\ At the peak of the mountain, there were many trees and bushes, perfect for tag and hide and seek. \\ Depending on the season, the mountain housed a variety of bugs, which Jian and his friends used to taunt each other. \\ On the trees with lighter bark, Jian often saw spotted lanternflies, a moth-like insect with gray and white polka dot wings, and a bright red body. \\ Jian always found these ones a little freaky because of how far they could jump. \\ Jian’s friends would often poke them with twigs, sending them bouncing off the trees, like mini red fireballs. \\ In the summertime, spiders the size of baseballs cast their webs in between the trees — Jian and his friends would dare each other to hit the webs down with rocks. \\ At the lower part of the mountain, bordering the music department buildings, there was a patch of tree-covered grass that was persistently soft and muddy. \\ One spring, an infestation of small black caterpillars took over every cubic centimeter of that patch of grass—they hung in dense clumps on their silk threads, making it impossible to walk through without becoming utterly intertwined. \\ Jian remembers his friend Wang Liang grabbing a fist full of caterpillars and seeing them squirming around in his hand. \\ He had to avoid the mountain for a short while because his mother was tired of him coming home covered in the caterpillars and their larvae. ";

let sentences = txt.split("\\");
// window.onload = function() {
//     let words = RiTa.tokenize("The elephant took a bite!");
//     // let word =  RiTa.alliterations("shine");
//     // console.log(word, {limit: 10})
//     //document.getElementById("content").innerHTML = all;
//     let randomword = RiTa.randomWord();
//    // document.getElementById("content").innerHTML = randomword;
//     let rhyme = RiTa.soundsLike("shine");
//     console.log(rhyme, {numSyllables: 1 })
//   };

document.addEventListener("click", playSound);

function playSound(){
    console.log("clicked")
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C2", "16n");

    const noise = new Tone.Noise("brown").start();
    // make an autofilter to shape the noise
    const autoFilter = new Tone.AutoFilter({
      frequency: "0n",
      baseFrequency: 20,
      octaves: 2,
      volume: -9,
      
    }).toDestination().start();
    // connect the noise
    noise.connect(autoFilter);
    // start the autofilter LFO
    autoFilter.start();
   
}
window.onload = function(){
    // txt = RiTa.untokenize(words);
    // document.getElementById("text").innerHTML = txt;
    setTimeout(nextWord,1500);

}
let counter = 0;
text.innerHTML = sentences[0];
document.addEventListener("click", displayText);

function displayText(){
    text.innerHTML = sentences[counter];
    counter++;
    if(counter == sentences.length-1){
        counter = 0;
    }
   // setTimeout(nextWord,2000);
    
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

async function nextWord() {
  let words = RiTa.tokenize(sentences[counter]);
  //let r = Math.floor(Math.random() * words.length);
  let r = randomIntFromInterval(0, words.length);
  console.log("r: ", r);
  console.log(words[r]);

 
  for (let i = r; i < words.length; i++) {
    //loop from random spot
    let idx = i % words.length;
    let word = words[idx].toLowerCase();
    if (word.length < 3) continue;

    //find related words
    let pos = RiTa.tagger.allTags(word)[0];
    let rhymes = await RiTa.rhymes(word, { pos });
    let sounds =  await RiTa.soundsLike(word, { pos });
    let spells =  await RiTa.spellsLike(word, { pos });
    let similars = [...rhymes, ...sounds, ...spells];

    // only words with 2 or more similars
    if (similars.length < 2) {
      console.log("No sims for " + word);
      continue;
    }

    // pick a random similar
    let next = RiTa.random(similars);
    if (next.includes(word) || word.includes(next)) {
        continue;                     // skip substrings
      }
      
      if (/[A-Z]/.test(words[idx][0])) {
        next = RiTa.capitalize(next); // keep capitals
      }
  
      console.log("replace(" + idx + "): " + word + " -> " + next);
  
      words[idx] = next;             // do replacement
     mycolor = "red";
      break;
  }
  txt = RiTa.untokenize(words);
  console.log(txt)
  document.getElementById("text").innerHTML = txt;
//   
   setTimeout(nextWord,2000);
   const synth = new Tone.Synth().toDestination();
   let notes = ["E2", "C2", "D2", "G1"]
  // synth.triggerAttackRelease("E2", "16n");
   synth.triggerAttackRelease(notes[randomIntFromInterval(0, notes.length-1)], "16n") 
  // document.getElementById("text").style.color = mycolor;
}
