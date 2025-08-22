

// Course said this was good practice otherwise errors can occur if the JS is trying to find elements before they exist etc.
document.addEventListener('DOMContentLoaded', function() {
    
   
    const cards = document.querySelectorAll('.card');
    
    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            
            // Get the service name from the card, did consider making each card its own class by service but wasn't sure what best practice was.
            const serviceName = card.querySelector('.card-header').textContent;
            
           
            let message = "What can " + serviceName + "domain do for your open day?\n\n";
            
            if (serviceName === "Land ") {
                message += "See tanks, meet soldiers, and explore army equipment";
            } else if (serviceName === "Air ") {
                message += "Experience flight simulators and see amazing aircraft!";
            } else if (serviceName === "Sea ") {
                message += "Tour naval ships and learn about life at sea!";
            }
            
            alert(message);
    

        });
    });
});