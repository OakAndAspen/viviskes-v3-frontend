//import $ from 'jquery';

export default {
    root: 'http://localhost:3000',
    imgFolder: 'http://localhost:3000/images',
    apiUrl: 'http://127.0.0.1:8000/api',
    /*fetch: function (url) {
        let baseUrl = 'http://127.0.0.1:8000/api';
        $.ajax({
            url: baseUrl+url,
            crossOrigin: true,
            type: 'GET',
            accept: 'application/json'
        }).done(function (data) {
            console.log(data);
            return data;
        }).fail(function (xhr, textStatus, error) {
            console.log("Error");
        });
    }*/
}