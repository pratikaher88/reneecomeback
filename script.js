function clock() {
    const fullDate = new Date();

    var targetdate = new Date("July 7, 2019 15:37:25");

    var deadline = targetdate.getTime();
    var datenow = new Date();

    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();


    var now = new Date().getTime();
    var t = deadline - now;

    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((t % (1000 * 60)) / 1000); 

    var thoughtsarray = ['x','y','z'];


    if (hours<10)
    {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (days < 10) {
        days = "0" + days;
    }

    document.getElementById('days').innerHTML = days;
    document.getElementById('hour').innerHTML = ": " + hours;
    document.getElementById('minute').innerHTML = ": "+ mins;
    document.getElementById('second').innerHTML = ": "+secs;
    
    // if (targetdate < datenow){
    //     console.log("Renee is back");
    //     window.location.href = 'https://pratikaher88.github.io/reneecomeback/reneecameback.html';
    // }

    console.log(targetdate);
    console.log(datenow);

}

setInterval(clock, 100);



function test() {

    var thoughtsarray = [
    "Got a knac'k for slaying one day & looking homeless the next.Balance, baby",
    "Fashion sense ? Haha.Call it clothes that still fit",
    "A'ight , take me out of the oven , I am done",
    "But don't we all lose our minds in the city of roses?",
    "Need a mental receipt to know this moment I owe",
    "To the moon and never back",
    "Pooh bani Paarvati?",
    "Oh, please.",
    "Ft.Bathroom slippers",
    "To quote Hamlet, Act III, Scene iii, Line 87 - no",
    "Don't kill em' with kindness.Kill em' with blindness. Act like you don't even see those mfs.",
    "Don't like me? Give me two minutes to recover. *Dramatic pause*",
    "I take super hot showers to practice burning in hell.",
    "Remember when I said I'd wake up fit one day? Yeah, today's not that day.",
    "Going to college bc I aspire to have a rangerover to go to yoga w em' pajamas on @5 & have margs w the girls @7.",
    "Just cracked my Halo.",
    "You good ? You poppin’",
    "I’d steal snacks",
    "My outfit is inspired by the fact that I woke up 3 hours earlier in the morning.",
    "काफी क्यूट",
    "Like you've never seen a Princess be a Bad Bitch?",
    "I haven't posted in a while but I'm still very cute, just to keep you updated.",
    "But I wear pajamas 24567 times a week.",
    "XOXO",
    "Your loss",
    "I could conquer the world barefoot, but I look too cute in heels.",
    "Don't keep asking me what I'm doing.You know I'm out here being cute!",
    "Making You Stop & Stare.",
    "Oh Please! :* Your Man is a Fan.",
    "If I'm going to be a mess, I might as well be a hot one. Now if you'll excuse me, please",
    "Also, don't underestimate the power of coffee",
    "Untitled//",
    "There is a future version of me who is proud that I am strong enough, TO STAY PUT IN A SAREE!",
    "Burn that bridge.",
    "Salty hair",
    "I’m Aware That I'm A Rare Breed Of Woman",
    "Some Wild Thing.",
    "I Need Vitamin Sea",
    "It's true.Even beautiful things have, Dents & Scratches too.",
    "But acts like summer",
    "Some kind of blues"

];

    document.getElementById('t1').innerHTML = '" '+thoughtsarray[Math.round(40 * Math.random())] + ' "';

    console.log(thoughtsarray[Math.round(40 * Math.random())]);
}

window.onload = test;