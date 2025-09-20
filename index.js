// Code your solutions in this file
// Function that returns an array of thank you messages
function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

// Function that counts down from a given number and logs each number
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}