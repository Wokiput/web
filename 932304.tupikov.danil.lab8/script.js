const list = document.getElementById('list');
const addBtn = document.getElementById('add');
const saveBtn = document.getElementById('save');
const output = document.getElementById('output');

function createRow(key = '', value = '') {
    const row = document.createElement('div');
    row.className = 'row';

    const keyInput = document.createElement('input');
    keyInput.placeholder = 'Ключ';
    keyInput.value = key;

    const valueInput = document.createElement('input');
    valueInput.placeholder = 'Значение';
    valueInput.value = value;
    valueInput.addEventListener('input', () => {
        valueInput.value = valueInput.value.replace(/[^0-9]/g, '');
    });

    const upBtn = document.createElement('button');
    upBtn.textContent = '↑';
    upBtn.addEventListener('click', () => {
        if (row.previousElementSibling)
            list.insertBefore(row, row.previousElementSibling);
    });

    const downBtn = document.createElement('button');
    downBtn.textContent = '↓';
    downBtn.addEventListener('click', () => {
        if (row.nextElementSibling)
            list.insertBefore(row.nextElementSibling, row);
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '×';
    delBtn.addEventListener('click', () => {
        list.removeChild(row);
    });

    row.appendChild(keyInput);
    row.appendChild(valueInput);
    row.appendChild(upBtn);
    row.appendChild(downBtn);
    row.appendChild(delBtn);
    list.appendChild(row);
}

addBtn.addEventListener('click', () => {
    createRow();
});

saveBtn.addEventListener('click', () => {
    const data = {};
    document.querySelectorAll('.row').forEach(row => {
        const key = row.children[0].value.trim();
        const value = row.children[1].value.trim();
        if (key && value) {
            data[key] = value;
        }
    });
    output.textContent = JSON.stringify(data);
});
