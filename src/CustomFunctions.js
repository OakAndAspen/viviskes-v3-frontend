export default {
    root: 'http://localhost:3000',
    imgFolder: 'http://localhost:3000/images',
    apiUrl: 'http://127.0.0.1:8000',
    orderBy: function (array, orderBy, asc = true) {
        array.sort(function (a, b) {
            if (typeof a[orderBy] === "string") {
                return a[orderBy].localeCompare(b[orderBy]);
            } else return a[orderBy] - b[orderBy];
        });
        return array;
    }
}