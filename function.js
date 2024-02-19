document.getElementById('apply-discount').addEventListener('click', function () {
  updateTotalPrice();
});

function buttonSelected(button) {
  const selectedSeats = document.querySelectorAll('.selected').length;
  if (selectedSeats >= 4 && !button.classList.contains('selected')) {
    alert('You can only select up to 4 seats.');
    return;
  }

  button.classList.toggle('selected');

  const seatAdd = document.getElementById('seat-add');
  seatAdd.textContent = document.querySelectorAll('.selected').length;

  const seatLeft = document.getElementById('seat-left');
  const availableSeats = parseInt(seatLeft.innerText);
  seatLeft.innerText = button.classList.contains('selected') ? availableSeats - 1 : availableSeats + 1;


  const selectedSeatsContainer = document.getElementById('selected-seats');
  const selectedSeatsArray = Array.from(document.querySelectorAll('.selected'));
  selectedSeatsContainer.innerHTML = '';

  selectedSeatsArray.forEach(selectedButton => {
    const seatDiv = document.createElement('div');
    const seatName = selectedButton.textContent.trim();
    seatDiv.classList.remove("flex");
    seatDiv.innerHTML = `
      <div class="flex justify-between">
        <p>${seatName}</p>
        <p>Economoy</p>
        <p>550৳</p>
      </div>
    `;
    selectedSeatsContainer.appendChild(seatDiv);
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  const selectedSeatsArray = Array.from(document.querySelectorAll('.selected'));
  const totalPriceElement = document.getElementById('total-price');
  const grandTotalElement = document.getElementById('grand-total');
  const discountApply = document.getElementById('discount-apply').value.trim();

  let totalPrice = selectedSeatsArray.length * 550; 
  const originalTotalPrice = totalPrice; 

  if (discountApply === 'NEW15') {
    totalPrice *= 0.85; 
  } else if (discountApply === 'couple20') {
    totalPrice *= 0.80; 
  }

  // Update total price display
  totalPriceElement.textContent = `BDT ${originalTotalPrice.toFixed(2)}`;
  grandTotalElement.textContent = `BDT ${totalPrice.toFixed(2)}`; 

  // Hide discount field if discount is applied
  if (discountApply === 'NEW15' || discountApply === 'couple20') {
    document.getElementById('discount-form').style.display = 'none';
  }
}