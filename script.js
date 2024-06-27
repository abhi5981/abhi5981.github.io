function calculateEMI() {
    const amount = document.getElementById('amount').value;
    const duration = document.getElementById('duration').value;
    const interestRate = document.getElementById('interest-rate').value;

    if (!amount || !duration || !interestRate) {
        document.getElementById('output-group').style.display = 'none';
        return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;
    const emi = (amount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), duration)) / (Math.pow((1 + monthlyInterestRate), duration) - 1);

    document.getElementById('emi').value = emi.toFixed(2);
    document.getElementById('output-group').style.display = 'block';
}

document.getElementById('amount').addEventListener('input', calculateEMI);
document.getElementById('duration').addEventListener('input', calculateEMI);
document.getElementById('interest-rate').addEventListener('input', calculateEMI);
