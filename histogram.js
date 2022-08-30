function histogram(input) {
    let numCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numCount; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            p1++;
        } else if (num >= 200 && num < 400) {
            p2++;
        } else if (num >= 400 && num < 600) {
            p3++;
        } else if (num >= 600 && num < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    let percp1 = p1 / numCount * 100;
    let percp2 = p2 / numCount * 100;
    let percp3 = p3 / numCount * 100;
    let percp4 = p4 / numCount * 100;
    let percp5 = p5 / numCount * 100;

    console.log(`${percp1.toFixed(2)}%`);
    console.log(`${percp2.toFixed(2)}%`);
    console.log(`${percp3.toFixed(2)}%`);
    console.log(`${percp4.toFixed(2)}%`);
    console.log(`${percp5.toFixed(2)}%`);
}
histogram(["14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"])



