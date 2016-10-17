
var data = {
    stops: [
        {id: 1, name: "Przeróbka", cox: 54.357267, coy: 18.682472},
        {id: 2, name: "Głęboka", cox: 54.352325, coy: 18.671786},
        {id: 3, name: "Brama Żuławska", cox: 54.34782, coy: 18.6694},
        {id: 4, name: "Akademia Muzyczna", cox: 54.3446, coy: 18.6643},
        {id: 5, name: "Szafarnia", cox: 54.3475, coy: 18.6612},
        {id: 6, name: "Dolne Miasto", cox: 54.357267, coy: 18.682472},
        {id: 7, name: "Śluza", cox: 54.357267, coy: 18.682472},
        {id: 8, name: "Kamienna Grobla", cox: 54.357267, coy: 18.682472},
        {id: 9, name: "Muzeum Narodowe", cox: 54.357267, coy: 18.682472},
        {id: 10, name: "Brama Wyżynna", cox: 54.357267, coy: 18.682472}
    ],
    buses: [
        {lineNumber: 111, stops: [1, 3, 4, 7], routes: [
            ['10:00', '10:05', '10:11', '11:00']
        ]},
        {lineNumber: 112, stops: [2, 3, 5, 6, 8]},
        {lineNumber: 178, stops: [3, 5, 6, 7, 8]},
        {lineNumber: 199, stops: [1, 2, 3, 4, 5]},
        {lineNumber: 200, stops: [4, 5, 6, 7, 8]}
    ]
};

export default data