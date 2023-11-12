//Déclaration du tableau qui contient les données de l'équipe
const team = {
    _players :[
        {
            firstName: 'Steve',
            lastName: 'Mandanda',
            age: 38
        },
        {
            firstName: 'Nemanja',
            lastName: 'Matic',
            age: 35
        },
        {
            firstName: 'Martin',
            lastName: 'Terrier',
            age: 38
        }
    ],
    _games :[
        {
            opponent:       'Fc Metz',
            teamPoints:     5,
            opponentPoint:  1
        },
        {
            opponent:       'Lens',
            teamPoints:     1,
            opponentPoint:  1
        },
        {
            opponent:       'Le Havre',
            teamPoints:     2,
            opponentPoint:  2 
        }
    ],

    get players(){
        return this._players;
    }
};

console.log(team.players);