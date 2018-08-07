// Write our own promise RESOLVE AND REJECT
function test(){
    delay(1000)
    .then(() => console.log('hello'))
    .catch(err => console.error(err))
}
function delay(time){
    return new Promise((resolve,rejects) => {
        if(isNaN(time)){
            rejects(new Error('delay required  a valid number'))
        }
        setTimeout(resolve, time);
    });
}

test();
