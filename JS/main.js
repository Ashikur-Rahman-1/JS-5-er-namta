/**
 * to do : 5 er namta
 */

let num = 5;
let inputNum = +num;

for (let i = 1; i <= 20; i++) {
 console.log(`${inputNum} X ${i} = ${inputNum*i}`);
 let summary = inputNum*i;
 if(summary<=20) {
    console.log("tomar biyer boyosh hoynai");
}else if(summary>20 && summary<=35) {
    console.log("biyer boyosh hoeche");
} else if(summary>35 && summary<=50) {
    console.log("biyer boyosh par hoe jacche");
}else{
    console.log("biyer boyosh r nei");
}
}


