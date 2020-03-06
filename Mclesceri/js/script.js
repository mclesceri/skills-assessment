// Declaring Variables
var accItem = document.getElementsByClassName('accordionItem'),
    phEm = document.getElementById('ph-em');

// Accordion Function
for (i = 0; i < accItem.length; i++) {
    accItem[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.className;

    document.querySelector('.content').classList.remove('active');

    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.className = 'accordionItem active';
        document.querySelector('.content').classList.add('active');
    }
}

// Switch between email and phone
phEm.addEventListener("change", function() {

    var value = this.value;

   for (i = 0; i < accItem.length; i++) {
        
        if ( value == 'phone' ) {

            accItem[i].getElementsByClassName('phone')[0].classList.remove('hide');
            accItem[i].getElementsByClassName('em')[0].classList.add('hide');
        } else {

            accItem[i].getElementsByClassName('em')[0].classList.remove('hide');
            accItem[i].getElementsByClassName('phone')[0].classList.add('hide');
        }

    }

}, false);