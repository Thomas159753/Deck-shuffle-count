function recursion(array, count = 0) {
    //split the deck
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    count += 1;
    //merge the 2 halfs
    let mergedArray = merge(left, right);
    //display the steps
    console.log(count)
    console.log(mergedArray);
    //check and make a recursion
    if (JSON.stringify(mergedArray) === JSON.stringify(deck)) {
        return count;
    } else {
        return recursion(mergedArray, count);
    }
}

function merge(left, right) {

    let arraySort = [];
    while (left.length && right.length) {
        arraySort.push(left.shift());
        arraySort.push(right.shift());
    }
    return [...arraySort, ...left, ...right];
}

// let deck = [
// 'As', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'Js', 'Qs', 'Ks',
// 'Ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'Jd', 'Qd', 'Kd',
// 'Ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'Jc', 'Qc', 'Kc',
// 'Ah', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'Jh', 'Qh', 'Kh',
// ]

let deck = [
'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
'14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
'27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
'40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52',
]

recursion(deck);