const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); // node lst Array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; // + convert string to number


/*
    * Save selected movie Index and Price.
*/
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

/*
    * Update total and count
*/
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log('selectedSeats', selectedSeats);
    /*
        * Save data to Local storage.
            * 1- Copy selected seats into arr
            * 2- Map through array
            * 3- return a new array indexes
    */
    const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))

    // console.log(seatIndex);

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

/*
    * Get data from localstorage and populate UI.
*/
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    // console.log("populateUI=> selectedSeats", selectedSeats);
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if (selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

/*
    * Movie select Event.
*/
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    // console.log(e.target.selectedIndex, e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount()
})

/*
    * Seat click Event.
*/
container.addEventListener('click', (e) => {
    /* * exact element click on */
    // console.log(e.target);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

/*
    * Initail count and total set.
*/
updateSelectedCount()