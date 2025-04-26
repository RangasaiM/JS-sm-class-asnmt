function processObjectsDelayed(items, delay) {
    for (let i = 0; i < items.length; i++) {
        setTimeout(() => {
            items[i].process();
        }, delay);
    }
}


const items = [
    { name: "Alpha", process: function () { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function () { console.log(`Task for ${this.name} done.`); } }
];

processObjectsDelayed(items, 2000); 
