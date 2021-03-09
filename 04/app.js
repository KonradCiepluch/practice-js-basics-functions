function runTimer() {
    let counter = 0;
    const runTime = setInterval(()=> {
        counter++;
        const time = (new Date()).toLocaleTimeString();
        console.log(time)
        if(counter == 5) clearInterval(runTime);
    }, 5000);
}

runTimer();