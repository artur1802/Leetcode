var containsDuplicate = function(nums) {
    

for(let i=0; i<nums.length; i++){
for(let j=0; i<nums.length; i++){
if(nums[i]===nums[j] &&  i!=j){

    return true;
}

}
}


return false;
};