document.addEventListener("DOMContentLoaded", function () {
    const numSliders = 6;
    const sliders = [];
    const outputs = [];
    const values = [];
    const current_val = [58306, 0.494854732, 0.350223547, 0.184364176, 0.690284487, 0.781493002];
    const productElement = document.getElementById("product");


    function updateProduct() {
        let product = 134.18*1.125327378;
        for (let i = 0; i < numSliders; i++) {
            let value;
            value = parseFloat(((1 + parseFloat(sliders[i].value) / 100) * current_val[i]));
            product *= value;
        }
        productElement.innerHTML = "Expected to Achieve: " + product.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0});
    }


    for (let i = 1; i <= numSliders; i++) {
        sliders.push(document.getElementById(`slider${i}`));
        outputs.push(document.getElementById(`output${i}`));
        values.push(document.getElementById(`value${i}`));
        outputs[i - 1].innerHTML = parseFloat(sliders[i - 1].value).toFixed(1) + "%";
        if (i == 1) {
            values[i - 1].innerHTML = parseFloat(current_val[i - 1]).toFixed(0);
        } else {
            values[i - 1].innerHTML = (parseFloat(current_val[i - 1]) * 100).toFixed(1) + "%";
        }
        

        sliders[i - 1].oninput = function () {
            outputs[i - 1].innerHTML = parseFloat(sliders[i - 1].value).toFixed(1) + "%";
            if (i == 1) {
                values[i - 1].innerHTML = ((1 + parseFloat(sliders[i - 1].value) / 100) * parseFloat(current_val[i - 1])).toFixed(0);
            } else {
                values[i - 1].innerHTML = ((1 + parseFloat(sliders[i - 1].value) / 100) * parseFloat(current_val[i - 1]) * 100).toFixed(1) + "%";
            }
            const fin = values.map(slider => parseFloat(values.innerHTML));
            const product = fin.reduce((a, b) => a * b, 1);
            updateProduct();
                }


    }
    updateProduct();

});
