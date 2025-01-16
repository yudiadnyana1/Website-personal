// Menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Menampilkan pesan terima kasih
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim. Kami akan menghubungi Anda di ${email}.`);

    // Mengatur ulang formulir setelah pengiriman
    this.reset();
});