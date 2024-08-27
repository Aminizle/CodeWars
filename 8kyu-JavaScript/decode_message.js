const fs = require('fs');

function decode(message_file) {
    // Read the content of the file
    const content = fs.readFileSync(message_file, 'utf8');
    const lines = content.trim().split('\n');

    // Extract the message words based on the pyramid structure
    const pyramid = [];
    let decodedMessage = '';
    let index = 0;

    lines.forEach((line, lineNumber) => {
        const [number, word] = line.split(' ');
        pyramid.push(word);

        if (lineNumber === index) {
            decodedMessage += word + ' ';
            index += parseInt(number);
        }
    });

    // Remove the extra space at the end and return the decoded message
    return decodedMessage.trim();
}

// Example usage:
const decodedMessage = decode('encoded_message.txt');
console.log(decodedMessage);  // Output: I love computers
