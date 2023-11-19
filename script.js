document.addEventListener('DOMContentLoaded', function () {
    fetch('cit5students.json')
        .then(response => response.json())
        .then(data => {
            window.studentData = data;
        });
});

// Function to display and filter data by major
function displayByMajor(major) {
    const filteredData = window.studentData.filter(student => student.major === major);

    // Use Handlebars to render and display the data in a table
    const source = document.getElementById('table-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ students: filteredData });
    document.getElementById('data-container').innerHTML = html;
}
