var olympics=[
    {country:"usa",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"austrailia",gold:17,silver:6,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},
];

// for (let country of olympics){
//     console.log(country.country);
// }
// olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name));


// var max_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation1:nation2);
// console.log(max_gold);

// var max_medal=olympics.reduce((nation1,nation2)=>nation1["total"]>nation2["total"]?nation1:nation2);
// console.log(max_medal);

// var max_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation1:nation2);
// console.log(max_gold);

// var sor_by_medals=olympics.sort((nation1,nation2)=>nation2.total - nation1.total);
// console.log(sor_by_medals);

// var silver10=olympics.filter((nation)=>nation.silver>10);
// console.log(silver10);

// var gold0=olympics.filter((nation)=>nation.gold==0);
// console.log(gold0);

// var gold20=olympics.filter((nation)=>nation.gold>20);
// console.log(gold20);

var pak=olympics.some((nation)=>nation.country=="pakistan");
console.log(pak);


