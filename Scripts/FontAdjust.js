$(document).ready(function(){
	init();
});

function adjustFontSize() {
    const questionTd = document.querySelector('.questionTd');
    let fontSize = 28; // Kích thước chữ ban đầu (28pt)
    const minFontSize = 12; // Kích thước nhỏ nhất cho phép

    // Kiểm tra và điều chỉnh kích thước chữ cho đến khi nội dung vừa khung
    while (questionTd.scrollWidth > questionTd.clientWidth && fontSize > minFontSize) {
        fontSize--;
        questionTd.style.fontSize = fontSize + 'pt';
    }
}
