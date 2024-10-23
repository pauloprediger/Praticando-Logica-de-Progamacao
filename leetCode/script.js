const pivoNumber = (n) => {
    if (n === 1) {
        return n;
    } else {
       
        for (i = 1; i <= n; i++) {
            const soma1 = 0;
            const soma2 = 0;

            for (j = 1; j <= i; j++) {
                soma1 += j;
                
            }
            for (k = i + 1; k <= n; k++) {
                soma2 += k;
            }
            if (soma1 === soma2) {
                console.log(n)
            }
        }
    }
}

pivoNumber(1)
pivoNumber(2)
pivoNumber(3)
pivoNumber(4)
pivoNumber(5)
pivoNumber(6)
pivoNumber(7)