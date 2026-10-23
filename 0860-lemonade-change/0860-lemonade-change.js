/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five=0;
    let ten=0;

    for(let i of bills){
        if(i===5){
            five++;
        }
        else if(i===10){
            if(five===0){
                return false;
            }
            five--;
            ten++;
        }
        else{
            if(ten>0 && five>0){
                five--;
                ten--;
            }
            else if(five>=3){
                five-=3;
            }
            else{
                return false;
            }
        }
    }
    return true;
};
