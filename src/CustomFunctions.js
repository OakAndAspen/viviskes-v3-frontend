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

        if (!asc) return array.reverse();
        return array;
    },
    timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    /*var aDay = 24*60*60*1000
    console.log(timeSince(new Date(Date.now()-aDay)));
    console.log(timeSince(new Date(Date.now()-aDay*2)));*/

}