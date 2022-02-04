// //Задание 3
// let move = [1,0,0,0,1,0,0,0,0,0]
// let damage = 0
// for(i=0;i<move.length;i++){
//     console.log("Танк приехал на позицию",i + 1)
//     if (move[i] == 0){
//         console.log("Поле оказалось чистым")
//     } else {
//         console.log("Танк попал на мину")
//         damage+=1
//     }
//     if(damage==2){
//         console.log("Танк уничтожен")
//         break
//     }
// }

// Задание 4

// let arrayday = ["Понедельник",'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']
// let arraymounth = Array.from({length:31},(v,i) => i+1)
// j = 1
// for(i=1;i != arraymounth.length + 1;i++){
    
//     console.log(`${i} января, ${arrayday[j]}`)
//     j+=1
//     if (j==7){
//         j = 0
//     }
// }

// Задание 4 с остатком индекса

// let arrayday = ["Понедельник",'Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']

// for(i=1;i!=32;i++){
//     console.log(`${i} января, ${arrayday[i%arrayday.length]}`)

// }
