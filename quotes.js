const quotes=[
    {
        quote: "누구나 중대한 결정을 해야 할 때가 있어. 그땐 자신의 믿음을 따라야 해.",
    },
    {
        quote: "아무것도 안 하는 것보단 그게 나을 수도 있어",
    },
    {
        quote: "언제라도, 좌절 후에는 행복이. 비가 온 후 맑은 날이 오는 것처럼.",
    },
    {
        quote: "최선을 다했다는 게 중요하지",
    },
    {
        quote: "넌 아주 사랑스러운 사람이며, 네 인생은 사랑으로 가득 차리라",
    },
    {
        quote:"이를 악물고 해내는 거야",
    },
    {
        quote:"생각해 추억은 그대로 있는 거야. 행복한 기억이야.",
    },
    {
        quote:"인생이라는 책 안에서 해답은 뒤에 있지 않아",
    },
    {
        quote:"계속 위를 올려다봐, 그게 인생의 비밀이야",
    },
    {
        quote:"어제로부터 배우고, 오늘을 위해 살고, 내일을 바라보고 오늘 오후는 쉬어",
    },
];

const quote = document.querySelector("#quote span:first-child");

//array 안에 있는 element에 어떻게 접근하냐?
//함수를 만들어야함..

console.log(quotes[0]); //0부터 10사이의 숫자들에 접근
//Math.random()*10 //0에서 10사이의 숫자들을 얻을 수  있따.
//console.log(quotes[Math.floor(Math.random()*10)]); //array가 몇갠지 맨날 세기 귀찮으니까 배열의 길이를 알아내기..
//console.log(quotes[Math.floor(Math.random()*quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;