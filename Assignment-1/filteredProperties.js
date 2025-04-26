function filterObjectProperties(obj, minLength) {
    const result = {};

    for (const key in obj) {
        if (typeof obj[key] === 'string' && obj[key].length >= minLength) {
            result[key] = obj[key];
        }
    }

    return result;
}


const data = { 
    a: "short", 
    b: "longer string", 
    c: 123, 
    d: "very long string indeed" 
};

const filtered = filterObjectProperties(data, 6);

console.log(filtered);

