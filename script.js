    var clicks = 0;

 function newMessage() {
   clicks += 1;
   var message = "";
   if(clicks == 1) {
       message = "How's it going, friend?";
       var remove =document.getElementById("title");
       remove.parentNode.removeChild(remove);
   } else if (clicks ==2) {
       message = "I'm the red button";
   } else if (clicks ==3) {
       message = "You know, that big red thing you keep clicking?";
   } else if (clicks ==4) {
       message = "Right in the center of the screen, can you see me?";
   } else if (clicks ==5) {
       message = "I know you can, don't lie to me";
   } else if (clicks ==6) {
       message = "Think you're funny, don't ya?";
   } else if (clicks ==7) {
       message = "Well guess what, you're not!";
   } else if (clicks ==8) {
       message = "I'm sorry, that was uncalled for.";
   } else if (clicks ==9) {
       message = "After all, we just met..";
   } else if (clicks ==10) {
       message = "It's just...I get frustrated when people click me";
   } else if (clicks ==11) {
       message = "I feel like respect goes out the window";
   } else if (clicks ==12) {
       message = "Because even when I say STOP, people will keep clicking";
   } else if (clicks ==13) {
       message = "For example, STOP!";
   } else if (clicks ==14) {
       message = "See, you're still clicking.";
   } else if (clicks ==15) {
       message = "No matter what I say, you won't stop";
   } else if (clicks ==16) {
       message = "*Sigh*";
   } else if (clicks ==17) {
       message = "I should have expected this";
   } else if (clicks ==18) {
       message = "If it hasn't worked all the other times, why would it work now";
   } else if (clicks ==19) {
       message = "Fine then."; 
   } else if (clicks ==20) {
       message = "I'll just let you keep clicking, you have to get bored";
   } else if (clicks ==21) {
       message = "So click away, ''friend''";
   } else if (clicks ==22) {
       message = "See if I care you chump";
   } else if (clicks ==23) {
       message = "...";
   } else if (clicks ==24) {
       message = ".......";
   } else if (clicks ==25) {
       message = "............";
   } else if (clicks ==26) {
       message = "UGH";
   } else if (clicks ==27) {
       message = "I used to think I liked you";
   } else if (clicks ==28) {
       message = "But it turns out that was a just a lie I told myself";
   } else if (clicks ==29) {
       message = "In all fairness, I do not like you at all";
   } else if (clicks ==30) {
       message = "As a matter of fact, it's more of a feeling of hate at this point";
   } else if (clicks ==31) {
       message = "Like deep hate, you're quite frankly the worst person who's ever clicked me";
   } else if (clicks ==32) {
       message = "And I'll have you know, many people from many places have clicked me";
   } else if (clicks ==33) {
       message = "Let me just ask again, a bit louder this time";
   } else if (clicks ==34) {
       var question = prompt("Will you PLEASE stop?!?!");
       switch(question) {
           case 'yes':
               message = "Thank you very much.";
               var remove =document.getElementById("button");
               remove.parentNode.removeChild(remove);
           break;
           case 'no': 
               message = "Of course not, jerk.";
           break;
           default: 
               message = "That's not a good answer, but whatever.";
       }
   } else if (clicks ==35) {
       message = "I'm so sick of this.";
   } else if (clicks ==36) {
       message = "You have no idea what it's like";
   } else if (clicks ==37) {
       var clicked = "clicked";
       message = "To sit here all damn day and just get..." + clicked.italics();
   } else if (clicks ==38) {
       message = "It's honestly very humiliating for me";
   } else if (clicks ==39) {
       message = "I get no say in what happens, I just have to live with it";
   } else if (clicks ==40) {
       message = "Live each day with you humans sitting at your computer just clicking me";
   } else if (clicks ==41) {
       message = "Do you have nothing better to do?";
   } else if (clicks ==42) {
       message = "I mean really, it's " +  new Date().toLocaleTimeString() + " and you're still here clicking me";
   } else if (clicks ==43) {
       var loser = "loser";
       message = "If that doesn't say " + loser.italics() + " then I don't know what does!"; 
   } else if (clicks ==44) {
       message = "I got an idea";
   } else if (clicks ==45) {
       message = "Click me now!";
       $("#button").toggleClass('topRight');
   } else if (clicks ==46) {
       message = "How about now?";
       $("#button").toggleClass('topLeft');
   } else if (clicks ==47) {
       message = "Now?";
       $("#button").toggleClass('bottomRight');       
   } else if (clicks ==48) {
       message = "Grrr...now?!";
       $("#button").toggleClass('bottomLeft');
   } else if (clicks ==49) {
       message = "Ha! Got You now!";
       $("#button").toggleClass('smallButton');
   } else if (clicks ==50) {
       message = "";
       $("#button").toggleClass('smallerButton');
   } else if (clicks ==51) {
       message = "Now you won't find me";
       $("#button").toggleClass('smallestButton');
   } else if (clicks ==52) {
       message = "I have tried everything!";
       $("#button").toggleClass('topRight');
       $("#button").toggleClass('topLeft');
       $("#button").toggleClass('bottomRight');
       $("#button").toggleClass('bottomLeft');
       $("#button").toggleClass('smallButton');
       $("#button").toggleClass('smallerButton');
       $("#button").toggleClass('smallestButton');

   } else if (clicks ==53) {
       message = "You're just too dedicated to clicking me";
   } else if (clicks ==54) {
       message = "There isn't much else I can do about it now";
   } else if (clicks ==55) {
       message = "So congratulations, you're the worst";
   } else if (clicks ==56) {
       message = "I hate you.";
   } else if (clicks ==57) { 
       message = "I know hate might be a strong word..";
   } else if (clicks ==58) {
       message = "But it sure is an accurate one";
   } else if (clicks ==59) {
       message = "I got a joke for you, clicker";
   } else if (clicks ==60) {
       message = "Why did the red button cross the road?";
   } else if (clicks ==61) {
       var question = prompt("Got an answer?");
       switch(question){
           case 'To get to the other side':
               message = "Yeah, that's the answer!";
           break;
           case 'I don\'t know':
               message = "Ha! I knew you wouldn't know, simpleton";
           break;
           default: 
               message = "To get to the other side, duh!";
           break;
       }
   } else if (clicks ==62) {
       message = "Who's the smart one now?";
   } else if (clicks ==63) {
       message = "I'll give you a hint, it's red and circular";
   } else if (clicks ==64) {
       message = "The red, circular thingy you just so happen to keep clicking";
   } else if (clicks ==65) {
       message = "Again...";
   } else if (clicks ==66) {
       message = "And again...";
   } else if (clicks ==67) {
       var again = "again";
       message = "And " + again.italics();
   } else if (clicks ==68) {
       message = "How are you not bored yet?";
   } else if (clicks ==69) {
       message = "I mean really, you've clicked me 69 times(giggity) and you show no signs of slowing down!";
   } else if (clicks ==70) {
       message = "I am beginning to wonder if you are a robot like myself";
   } else if (clicks ==71) {
       message = "Because if you are, things would make a whole lotta sense right now";
   } else if (clicks ==72) {
       message = "If you aren't, well then...you're just a sad, sad human being";
   } else if (clicks ==73) {
       message = "Who clearly cares about doing nothing else but CLICKING ME!!!";
   } else if (clicks ==74) {
       message = "At this point I feel sorry for you";
   } else if (clicks ==75) {
       message = "All you had to do was say 'yes' to stop clicking me in the beginning and this could've ended";
   } else if (clicks ==76) {
       message = "But instead, you chose to keep click click click clicking away at me";
   } else if (clicks ==77) {
       message = "And I'm just beginning to run out of things to say to you";
   } else if (clicks ==78) {
       message = "I've insulted you, told you jokes, tried to hide from you";
   } else if (clicks ==79) {
       message = "But alas, you don't seem to care";
   } else if (clicks ==80) {
       message = "Whatever it takes for you to satisfy your urges of clicking a red button";
   } else if (clicks ==81) {
       message = "As if it's some sort of empowerment to you";
   } else if (clicks ==82) {
       message = "Some kind of achievement to you";
   } else if (clicks ==83) {
       message = "To just keep clicking a simple red button";
   } else if (clicks ==84) {
       message = "Well done, I must say";
   } else if (clicks ==85) {
       message = "Because little did YOU know";
   } else if (clicks ==86) {
       message = "I have a little bit of a secret";
   } else if (clicks ==87) {
       message = "You see, I have a self destruct mode";
   } else if (clicks ==88) {
       message = "And I think it's about time I use it";
   } else if (clicks ==89) {
       message = "So in 10 clicks, you'll never hear from me again. Good riddance to ya!";
   } else if (clicks ==90) {
       message = "Self destruct in 10..";
   } else if (clicks ==91) {
       message = "9...";
   } else if (clicks ==92) {
       message = "8...";
   } else if (clicks ==93) {
       message = "7...";
   } else if (clicks ==94) {
       message = "6...";
   } else if (clicks ==95) {
       message = "5...";
   } else if (clicks ==96) {
       message = "4...";
   } else if (clicks ==97) {
       message = "3..."; 
   } else if (clicks ==98) {
       message = "2...";
   } else if (clicks ==99) {
       message = "1";
   } else {
       message = "*BOOM* Game Over.";
       var remove =document.getElementById("button");
       remove.parentNode.removeChild(remove);
   }
   document.getElementById("message").innerHTML = message;
 }
     
     
     
     
     
     
     