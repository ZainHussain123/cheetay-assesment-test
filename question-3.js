function longestPalin(str){
  let rerverseStr =str.split('').reverse().join(''); 
  let m=[0,0]; 
  for(let p=0;p<str.length;p++){   
   for(let l=str.length-p; l>m[1];l--)
    if (rerverseStr.indexOf(str.substr(p,l))>-1) m=[p,l];
  } 
  return str.substr(...m)
}
console.log(longestPalin("aaaabbaa"))
