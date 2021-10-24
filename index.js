const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, value){
  const selected = array.filter(array => array.toUpperCase() === value.toUpperCase());
  return selected;
}

function fuzzyMatch(array, value){
  const selected = array.filter(array => array.substring(0, 2) === value.substring(0, 2));
  return selected;
}

function matchName(array, value){
  const selected = array.filter(array => array.name === value);
  return selected;
}