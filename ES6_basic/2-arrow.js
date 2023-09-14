/*
Rewrite the following standard function to use ES6’s arrow syntax of the
function add (it will be an anonymous function after)

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
*/
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
/*
The 'function add(newNeighborhood)' is changed to an arrow
function '(newNeighborhood) =>' and the 'self' variable is removed.
The arrow function automatically captures the 'this' value by itself.
*/
