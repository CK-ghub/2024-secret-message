function typeWriter(element, text, i, callback) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, callback);
        }, 15); // Typing speed in milliseconds
    } else if (typeof callback == 'function') {
        callback();
    }
}

function startTypingEffect() {
    const paragraphs = document.getElementsByTagName('p');
    let i = 0;
    function typeNextParagraph() {
        if (i < paragraphs.length) {
            paragraphs[i].style.display = ''; // Make paragraph visible
            typeWriter(paragraphs[i], paragraphs[i].dataset.text, 0, typeNextParagraph);
            i++;
        }
    }
    typeNextParagraph();
}

document.addEventListener('DOMContentLoaded', function() {
    startTypingEffect();
});
