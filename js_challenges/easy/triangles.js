/*

Problem:

- Each side length must be > 0
- Sum of any 2 sides must be greater than length of 3rd side
- Equilateral triangle has 3 sides equal in length
- Isoceles triangle has 2 equal sides
- Scalene triangle has sides of all different lengths

*/



class Triangle {
  constructor(side1, side2, side3) {
    let sidesArray = [side1, side2, side3].sort((a, b) => a - b);
    if (this.isInvalid(sidesArray)) throw new Error("Invalid triangle lengths.");

    this.side1 = sidesArray[0];
    this.side2 = sidesArray[1];
    this.side3 = sidesArray[2];
  }

  isInvalid(sidesArray) {
    return !((sidesArray[0] > 0) && (sidesArray[0] + sidesArray[1] > sidesArray[2]));
  }

  kind() {
    if (this.side1 === this.side3) {
      return "equilateral";
    } else if ((this.side1 === this.side2) || (this.side2 === this.side3)) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;