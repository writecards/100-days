let str1 = "The \\ Japanese \\ spider \\crab \\has \\the \\greatest \\leg \\span \\of \\any \\known \\arthropod, \\reaching\\ up\\ to\\ 3.7 m \\(12.1 ft) \\from \\claw\\ to\\claw";
let sentences1 = str1.split("\\");
let textOnScreen1 = document.getElementById("text1");

let str2 = "The \\ body \\ may\\ grow\\ to \\40 cm\\(16 in) \\in\\ carapace \\width\\ and \\the\\ whole \\crab\\ can \\weigh \\up \\to\\ 19\\ kg \\(42 lb)\\—second\\ in \\mass\\ only \\to\\ the \\American\\ lobster\\ among\\ all \\living \\arthropod\\ species. ";
let sentences2 = str2.split("\\");
let textOnScreen2 = document.getElementById("text2");

let str3 = "The \\ males \\have \\the \\longer\\ chelipeds; \\ females \\have \\much\\ shorter\\ chelipeds, \\which\\ are \\shorter \\than \\the \\following\\ pair \\of legs.";
let sentences3 = str3.split("\\");
let textOnScreen3 = document.getElementById("text3");

let str4 = "The  \\ Japanese  \\Spider \\ Crab \\ has \\ an  \\armored  \\exoskeleton  \\that \\ helps  \\protect  \\it \\ from \\ larger  \\predators  \\such \\ as  \\octopodes,  \\but  \\also \\ uses \\ camouflage. ";
let sentences4 = str4.split("\\");
let textOnScreen4 = document.getElementById("text4");

let str5 = "The \\ crab's \\bumpy \\carapace \\blends\\ into \\the \\rocky\\ ocean \\floor.\\ To \\further\\ the\\ deception, a\\ spider \\crab \\adorns \\its \\shell\\ with\\ sponges\\ and \\other\\ animals.";
let sentences5 = str5.split("\\");
let textOnScreen5 = document.getElementById("text5");

let str6 = "The \\way \\in\\ which\\ a \\spider \\crab\\ is \\able \\to \\pick\\ up \\and \\cover \\itself\\ with \\such\\ organisms \\is\\ by \\following \\a \\specific \\routine\\ behavior. \\Upon\\ picking \\up\\ the \\object\\ with\\ the\\ crab's \\slender\\ chelipeds,\\ the \\chelae\\ are \\used \\to \\twist\\ and\\ tear\\ off\\ the\\ organism, \\such\\ as\\ a \\worm\\ tube\\or \\sponge,\\ from\\ the \\substrate\\ on \\which\\ it \\currently\\ resides";
let sentences6 = str6.split("\\");
let textOnScreen6 = document.getElementById("text6");

document.addEventListener("click", displayText);
textOnScreen1.innerHTML = sentences1[0];

document.addEventListener("click", playSound);
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

window.onload = function(){
    // txt = RiTa.untokenize(words);
    // document.getElementById("text").innerHTML = txt;
    setTimeout(displayText,300);

}

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



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
  function displayText(){
     console.log(counter1);
      counter1++;
      counter2++;
      counter3++;
      counter4++;
      counter5++;
      counter6++;
      textOnScreen1.innerHTML = sentences1[counter1];
      textOnScreen2.innerHTML = sentences2[counter2];
      textOnScreen3.innerHTML = sentences3[counter3];
      textOnScreen4.innerHTML = sentences4[counter4];
      textOnScreen5.innerHTML = sentences5[counter5];
      textOnScreen6.innerHTML = sentences6[counter6];
   
   
  
      if(counter1 == sentences1.length-1){
          counter1 = 0;
      }
      
      if(counter2 == sentences2.length-1){
        counter2 = 0;
    }
    if(counter3 == sentences3.length-1){
        counter3 = 0;
    }
    if(counter4 == sentences4.length-1){
        counter4 = 0;
    }
    if(counter5 == sentences5.length-1){
        counter5 = 0;
    }
    if(counter6 == sentences6.length-1){
        counter6 = 0;
    }
    
     
  
    const synth = new Tone.Synth().toDestination();
    let notes = ["E2", "C2", "D2", "G1"]
//    synth.triggerAttackRelease("E2", "16n");
    synth.triggerAttackRelease(notes[randomIntFromInterval(0, notes.length-1)], "16n") 
  
    setTimeout(displayText,300);
  
    
  }