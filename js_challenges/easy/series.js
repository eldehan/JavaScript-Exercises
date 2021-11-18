let Series = (() => {
  validateSlices = (sliceLength, numberSequenceLength) => {
    if (sliceLength > numberSequenceLength) throw new Error("Slice cannot be longer than number sequence itself.");
  }
  
  return class Series {
    constructor(numberSequence) {
      this.numberSequence = numberSequence;
    }
  
    slices(sliceLength) {
      validateSlices(sliceLength, this.numberSequence.length);
  
      let series = [];
      for (let sliceStart = 0; sliceStart <= this.numberSequence.length - sliceLength; sliceStart += 1) {      
  
        let instanceOfSeries = [];
        for (let index = sliceStart; index < sliceStart + sliceLength; index += 1) {
          instanceOfSeries.push(Number(this.numberSequence[index]));
        }
  
        series.push(instanceOfSeries);
      }
  
      return series;
    }
  }
})();

module.exports = Series;