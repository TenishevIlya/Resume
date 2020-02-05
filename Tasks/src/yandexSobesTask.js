let array = [15,19,18,4,7,12,6,90,5];

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

let collapse = (arr) => {
    arr.sort(compareNumeric);
    let i = 0;
    let currentStartIndex = 0;
    let countSequences = 0;
    let currentEndEl = 0;
    let currentStartEl = 0;
    let currentStr = "";
    let finalArray = [];
    for (;;) {
        if (arr.length === 0) {
            break;
        }
        if (arr[i+1] - arr[i] === 1) {
            i++;
            countSequences++;
        }
        else {
            if (countSequences > 1) {
                currentStartEl = String(arr[currentStartIndex]);
                currentEndEl = String(arr[i]);
                arr.splice(currentStartIndex,i+1);
                if (currentStartEl === currentEndEl) {
                    currentStr = currentStartEl;
                }
                else {
                    currentStr = currentStartEl + "-" + currentEndEl;
                }
                finalArray.push(currentStr);
                i = 0;
            }
            else {
                currentStr = currentStartEl;
                finalArray.push(currentStr);
                i = 0;    
            }
        }
        if ((i === arr.length) && (countSequences === 0)) {
            break;
        }
    }
    console.log(finalArray.join());
}

collapse(array);