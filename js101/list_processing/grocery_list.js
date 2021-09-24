function buyFruit(list) {
  let results = [];
  list.forEach(subArr => {
    let [item, number] = subArr;
    for (let times = 0; times < number; times += 1) {
      results.push(item);
    }
  });
  return results;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));