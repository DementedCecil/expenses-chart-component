fetch('./data.json')
.then(response => {
    return response.json();
})
.then(data => populate(data));

function populate(data){
    let table = document.querySelector('.table');
    let max = Math.max(...data.map(o => o.amount));

    for (let i = 0; i < data.length; i++){
        let el = data[i];
        let height = 200 * el.amount / 100;
        let bars = "bars"

        if(el.amount === max){
            bars = "bars highest-bar";
        }

        table.innerHTML += `
            <div>
                <div class="${bars}" style="height: ${height}px" value="${el.amount}">
                    <div class="hidden amount">$${el.amount}</div>
                </div>
                <div class="label">${el.day}</div>
            </div>
        `

        let columns = document.querySelectorAll('.bars')
        columns.forEach(column => {
            column.addEventListener('mouseover', () => {
                column.firstElementChild.classList.remove('hidden');
            });
            column.addEventListener('mouseout', () => {
                column.firstElementChild.classList.add('hidden');
            });
        });
    }
}


