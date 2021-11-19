class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  };
  
  static at(hours, minutes)  {
    return new Clock(hours, minutes);
  };

  add(minutesToAdd) {
    while (minutesToAdd > 0) {
      minutesToAdd -= 1;
      this.minutes += 1;
      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = 0;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }

    return this;
  };

  subtract(minutesToSubtract) {
    while (minutesToSubtract > 0) {
      minutesToSubtract -= 1;
      this.minutes -= 1;
      if (this.minutes === -1) {
        this.hours -= 1;
        this.minutes = 59;
      }
      if (this.hours === -1) {
        this.hours = 23;
      }
    }

    return this;
  };

  toString() {
    return `${this.format(this.hours)}:${this.format(this.minutes)}`;
  };

  format(number) {
    return String(number).padStart(2, '0');
  };

  isEqual(otherClock) {
    return (this.hours === otherClock.hours &&
            this.minutes === otherClock.minutes);
  };
}

module.exports = Clock;