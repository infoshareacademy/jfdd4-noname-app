
var data = {
    stops: [
        {id: 1, name: "Przeróbka"},
        {id: 2, name: "Głęboka"},
        {id: 3, name: "Brama Żuławska"},
        {id: 4, name: "Akademia Muzyczna"},
        {id: 5, name: "Szafarnia"},
        {id: 6, name: "Dolne Miasto"},
        {id: 7, name: "Śluza"},
        {id: 8, name: "Kamienna Grobla"},
        {id: 9, name: "Muzeum Narodowe"},
        {id: 10, name: "Brama Wyżynna"}
    ],
    buses: [
        {lineNumber: 111, stops: [1, 3, 4, 7]},
        {lineNumber: 112, stops: [2, 3, 5, 6, 8]},
        {lineNumber: 178, stops: [3, 5, 6, 7, 8]},
        {lineNumber: 199, stops: [1, 2, 3, 4, 5]},
        {lineNumber: 200, stops: [4, 5, 6, 7, 8]}
    ]
};

export default data