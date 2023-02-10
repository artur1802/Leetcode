function miniMaxSum(arr) {
    // Write your code here
    const newarr= arr.sort((a,b)=>a-b);
    let minsum=0;
    let maxsum=0;
    for(let i=0; i<newarr.length-1;i++){
    minsum+=newarr[i];
        
    }
    
 for(let i=1; i<newarr.length;i++){
    maxsum+=newarr[i];
        
    }
    //print
    console.log(minsum+" "+maxsum)
}