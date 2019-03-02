let counter = 0;
let lastKey = null;

document.addEventListener('input', function(event) {
    switch(event.data) {
        case 't' :
        case 'T' :
            if (lastKey === ' ' || lastKey === null)
                counter += 1;
            break;
        case 'e':
            if (counter === 1) {
                counter += 1;
            } else {
                counter = 0;
            }
            break;
        case 'h':
            if (counter === 2) {
                event.target.value = event.target.value.replace(new RegExp(' teh', 'g'), ' the');
                event.target.value = event.target.value.replace(new RegExp('Teh', 'g'), 'The');
            } else {
                counter = 0;
            }
            break;
        default:
            counter = 0;
            break;
    }
    lastKey = event.data;
})