var airlineSeats = [
  false;
  false;
  false;
  false;
  false;
  false;
  false;
  false;
  false;
  false;
];

var busySeats = 0 ;

var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats')
  for (var i= 0, i< array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';


    if(i<4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seats)
  }
};

paintSeats(airlineSeats);
