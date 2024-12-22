// Ambil elemen canvas
const ctx = document.getElementById('penjualanChart').getContext('2d');

// Data untuk Grafik
const dataPenjualan = {
    labels: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    datasets: [
        {
            label: '2022',
            data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945],
            backgroundColor: 'rgba(207, 96, 255, 0.7)',
            borderColor: 'rgb(187, 0, 255)',
            borderWidth: 1
        },
        {
            label: '2023',
            data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

// Konfigurasi Grafik
const config = {
    type: 'bar',
    data: dataPenjualan,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Grafik
new Chart(ctx, config);
