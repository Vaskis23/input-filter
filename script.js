function filterInput() {

    let value = phoneInput.value.split('');
    let filteredValue = [];
    
    for (let i = 0; i < value.length; i++) {
        if ((value[i] >= '0' && value[i] <= '9' && pattern[i] === '#') || (value[i] === pattern[i] && pattern[i] !== '#')) {
            filteredValue.push(value[i]);
        } else {
            break;
        }
    }

    console.log(filteredValue);
    phoneInput.value = filteredValue.join('');
    // hw1: collect a clean number without the separators - as an array
}

let pattern = ["#", "#", "#", "/", "2", "#", "#", "#", "-", "#", "#", "#"];
let filteredValue = [];
