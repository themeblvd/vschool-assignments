var hockeyPlayer = {
    name: 'Jim',
    age: 28,
    physicalAtts: {
        height: 84,
        weight: 185
    },
    favoriteSkates: [
        {
            brand: 'Bauer',
            model: 'Supreme'
        },
        {
            brand: 'CCM',
            model: 'Tacks'
        },
    ],
    teammates: [
        {
            name: 'John',
            age: 31,
            favoriteSkates: [
                {
                    brand: 'Bauer',
                    model: 'Supreme'
                },
                {
                    brand: 'CCM',
                    model: 'Tacks'
                },
            ]
        },
        {
            name: 'Rob',
            age: 25,
            favoriteSkates: [
                {
                    brand: 'Bauer',
                    model: 'Vapor'
                }
            ]
        },
        {
            name: 'Rob',
            age: 25,
            favoriteSkates: [
                {
                    brand: 'Reebok',
                    model: 'Pump'
                },
                {
                    brand: 'CCM',
                    model: 'Tacks'
                },
                {
                    brand: 'Bauer',
                    model: 'Nexus'
                }
            ]
        }
    ],
    howManyTeammates: function() {
        return this.teammates.length;
    }
};

hockeyPlayer.physicalAtts.hasMuscles = true;

hockeyPlayer.physicalAtts.hairColor = 'brown';

hockeyPlayer.favoriteSkates.push( {
    brand: 'Reebok',
    model: 'Pump'
} );

hockeyPlayer.favoriteSkates.push( {
    brand: 'Bauer',
    model: 'Nexus'
} );

console.log( hockeyPlayer );
