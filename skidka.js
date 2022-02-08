let promokod = 'ДАРИМ300'
let korzina = ['apple','yabloko']
let korzinasum = [100,2000]
let sum = 0

function calculate(promokod,korzina,korzinasum,sum){
    for(let num of korzinasum){
        sum = sum+num
    }
    console.log(sum)
    if(promokod == 'ДАРИМ300'){
        sum = sum - 300
        if(sum<0){
            sum = 0
        }
    }
    console.log(sum)
    if(korzina.length >= 10){
        sum = sum - (sum*0.05)
    }
    console.log(sum)
    if(sum >50000){
        sum = sum - (sum * 0.2)
    }
    console.log(sum)
    if(promokod == 'СКИДКА15' && sum >=20000){
        sum = sum - (sum *0.15)
    }
    console.log(sum)
}
calculate(promokod,korzina,korzinasum,sum)
