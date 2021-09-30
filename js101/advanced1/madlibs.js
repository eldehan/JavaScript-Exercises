function madlibs(template) {
  let replacements = {
    adjective: ['springy', 'smart', 'whimsical', 'dim-witted', 'ravenous', 'goofy'],
    noun: ['fox', 'robot', 'kitten', 'asteroid', 'apple'],
    verb: ['jumps', 'falls', 'slurps', 'bites'],
    adverb: ['angrily', 'hungrily', 'sleepily', 'hilariously'],
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, "");
    let index = Math.floor(Math.random() * replacements[key].length);
    return replacements[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

console.log(madlibs('The %{adjective} %{noun} %{verb} %{adverb}.'));