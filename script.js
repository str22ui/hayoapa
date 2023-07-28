let currentCard = 1;
const totalCards = 10; // Ganti dengan jumlah total card yang Anda miliki
let popupShown = false; // Tambahkan variabel untuk menandai apakah pop-up sudah ditampilkan
const firstCard = document.getElementById('card1');

function showCard(cardNumber) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.style.display = 'none');
    document.getElementById(`card${cardNumber}`).style.display = 'block';
}



function nextCard() {
    currentCard++;
    if (currentCard > totalCards) {
        currentCard = 1;
        showPopup(); // Tampilkan pop-up hanya setelah slide terakhir

        // Hapus elemen kartu pertama dari DOM
        const firstCard = document.getElementById('card1');
        firstCard.parentNode.removeChild(firstCard);
    }
    showCard(currentCard);
}
document.addEventListener('DOMContentLoaded', () => {
    showCard(currentCard);
});