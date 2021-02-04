class Location {
  name;
  address;
  hours;
  min;
  max;
  averageCookiesPerCustomer;

  constructor(name, address, hours, min, max, avg) {
    this.name = name;
    this.address = address;
    this.hours = hours;
    this.min = min;
    this.max = max;
    this.averageCookiesPerCustomer = avg;
  }
}

export default Location