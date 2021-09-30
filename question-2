function getLargestNum(nums) {
        let sortedNum = nums.sort(function (a,b){
            return (b + '' + a) - (a + '' + b);
        })
        sortedNum = sortedNum.join('');
  return sortedNum;
};
var nums= [3, 30, 34, 5, 9];
console.log(getLargestNum(nums));
