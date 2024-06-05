
function async_call(val,asycal){
   
    setTimeout(asycal,2000)

}
function f1(){
    let x=5;
    let y=10;
    let p=async(x,y);
    console.log(p)
}
function async(a,b){
    return a*b;

}
async_call("",f1);

function job() {

    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})
;

