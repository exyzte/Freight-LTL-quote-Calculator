document.getElementById("quoteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const pickupZip = document.getElementById("pickupZip").value;
    const deliveryZip = document.getElementById("deliveryZip").value;
    const weight = Number(document.getElementById("weight").value);
    const length = Number(document.getElementById("length").value);
    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);
    const freightType = document.getElementById("freightType").value;

    // Calculate volumetric weight
    const volumetricWeight = (length * width * height) / 166;
    const billableWeight = Math.max(weight, volumetricWeight);

    // Static distance placeholder
    const estimatedMiles = 500;

    // Simple rate calculation: $0.75 per mile + $0.05 per lb
    const ratePerMile = 0.75;
    const ratePerPound = 0.05;

    const quote = (estimatedMiles * ratePerMile) + (billableWeight * ratePerPound);

    const quoteResult = `
        <strong>Quote Details:</strong><br>
        Pickup ZIP: ${pickupZip} <br>
        Delivery ZIP: ${deliveryZip} <br>
        Freight Type: ${freightType} <br>
        Estimated Miles: ${estimatedMiles} miles <br>
        Billable Weight: ${billableWeight.toFixed(2)} lbs <br>
        <strong>Estimated Quote: $${quote.toFixed(2)}</strong>
    `;

    document.getElementById("quoteResult").innerHTML = quoteResult;
});