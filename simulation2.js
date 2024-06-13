document.addEventListener("DOMContentLoaded", function () {
    const target = 222157.5737 / 134.18;
    const sliders = [];
    const outputs = [];
    const numSliders = 6;

    for (let i = 1; i <= numSliders; i++) {
        sliders.push(document.getElementById(`slider${i}`));
        outputs.push(document.getElementById(`output${i}`));
        outputs[i - 1].innerHTML = sliders[i - 1].value;

        sliders[i - 1].oninput = function () {
            updateSliders(i);
        }
    }

    function updateSliders(changedIndex) {
        const values = sliders.map(slider => parseFloat(slider.value));
        const product = values.reduce((a, b) => a * b, 1);
        const factor = Math.pow(target / product, 1 / (numSliders - 1));

        let anyAtMax = false;
        for (let i = 0; i < numSliders; i++) {
            if (i !== changedIndex - 1) {
                const newValue = parseFloat(sliders[i].value) * factor;
                if (newValue >= parseFloat(sliders[i].max)) {
                    sliders[i].value = sliders[i].max;
                    outputs[i].innerHTML = sliders[i].max;
                    anyAtMax = true;
                } else if (newValue <= parseFloat(sliders[i].min)) {
                    sliders[i].value = sliders[i].min;
                    outputs[i].innerHTML = sliders[i].min;
                    anyAtMax = true;
                } else {
                    sliders[i].value = newValue;
                    outputs[i].innerHTML = newValue.toFixed(3);
                }
            }
        }

        if (anyAtMax) {
            sliders[changedIndex - 1].disabled = true;
        } else {
            sliders.forEach(slider => slider.disabled = false);
        }

        outputs[changedIndex - 1].innerHTML = sliders[changedIndex - 1].value;
    console.log(product*134.18*1.125327378)

    }
});