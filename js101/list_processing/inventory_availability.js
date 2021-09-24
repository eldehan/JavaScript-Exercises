let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];
// probably do a transactions filter where we search for if obj['id'] === itemID

// function transactionsFor(itemID, transactions) {
//   let itemLog = transactions.filter(inventory => inventory.id === itemID);
//   let stockQuantity = 0;
//   itemLog.forEach(record => {
//     if (record.movement === 'in') {
//       stockQuantity += record.quantity;
//     } else {
//       stockQuantity -= record.quantity;
//     }
//   });
//   return stockQuantity > 0;
// }

function transactionsFor(itemID, transactions) {
  return transactions.filter(inventory => inventory.id === itemID);
}

function isItemAvailable(item, transactions) {
  let stockQuantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === 'in') {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    }, 0);
    return stockQuantity > 0;
}

// console.log(transactionsFor(101, transactions));
// console.log(transactionsFor(103, transactions));
// console.log(transactionsFor(105, transactions));

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));