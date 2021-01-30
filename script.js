// variable Declaration:
const firstClassTicketPlus = document.getElementById("first-class-ticket-plus");
const firstClassTicketMinus = document.getElementById("first-class-ticket-minus");

const economyClassTicketPlus = document.getElementById("economy-class-ticket-plus");
const economyClassTicketMinus = document.getElementById("economy-class-ticket-minus");

const bookingButton = document.getElementById("booking-button");

// Event Handle:
firstClassTicketPlus.addEventListener('click', function(){
    numberOfTicket('first-class-ticket', true, true);
})
firstClassTicketMinus.addEventListener('click', function(){
    numberOfTicket('first-class-ticket', false, true);
})
economyClassTicketPlus.addEventListener('click', function(){
    numberOfTicket('economy-class-ticket', true, false);
})
economyClassTicketMinus.addEventListener('click', function(){
    numberOfTicket('economy-class-ticket', false, false);
})

// After Clicked Book Now button shows this Function:
bookingButton.addEventListener('click', function(){
    const beforeBooking = document.getElementById('before-booking');
    beforeBooking.style.display = 'none';
    const afterBooking = document.getElementById('after-booking');
    afterBooking.style.display = 'block';

    const firstClassCount = getInputValue('first-class-ticket');
    const economyClassCount = getInputValue('economy-class-ticket');
    alert(
        "Dear Sir, You have booked " + 
        (firstClassCount + economyClassCount) + 
        " tickets " + 
        "And Your Total Cost (Including Vat) is " + 
        document.getElementById('grand-total').innerText 
    );
})

// Event Function:
function numberOfTicket(id, isPlus, isFirstClass, isEconomyClass){
    const ticket = document.getElementById(id + "-count");
    const ticketCount = parseFloat(ticket.value);

    // const newTicketCount = ticketCount + 1:
    let newTicketCount = 0;
    if(isPlus == true){
        newTicketCount = ticketCount + 1;
    }
    else if(isPlus == false && ticketCount > 0){
        newTicketCount = ticketCount - 1;
    }
    document.getElementById(id + "-count").value = newTicketCount;
    let ticketPrice = 0;
    if(isFirstClass == true){
        ticketPrice = newTicketCount * 150;
    }
    if(isEconomyClass == true){
        ticketPrice = newTicketCount * 100;
    }
    calculateTotalPrice();
}
function calculateTotalPrice(){
    const firstClassCount = getInputValue('first-class-ticket');
    const economyClassCount = getInputValue('economy-class-ticket');
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    
    document.getElementById('sub-total').innerText = "$" + totalPrice;
    const tax = totalPrice * 0.1;
    document.getElementById('vat-total').innerText = "$" + tax;
    const grandTotal = totalPrice + tax;
    console.log(grandTotal);
    document.getElementById('grand-total').innerText = "$" + grandTotal;
}
function getInputValue(id){
    const classInput = document.getElementById(id + "-count");
    const classCount = parseFloat(classInput.value);
    return classCount;
}