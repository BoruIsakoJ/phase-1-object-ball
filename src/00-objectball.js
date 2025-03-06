function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    Rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    Rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    Rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15

                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    Rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    Rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    Rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2

                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    Rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    Rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5

                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    Rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0

                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    Rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12

                },
            }
        }
    }
}
//console.log(gameObj())
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

//console.log(homeTeamName());

function awayTeamName() {
    let object = gameObject()
    return (object["away"]["teamName"])
}
//console.log(awayTeamName())

function numPointsScored(playerName) {
    let object = gameObject()
    if (object.home.players[playerName]) {
        return object.home.players[playerName].points
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName].points
    } else {
        return "No such player in the team"
    }

}

//console.log(numPointsScored('Reggie Evans'))

function shoeSize(playerName) {
    let object = gameObject()
    if (object.home.players[playerName]) {
        return object.home.players[playerName].shoe
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName].shoe
    } else {
        return "No such player in the team"
    }

}
//console.log(shoeSize('DeSagna Diop'))

function teamColors(team) {
    let object = gameObject()
    return object[team].colors


}
//console.log(teamColors("home"))

function teamNames() {
    let object = gameObject()
    let teams = []
    for (let team in object) {
        teams.push(object[team].teamName)
    }
    return teams

}
//console.log(teamNames())

function playerNumbers(teamName) {
    let object = gameObject()
    let jerseyNumbers = []
    if (object.home.teamName === teamName) {
        for (let player in object.home.players) {
            jerseyNumbers.push(object.home.players[player].number)
        }
    } else if (object.away.teamName === teamName) {
        for (let player in object.away.players) {
            jerseyNumbers.push(object.away.players[player].number)
        }

    }
    return jerseyNumbers
}
//console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName) {
    let object = gameObject()
    if (object.home.players[playerName]) {
        return object.home.players[playerName]
    } else if (object.away.players[playerName]) {
        return object.away.players[playerName]
    } else {
        return "No such player"
    }
}
//console.log(playerStats("Jason Terry"))

function bigShoeRebounds() {
    let object = gameObject();

    // Step 1: Store shoe sizes along with player names
    let homePlayersShoeSizes = [];
    let homePlayersMap = {}; // To map shoe sizes to player names

    for (let player in object.home.players) {
        homePlayersShoeSizes.push(object.home.players[player].shoe);
        homePlayersMap[object.home.players[player].shoe] = player; // Store player name associated with shoe size
    }

    let awayPlayersShoeSizes = [];
    let awayPlayersMap = {}; // To map shoe sizes to player names

    for (let player in object.away.players) {
        awayPlayersShoeSizes.push(object.away.players[player].shoe);
        awayPlayersMap[object.away.players[player].shoe] = player; // Store player name associated with shoe size
    }

    // Step 2: Find the largest shoe size
    let largestHomeShoeSize = Math.max(...homePlayersShoeSizes);
    let largestAwayShoeSize = Math.max(...awayPlayersShoeSizes);
    let largestShoeSize = Math.max(largestHomeShoeSize, largestAwayShoeSize);

    // Step 3: Find the player with the largest shoe size
    let playerWithLargestShoe;
    if (homePlayersMap[largestShoeSize]) {
        playerWithLargestShoe = homePlayersMap[largestShoeSize];
    } else {
        playerWithLargestShoe = awayPlayersMap[largestShoeSize];
    }

    // Step 4: Return the player's rebounds (case fixed)
    if (object.home.players[playerWithLargestShoe]) {
        return object.home.players[playerWithLargestShoe].Rebounds;  // Fixed "Rebounds" (was undefined)
    } else if (object.away.players[playerWithLargestShoe]) {
        return object.away.players[playerWithLargestShoe].Rebounds;  // Fixed "Rebounds" (was undefined)
    }

    return "Player not found";
}

console.log(bigShoeRebounds());



