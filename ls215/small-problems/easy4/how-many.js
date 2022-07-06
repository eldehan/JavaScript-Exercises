const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

function countOccurrences(list) {
  let count = {};

  list.forEach(item => {
    count[item] = count[item] ? count[item] + 1 : 1;
  });

  let countArray = Object.entries(count);

  countArray.forEach(item => {
    console.log(`${item[0]} => ${item[1]}`)
  });
}