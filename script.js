

fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById("content");
        let html = '';
        data = Object.values(data);
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            html += `
                <tr>
                    <td>${i+1}</td>
                    <td>${item.question}</td>
                    <td>
                        <p class="dapan ${item.correct == 0 ? 'dapandung' : ''}">${item.answers[0]}</p>
                        <p class="dapan ${item.correct == 1 ? 'dapandung' : ''}">${item.answers[1]}</p>
                        <p class="dapan ${item.correct == 2 ? 'dapandung' : ''}">${item.answers[2]}</p>
                        <p class="dapan ${item.correct == 3 ? 'dapandung' : ''}">${item.answers[3]}</p>
                    </td>

            `
        }
        content.innerHTML = html;
    });
