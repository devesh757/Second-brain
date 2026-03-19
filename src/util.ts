export function random(len:number){
    let options = "qwertyuiopasdfghjklzxcvbnm12345678";
   let length = options.length;


   let ans = "";

   for(let i = 0;i<options.length;i++){
      ans += options[Math.floor((Math.random() * length))]
   }
   return ans;
}