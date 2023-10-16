var qoute = [
    {
        qoute: "Do not take life too seriously. You will not get out alive.",
        Auther: "--Elbert Hubbard"
    },

    {
        qoute: "'The best revenge is massive success.'",
        Auther: "--Frank Sinatra"
    },
    {
        qoute: "'You miss 100% of the shots you don't take.'",
        Auther: "--Wayne Gretzy"
    },
    {
        qoute: "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe'",
        Auther: "-- Albert Einstein"
    },

]




function showQoutes() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}