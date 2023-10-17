const container = document.querySelector('.container');
const seats = container.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.querySelector('select');
let moviePrice = +movie.value;

populateUI();

function setMovieData(movieIndex, movieValue) {
  localStorage.setItem('movieIndex', movieIndex);
  localStorage.setItem('movieValue', movieValue);
}

function updateCountAndTotal() {
  const selectedSeats = container.querySelectorAll('.row .seat.selected');
  count.innerText = selectedSeats.length;
  const cost = selectedSeats.length * moviePrice;
  total.innerText = cost;

  const selectedSeatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeatsIndex', JSON.stringify(selectedSeatsIndex));
}

movie.addEventListener('change', e => {
  moviePrice = +e.target.value;
  updateCountAndTotal();
  setMovieData(e.target.selectedIndex, e.target.value);
} )

container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ){
    e.target.classList.toggle('selected');
    updateCountAndTotal();
  }
  
})

function populateUI() {
  
}


