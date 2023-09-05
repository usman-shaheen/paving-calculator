document.getElementById("paving-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const area = parseFloat(document.getElementById("area").value);
    const pricePerSquareFoot = parseFloat(document.getElementById("price-per-square-foot").value);

    if (!isNaN(area) && !isNaN(pricePerSquareFoot)) {
        const totalCost = area * pricePerSquareFoot;
        document.getElementById("result").innerHTML = `Estimated Cost: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    }
});
