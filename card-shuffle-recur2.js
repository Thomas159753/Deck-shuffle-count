function recursion(array,deck, count = 0) {
    //split the deck
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    count += 1;
    //merge the 2 halfs
    let mergedArray = merge(left, right);

    //check and make a recursion
    if (JSON.stringify(mergedArray) === JSON.stringify(deck)) {
        return {
            length: array.length,
            count
        };
    } else {
        return recursion(mergedArray,deck, count);
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

function create (limit){
    let deck = []

    for (let index = 1; deck.length < limit; index++) {
        deck.push(`${index}`);
        console.log(recursion(deck,deck));
    }
    return deck
}
create(100);