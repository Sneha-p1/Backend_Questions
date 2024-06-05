function flipCoin(callback) {
    const value = Math.random();
    if(value>0.5)
    {
        callback("Head");
    }
    else{
        callback("Tail")
    }

}
flipCoin(result=>{
    console.log("The result is",result);
});
