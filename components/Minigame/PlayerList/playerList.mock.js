const mockPlayers = [
  {
    first_name: "Stephen",
    fixture: {
      _members: ["112160"],
      _ref: "fixtures.id"
    },
    fppg: 47.94303797468354,
    id: "15475-9524",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/9524.png",
        width: 200
      }
    },
    injured: false,
    injury_details: "knee",
    injury_status: "o",
    last_name: "Curry",
    news: {
      latest: "2016-05-02T18:35:15Z"
    },
    played: 79,
    player_card_url: "https://www.fanduel.com/e/Player/9524/Stats/15475",
    position: "PG",
    removed: false,
    salary: 10600,
    starting_order: null,
    team: {
      _members: ["687"],
      _ref: "teams.id"
    }
  },
  {
    first_name: "Draymond",
    fixture: {
      _members: ["112160"],
      _ref: "fixtures.id"
    },
    fppg: 38.9604938271605,
    id: "15475-15860",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/15860.png",
        width: 200
      }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Green",
    news: {
      latest: "2016-05-02T01:24:54Z"
    },
    played: 81,
    player_card_url: "https://www.fanduel.com/e/Player/15860/Stats/15475",
    position: "PF",
    removed: false,
    salary: 9300,
    starting_order: null,
    team: {
      _members: ["687"],
      _ref: "teams.id"
    }
  },
  {
    first_name: "Damian",
    fixture: {
      _members: ["112160"],
      _ref: "fixtures.id"
    },
    fppg: 39.37866666666667,
    id: "15475-20848",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png",
        width: 200
      }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Lillard",
    news: {
      latest: "2016-05-02T01:13:36Z"
    },
    played: 75,
    player_card_url: "https://www.fanduel.com/e/Player/20848/Stats/15475",
    position: "PG",
    removed: false,
    salary: 8400,
    starting_order: null,
    team: {
      _members: ["703"],
      _ref: "teams.id"
    }
  },
  {
    first_name: "Hassan",
    fixture: {
      _members: ["112164"],
      _ref: "fixtures.id"
    },
    fppg: 35.75342465753425,
    id: "15475-12363",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/12363.png",
        width: 200
      }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Whiteside",
    news: {
      latest: "2016-05-02T01:04:53Z"
    },
    played: 73,
    player_card_url: "https://www.fanduel.com/e/Player/12363/Stats/15475",
    position: "C",
    removed: false,
    salary: 8000,
    starting_order: null,
    team: {
      _members: ["693"],
      _ref: "teams.id"
    }
  },
  {
    first_name: "Klay",
    fixture: {
      _members: ["112160"],
      _ref: "fixtures.id"
    },
    fppg: 30.839999999999996,
    id: "15475-14509",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/14509.png",
        width: 200
      }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Thompson",
    news: {
      latest: "2016-05-02T01:29:23Z"
    },
    played: 80,
    player_card_url: "https://www.fanduel.com/e/Player/14509/Stats/15475",
    position: "SG",
    removed: false,
    salary: 8000,
    starting_order: null,
    team: {
      _members: ["687"],
      _ref: "teams.id"
    }
  },
  {
    first_name: "Kyle",
    fixture: {
      _members: ["112164"],
      _ref: "fixtures.id"
    },
    fppg: 38.5974025974026,
    id: "15475-9535",
    images: {
      default: {
        height: 200,
        url: "https://d17odppiik753x.cloudfront.net/playerimages/nba/9535.png",
        width: 200
      }
    },
    injured: false,
    injury_details: null,
    injury_status: null,
    last_name: "Lowry",
    news: {
      latest: "2016-04-30T14:04:05Z"
    },
    played: 77,
    player_card_url: "https://www.fanduel.com/e/Player/9535/Stats/15475",
    position: "PG",
    removed: false,
    salary: 7800,
    starting_order: null,
    team: {
      _members: ["706"],
      _ref: "teams.id"
    }
  }
];

const mockTeams = [
  {
    city: "Golden State",
    code: "GS",
    full_name: "Golden State Warriors",
    id: "687",
    name: "Warriors"
  },
  {
    city: "Miami",
    code: "MIA",
    full_name: "Miami Heat",
    id: "693",
    name: "Heat"
  },
  {
    city: "Portland",
    code: "POR",
    full_name: "Portland Trail Blazers",
    id: "703",
    name: "Trail Blazers"
  },
  {
    city: "Toronto",
    code: "TOR",
    full_name: "Toronto Raptors",
    id: "706",
    name: "Raptors"
  }
];

module.exports = {
  mockPlayers,
  mockTeams
};
