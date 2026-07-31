for (let i = 1; i < 7; i++) {
    document.write(`<h${i}>welcome to my page</h${i}>`);
}

let name = prompt('Enter your name');
let birthYear = prompt('Enter your Birth Year');
if (name != null && birthYear != null) {
    if (name != "" && birthYear != "") {
        birthYear = Number(birthYear);
        document.write(`
    <table style="border: 2px solid black;">
        <tr>
            <td style="border: 1px solid black; padding: 8px; font-weight: bold;">Name</td>
            <td style="border: 1px solid black; padding: 8px;">${name}</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 8px; font-weight: bold;">Birth Year</td>
            <td style="border: 1px solid black; padding: 8px;">${birthYear}</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 8px; font-weight: bold;">Age</td>
            <td style="border: 1px solid black; padding: 8px;">${2026 - birthYear}</td>
        </tr>
    </table>
`);
    }
    else {
        alert("Please Enter Data");
    }
}




