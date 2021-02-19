/* To-do:
 - populate the select elements from a list of colors
 - every time a candidate/voter is added add a function to remove them
*/


//universal, unique, untouched. unadulturated, the raw uncut
const COLORS = {
    "amber": [1, 0.749, 0],
    "aqua": [0, 1, 1],
    "aquamarine": [0.498, 1, 0.831],
    "azure": [0.941, 1, 1],
    "black": [0, 0, 0],
    "blue": [0, 0, 1],
    "brown": [0.647, 0.165, 0.165],
    "capri": [0, 0.749, 1],
    "carmine": [0.588, 0, 0.094],
    "charcoal": [0.212, 0.271, 0.31],
    "chartreuse": [0.498, 1, 0],
    "cinnabar": [0.89, 0.259, 0.204],
    "cream": [1, 0.992, 0.816],
    "crimson": [0.863, 0.078, 0.235],
    "cyan": [0, 1, 1],
    "denim": [0.082, 0.376, 0.741],
    "ebony": [0.333, 0.365, 0.314],
    "emerald": [0.314, 0.784, 0.471],
    "fuchsia": [1, 0, 1],
    "gainsboro": [0.863, 0.863, 0.863],
    "gamboge": [0.894, 0.608, 0.059],
    "gold": [1, 0.843, 0],
    "goldenrod": [0.855, 0.647, 0.125],
    "green": [0, 0.502, 0],
    "gray": [0.502, 0.502, 0.502],
    "grey": [0.502, 0.502, 0.502],
    "harlequin": [0.247, 1, 0],
    "heliotrope": [0.875, 0.451, 1],
    "indigo": [0.294, 0, 0.51],
    "jade": [0, 0.659, 0.42],
    "khaki": [0.941, 0.902, 0.549],
    "lavender": [0.902, 0.902, 0.98],
    "lilac": [0.784, 0.635, 0.784],
    "lime": [0, 1, 0],
    "magenta": [1, 0, 1],
    "malachite": [0.043, 0.855, 0.318],
    "marigold": [0.918, 0.635, 0.129],
    "maroon": [0.502, 0, 0],
    "mint": [0.243, 0.706, 0.537],
    "navy": [0, 0, 0.502],
    "olive": [0.502, 0.502, 0],
    "orange": [1, 0.647, 0],
    "orangered": [1, 0.271, 0],
    "peach": [1, 0.898, 0.706],
    "periwinkle": [0.8, 0.8, 1],
    "pink": [1, 0.753, 0.796],
    "puce": [0.8, 0.533, 0.6],
    "purple": [0.502, 0, 0.502],
    "quicksilver": [0.541, 0.577, 0.6],
    "red": [1, 0, 0],
    "salmon": [0.98, 0.502, 0.447],
    "shamrock": [0.271, 0.808, 0.635],
    "silver": [0.753, 0.753, 0.753],
    "tan": [0.824, 0.706, 0.549],
    "teal": [0, 0.502, 0.502],
    "turquoise": [0.251, 0.878, 0.816],
    "ultramarine": [0.071, 0.039, 0.561],
    "vermillion": [0.89, 0.259, 0.204],
    "violet": [0.933, 0.51, 0.933],
    "white": [1, 1, 1],
    "xanthic": [0.933, 0.929, 0.035],
    "yellow": [1, 1, 0],
    "zaffre": [0, 0.078, 0.659]
}

const slcVtrs = document.getElementById('select-voters');
const btnVtrAdd = document.getElementById('button-voters');
const divVtrRst = document.getElementById('roster-voters');

const slcCnds = document.getElementById('select-candidates');
const btnCndAdd = document.getElementById('button-candidates');
const divCndRst = document.getElementById('roster-candidates');

const populate_selects = (selectElement) => {
    for (let i = 0; i < Object.keys(COLORS).length; i++) {
        const option = document.createElement("option");
        option.text = Object.keys(COLORS)[i];
        selectElement.add(option);
    }
};

populate_selects(slcVtrs);
populate_selects(slcCnds);

const rgbToHex = rgb => {
    let red = Math.round(rgb[0] * 255).toString(16);
    red = red.length == 1 ? "0" + red : red;

    let grn = Math.round(rgb[1] * 255).toString(16);
    grn = grn.length == 1 ? "0" + grn : grn;
    
    let blu = Math.round(rgb[2] * 255).toString(16);
    blu = blu.length == 1 ? "0" + blu : blu;

    return '#' + red + '' + grn  + '' + blu;
};

const newCircle = color => {
    const div = document.createElement('div');

    div.textContent = 'x';
    div.value = color;
    div.style.backgroundColor = rgbToHex(COLORS[color]);
    div.classList.add('citizen-circle');
    div.addEventListener('click', e => {
        let tgt = e.target;
        if (tgt.parentNode.id === "roster-candidates") {
            const option = document.createElement("option");
            option.text = tgt.value;
            slcCnds.add(option);
        }
        tgt.parentNode.removeChild(tgt);
    })

    return div;
}

btnVtrAdd.addEventListener('click', () => {
    // add a div circle to the roster div with the name in select
    // remove that color from select if which === "candidates"
    const new_vtr = newCircle(slcVtrs.value);

    divVtrRst.appendChild(new_vtr);
});

btnCndAdd.addEventListener('click', () => {
    // add a div circle to the roster div with the name in select
    // remove that color from select if which === "candidates"
    const new_cnd = newCircle(slcCnds.value);

    for (let i = 0; i < slcCnds.length; i++) {
        if (slcCnds[i].value === slcCnds.value) slcCnds.remove(i);
    }

    divCndRst.appendChild(new_cnd);
});