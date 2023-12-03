let container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.style.flex = '1';
    row.style.display = 'flex';
    container.appendChild(row);
}

let row = document.querySelector('#container > div');
while (row) {
    for (let i = 0; i < 16; i++) {
        let tile = document.createElement('div');
        tile.style.flex = 1;
        row.appendChild(tile);
    }
    row = row.nextElementSibling;
}

container.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.style.backgroundColor = 'red';
});

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let size = prompt('Enter squares per side');
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.style.flex = '1';
        row.style.display = 'flex';
        container.appendChild(row);
    }
    row = document.querySelector('#container > div');
    while (row) {
        for (let i = 0; i < size; i++) {
            let tile = document.createElement('div');
            tile.style.flex = '1';
            row.appendChild(tile);
        }
        row = row.nextElementSibling;
    }
});