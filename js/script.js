// function buy(){
//     const homeSection = document.getElementById('buy-now');
//     homeSection.classList.add('hidden');
    
//     const busSeat = document.getElementById('bus');
//     busSeat.classList.remove('hidden')

    
// }

// Get references to the sections
const buyNowSection = document.getElementById('buy-now');
const busSection = document.getElementById('bus');
const successSection = document.getElementById('success');

// Function to switch from buy-now section to bus section
function buy() {
    buyNowSection.classList.add('hidden');
    
    busSection.classList.remove('hidden');
}

// Function to switch from bus section to success section
function next() {
    busSection.classList.add('hidden');
    successSection.classList.remove('hidden');
}

// lll

document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.seat');
    const selectedSeats = [];
    const seatPrice = 550;
    let seatCount = 40;
    let totalPrice = 0;
  
    const updateSeatCount = () => {
      const seatLeftBtn = document.querySelector('.selected-seats button');
      seatLeftBtn.innerText = `${seatCount} Seats left`;
    };
  
    const updateTotalPrice = () => {
      const totalElement = document.querySelector('.total-price');
      totalElement.innerText = totalPrice;
    };
  
    const updateSelectedSeats = () => {
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
      selectedSeats.forEach(seat => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${seat}</td>
          <td>Economy</td>
          <td>${seatPrice}</td>
        `;
        tbody.appendChild(tr);
      });
    };
  
    const updateGrandTotal = () => {
      const grandTotalElement = document.querySelector('.grand-total');
      const grandTotal = selectedSeats.length * seatPrice;
      grandTotalElement.innerText = grandTotal;
    };
  
    const updateNextButton = () => {
      const phoneNumberInput = document.querySelector('input[type="tel"]');
      const nextButton = document.querySelector('.btn-next');
      nextButton.disabled = phoneNumberInput.value.trim() === '';
    };
  
    const toggleSeatSelection = seat => {
      if (selectedSeats.includes(seat)) {
        selectedSeats.splice(selectedSeats.indexOf(seat), 1);
        seatCount++;
        totalPrice -= seatPrice;
      } else {
        selectedSeats.push(seat);
        seatCount--;
        totalPrice += seatPrice;
      }
      updateSeatCount();
      updateTotalPrice();
      updateSelectedSeats();
      updateGrandTotal();
      updateNextButton();
    };
  
    seats.forEach(seat => {
      seat.addEventListener('click', () => {
        toggleSeatSelection(seat.textContent);
        seat.classList.toggle('selected');
      });
    });
  
    updateSeatCount();
    updateTotalPrice();
  
    const phoneNumberInput = document.querySelector('input[type="tel"]');
    phoneNumberInput.addEventListener('input', updateNextButton);
  });
//  

const toggleSeatSelection = seat => {
    if (selectedSeats.includes(seat)) {
      selectedSeats.splice(selectedSeats.indexOf(seat), 1);
      seatCount++;
      totalPrice -= seatPrice;
    } else {
      selectedSeats.push(seat);
      seatCount--;
      totalPrice += seatPrice;
    }
    updateSeatCount();
    updateTotalPrice();
    updateSelectedSeats();
    updateGrandTotal();
    updateNextButton();
  
    // Toggle CSS class for background color
    seat.classList.toggle('selected');
  };
  