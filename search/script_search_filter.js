document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const filters = {};
    for (let [key, value] of formData.entries()) {
        if (!filters[key]) {
            filters[key] = [];
        }
        filters[key].push(value);
    }
    console.log("Selected filters:", filters);
    alert("Filters applied! See console for details.");
});
