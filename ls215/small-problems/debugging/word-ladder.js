let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// need to insert a semicolon on line 1; automatic semicolon insertion would otherwise result in the first 3 lines being read as: let ladder = ''['head', ... ].forEach()