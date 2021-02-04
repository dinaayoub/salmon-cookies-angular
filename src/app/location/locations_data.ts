import Location from './location';

export const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export const locations = [
  new Location(
    'Seattle',
    '102 Pike St, Seattle, WA',
    openHours,
    23,
    545,
    3
  ),
  new Location(
    'Tokyo',
    '2 Chome-19-23 Aobadia, Merugo City, Tokyo, Japan',
    openHours,
    23,
    245,
    3
  ),
  new Location(
    'Dubai',
    'Umm Hurair 2Dubai Healthcare City - Dubai - United Arab Emirates',
    openHours,
    23,
    345,
    3
  ),
  new Location(
    'Paris',
    '26 Avenue de l\'Opera, 75001 Paris, France',
    openHours,
    23,
    145,
    3
  ),
  new Location(
    'Lima',
    'Av Paseo de la Republica 144, Lima 15001, Peru',
    openHours,
    23,
    945,
    3
  )
];


