let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// semi-colon needs to be inserted on line 1, since automatic semicolon insertion
// does not insert one there.