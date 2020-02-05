function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }


function dblLinear(n) {
    let array = [];
    array[0] = 1;
    for (let i = 0; i < n; i++) {
        let current = array[i];
        let first = 2*current+1;
        let second = 3*current+1;
        array.push(first);
        array.push(second);
        array.sort(compareNumeric);
    }
    return array[n+1];
}

console.log(dblLinear(10));