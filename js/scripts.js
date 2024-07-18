// ini javascript

document.addEventListener('DOMContentLoaded', () => {
    // Tambahkan event listener untuk tombol submit
    document.querySelector('.button.submit').addEventListener('click', calculateBMI);
    document.querySelector('.button.reset').addEventListener('click', resetForm);
});

function calculateBMI() {
    // Ambil nilai dari input
    const weight = document.getElementById('input-berat-badan').value;
    const height = document.getElementById('input-tinggi-badan').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validasi input
    if (!weight || !height || !gender) {
        alert('Mohon masukkan semua nilai yang diperlukan dan pilih jenis kelamin.');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Tentukan kategori BMI
    let resultText;
    let bmiCategory;

    if (bmi < 18.5) {
        resultText = 'Anda berada dalam kategori Kekurangan Berat Badan';
        bmiCategory = 'Kekurangan Berat Badan';
        displaySection('resultArticle2');
        displaySection('generalInformation2');
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        resultText = 'Anda berada dalam kategori Normal (ideal)';
        bmiCategory = 'Normal';
        displaySection('resultArticle1');
        displaySection('generalInformation1');
    } else if (bmi >= 25 && bmi <= 29.99) {
        resultText = 'Anda berada dalam kategori Kelebihan Berat Badan';
        bmiCategory = 'Kelebihan Berat Badan';
        displaySection('resultArticle');
        displaySection('generalInformation');
    } else {
        resultText = 'Anda berada dalam kategori Kegemukan (Obesitas)';
        bmiCategory = 'Kegemukan';
        displaySection('resultArticle');
        displaySection('generalInformation');
    }

    // Tampilkan hasil
    document.getElementById('result').style.display = 'block';
    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi}`;
    document.getElementById('bmiCategory').textContent = resultText;
}

function displaySection(sectionId) {
    document.getElementById(sectionId).style.display = 'block';
}

function resetForm() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('resultArticle2').style.display = 'none';
    document.getElementById('generalInformation2').style.display = 'none';
    document.getElementById('resultArticle1').style.display = 'none';
    document.getElementById('generalInformation1').style.display = 'none';
    document.getElementById('resultArticle').style.display = 'none';
    document.getElementById('generalInformation').style.display = 'none';
}
