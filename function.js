function buttonSelected(button) {
    // Check if the maximum limit of 4 seats has been reached
    const selectedSeats = document.querySelectorAll('.selected').length;
    if (selectedSeats >= 4 && !button.classList.contains('selected')) {
      alert('You can only select up to 4 seats.');
      return;
    }
  
    // Toggle background color
    button.classList.toggle('selected');
  
    // Update seat count
    const seatAdd = document.getElementById('seat-add');
    seatAdd.textContent = document.querySelectorAll('.selected').length;
  
    // Decrease available seats count
    const seatLeft = document.getElementById('seat-left');
    const availableSeats = parseInt(seatLeft.innerText);
    seatLeft.innerText = button.classList.contains('selected') ? availableSeats - 1 : availableSeats + 1;
  
    // Create or update selected seats
    const selectedSeatsContainer = document.getElementById('selected-seats');
    const selectedSeatsArray = Array.from(document.querySelectorAll('.selected'));
    selectedSeatsContainer.innerHTML = ''; // Clear previous selection
  
    selectedSeatsArray.forEach(selectedButton => {
      const seatDiv = document.createElement('div');
      seatDiv.textContent = selectedButton.textContent.trim();
      seatDiv.classList.add('selected-seat');
      selectedSeatsContainer.appendChild(seatDiv);
    });
  }
  