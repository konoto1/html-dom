
export function carsTable(cars) {

    let HTML = '';

    for (let i = 0; i < cars.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td><img src="${cars[i].photo}" alt=""/></td>
                <td>${cars[i].make}</td>
                <td>${cars[i].title}</td>
            </tr>`;
    }

    return `
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>Photo</td>
                <td>Make</td>
                <td>Description</td>
            </tr>
        </thead>
        <tbody ${HTML}>
        </tbody>
    </table>
    `
};

