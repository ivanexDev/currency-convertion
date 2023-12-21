export const calculate = (origin : number, exchange: number)=>{
    if(Number(origin) < 0 ||isNaN(Number(origin))){
        return 0
    }
    return origin * exchange
  }