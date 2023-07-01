var topKFrequent = function(nums, k) {
    const map = {};
  
    for (let num of nums) {
      if (!map[num]) {
        map[num] = 0;
      }
      map[num] = map[num] + 1;
    }
  
    return Object.keys(map)
      .sort((a, b) => map[b] - map[a])
      .slice(0, k);
  };