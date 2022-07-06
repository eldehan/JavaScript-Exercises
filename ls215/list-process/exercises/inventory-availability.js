function isItemAvailable(itemID, transactionList) {
  let transactions = transactionsFor(itemID, transactionList);

  return calculateQuantity(transactions) > 0;
}

function transactionsFor(itemID, transactionsList) {
  return transactionsList.filter(item => item.id === itemID);
}

function calculateQuantity(transactions) {
  let count = 0;
  transactions.forEach(item => {
    if (item.movement === 'in') {
      count += item.quantity;
    } else {
      count -= item.quantity;
    }
  });

  return count;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true