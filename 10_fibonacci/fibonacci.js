const fibonacci = function(num) {
    var fibNum = Number(num);    


    // Based on the formula provided on wikipeida and modified to stop at variable num
    // i starts at 2 otherwise the loop for the fibonacci formula would not start because of i > 1
    if (fibNum >= 0 ) {
        let fib = [];
        fib[0] = 0; 
        fib[1] = 1;
        
        for (let i = 2; i > 1 && i <= num; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib[num];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
