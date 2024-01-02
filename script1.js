class UberCalculator {
    constructor(ratePerMile, ratePerMinute, baseFare) {
      this.ratePerMile = ratePerMile;
      this.ratePerMinute = ratePerMinute;
      this.baseFare = baseFare;
    }
  
    calculatePrice(distance, duration) {
      const fare = this.baseFare + (distance * this.ratePerMile) + (duration * this.ratePerMinute);
      return fare;
    }
  }
  
  // Example usage:
  const uberCalculator = new UberCalculator(0.5, 0.1, 5); // Rate per mile: $0.5, Rate per minute: $0.1, Base fare: $5
  
  const distance = 10; // in miles
  const duration = 15; // in minutes
  
  const totalPrice = uberCalculator.calculatePrice(distance, duration);
  console.log(`The estimated Uber price is $${totalPrice}`);
  