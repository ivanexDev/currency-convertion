/**
 * Function that calculates the exchange from one base currency to a target currency. 
 * If the value is less than 0 or NaN, it returns 0.
 * 
 * @param origin The amount in the original currency that you want to exchange for the second currency.
 * @param exchange 
 * @returns The new amount in the target currency.
 */

export const calculate = (origin : number, exchange: number)=>{
    if(Number(origin) < 0 ||isNaN(Number(origin))){
        return 0
    }
    return origin * exchange
  }