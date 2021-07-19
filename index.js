$(document).ready(function(){
    var finalData =[
        {
            teamId: 0,
            teamShortName: "MI",
            teamName: "Mumbai Indians",
            teamSlogan:"Duniya Hila Denge Hum...",
            teamLogo: "./images/team1.png",
            ownerName: "Mukesh Ambani",
            mentorName: "Rahul Sanghvi",
            coachName: " Mahela Jayawardene",
            captainName: "Rohit Sharma",
            viceCaptaineName:"Kieron Pollard",
            championCount: 5,
            playerCount: 23, 
            bestPerfomance: "Winner- 2013, 2015, 2017, 2019, 2020",
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Rohit Sharma",
                    image : "./images/MI/1.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "16.50 Cr",
                    isPlaying: true,
                    role : "Batsman",
                    style: "Right Handed",
                },
                {
                    playerid: 2,
                    playerName: "Quintion De Kock",
                    image : "./images/MI/2.webp",
                    from: "MI",
                    isOverSea: true,
                    price: "2.25 Cr",
                    isPlaying: true,
                    role : "Batsman",
                    style: "Left Handed",
                },
                {
                    playerid: 3,
                    playerName: "Ishan Kishan",
                    image : "./images/MI/3.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Batsman",
                    style: "Left Handed",
                },
                {
                    playerid: 4,
                    playerName: "SuryaKumar Yadav",
                    image : "./images/MI/4.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Batsman",
                    style: "Right Handed",
                },
                {
                    playerid: 5,
                    playerName: "Hardik Pandya",
                    image : "./images/MI/5.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "11.25 Cr",
                    isPlaying: true,
                    role : "Allrounder",
                    style: "Right Handed",
                },
                {
                    playerid: 6,
                    playerName: "Kieron Pollard",
                    image : "./images/MI/6.webp",
                    from: "MI",
                    isOverSea: true,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Allrounder",
                    style: "Right Handed",
                },
                {
                    playerid: 7,
                    playerName: "Kunal Pandya",
                    image : "./images/MI/7.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Allrounder",
                    style: "Left Handed",
                },
                {
                    playerid: 8,
                    playerName: "Coulter Nile",
                    image : "./images/MI/8.webp",
                    from: "MI",
                    isOverSea: true,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Bowler",
                    style: "Right Handed",
                },
                {
                    playerid: 9,
                    playerName: "Rahul Chahar",
                    image : "./images/MI/9.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Bowler",
                    style: "Left Handed",
                },
                {
                    playerid: 10,
                    playerName: "Jusprit Bumrah",
                    image : "./images/MI/10.webp",
                    from: "MI",
                    isOverSea: false,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Bowler",
                    style: "Right Handed",
                },
                {
                    playerid: 11,
                    playerName: "Trent Bold",
                    image : "./images/MI/11.webp",
                    from: "MI",
                    isOverSea: true,
                    price: "4.25 Cr",
                    isPlaying: true,
                    role : "Bowler",
                    style: "Left Handed",
                }
            ]
        },
        {
            teamId: 1,
            teamShortName: "CSK",
            teamName: "Chennai Super Kings",
            teamSlogan:"Yellove and Whistlepodu",
            teamLogo: "./images/team2.png",
            ownerName: "The India Cements Ltd",
            mentorName: "M S Dhoni",
            coachName: "Stephen Fleming",
            championCount: 3,
            playerCount: 21, 
            captainName: "Mahendra Singh Dhoni",
            viceCaptaineName:" Suresh Raina",
            bestPerfomance: "Winner-2009, 2012, 2018", //Run-up-son, semifinal-200
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Faf du Plessis" ,
                    image : "https://static.iplt20.com/players/210/24.png",
                    from: "CSK",
                    isOverSea: true, //true or false
                    price: "1.6 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 2,
                    playerName: "Ruturaj Gaikwad",
                    image : "https://static.iplt20.com/players/210/5443.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "1 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 3,
                    playerName: "Suresh Raina",
                    image : "https://static.iplt20.com/players/210/14.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "10 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 4,
                    playerName: "Moeen Ali",
                    image : "https://static.iplt20.com/players/210/1735.png",
                    from: "CSK",
                    isOverSea: true, //true or false
                    price: "5.4 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed and Right-arm Off-break", 
                },
                {
                    playerid: 5,
                    playerName: "Ambati Rayudu",
                    image : "https://static.iplt20.com/players/210/100.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "7.3 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Ravindra Jadeja",
                    image : "https://static.iplt20.com/players/210/9.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "8.5 crore",
                    isPlaying: false, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed and Slow left-arm orthodox", 
                },
                {
                    playerid: 7,
                    playerName: "MS dhoni",
                    image : "https://static.iplt20.com/players/210/1.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "14 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 8,
                    playerName: "Sam Curran",
                    image : "https://static.iplt20.com/players/210/2939.png",
                    from: "CSK",
                    isOverSea: true, //true or false
                    price: "8 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 9,
                    playerName: "Lungi Ngidi",
                    image : "https://static.iplt20.com/players/210/3746.png",
                    from: "CSK",
                    isOverSea: true, //true or false
                    price: "3 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-arms fast", 
                },
                {
                    playerid: 10,
                    playerName: "Deepak Chahar",
                    image : "https://static.iplt20.com/players/210/140.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "6 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-arms fast", 
                },
                {
                    playerid: 11,
                    playerName: "Shardul Thakur",
                    image : "https://static.iplt20.com/players/210/1745.png",
                    from: "CSK",
                    isOverSea: false, //true or false
                    price: "5 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-arms fast", 
                }
            
            ]
        },
        {
            teamId: 2,
            teamShortName: "DC",
            teamName: "Delhi Capitals",
            teamSlogan:" This is New Delhi",
            teamLogo: "./images/team3.png",
            ownerName: "GMR Group, JSW Group",
            mentorName: "Sheyas Ayar",
            coachName: "Ricky Ponting",
            championCount: 0,
            playerCount: 27, 
            captainName: "Rishabh Pant",
            viceCaptaineName:"Shikhar Dhawan",
            bestPerfomance: "2021 Runners-up", //Run-up-son, semifinal-200
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Prithvi Shaw",
                    image : "https://static.iplt20.com/players/284/3764.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "4 cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 2,
                    playerName: "Shikhar Dhawan",
                    image : "https://static.iplt20.com/players/284/41.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "12 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 3,
                    playerName: "Steve Smith",
                    image : "https://static.iplt20.com/players/284/271.png",
                    from: "DC",
                    isOverSea: true, //true or false
                    price: "8 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 4,
                    playerName: "Rishabh Pant",
                    image : "https://static.iplt20.com/players/284/2972.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "14 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 5,
                    playerName: "Shimron Hetmyer",
                    image : "https://static.iplt20.com/players/284/1705.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "4 crore",
                    isPlaying: false, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Marcus Stoinis",
                    image : "https://static.iplt20.com/players/284/964.png",
                    from: "DC",
                    isOverSea: true, //true or false
                    price: "6 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 7,
                    playerName: "Axar Patel",
                    image : "https://static.iplt20.com/players/284/1113.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "10 crore",
                    isPlaying: false, // ture or false
                    role : "Allrounder", 
                    style: "Left-handed", 
                },
                {
                    playerid: 8,
                    playerName: "Lalit Yadav",
                    image : "https://static.iplt20.com/players/284/6870.png",
                    from: "DC",
                    isOverSea: false, 
                    price: "2 crore",
                    isPlaying: true, 
                    role : "Allrounder", 
                    style: "Right Handed", 
                },
                {
                    playerid: 9,
                    playerName: "Kagiso Rabada",
                    image : "https://static.iplt20.com/players/284/1664.png",
                    from: "DC",
                    isOverSea: true, 
                    price: "8 crore",
                    isPlaying: true, 
                    role : "Bowler",
                    style: "Left-handed", 
                },
                {
                    playerid: 10,
                    playerName: "Ishant Sharma",
                    image : "https://static.iplt20.com/players/284/38.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "1.5 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 11,
                    playerName: "Avesh Khan",
                    image : "https://static.iplt20.com/players/284/1561.png",
                    from: "DC",
                    isOverSea: false, //true or false
                    price: "1 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                }
            
            ]
        },
        {
            teamId: 3,
            teamShortName: "RR",
            teamName: "Rajasthan Royals",
            teamSlogan:"Halla Bol",
            teamLogo: "./images/team4.png",
            ownerName: "Manoj Badale,Lachlan Murdoch,RedBird Capital Partners",
            mentorName: "Rahul Dravid",
            coachName: "Trevor Penney",
            championCount: 1,
            playerCount: 26, 
            captainName: "Sanju Samson",
            viceCaptaineName:"Jos Buttler",
            bestPerfomance: "Winner-2008", 
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Jos Buttler",
                    image : "https://static.iplt20.com/players/210/509.png",
                    from: "RR",
                    isOverSea: true, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 2,
                    playerName: "Yashasvi Jaiswal",
                    image : "https://static.iplt20.com/players/210/13538.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 3,
                    playerName: "Sanju Samson",
                    image : "https://static.iplt20.com/players/210/258.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed",      
                },
                {
                    playerid: 4,
                    playerName: "Riyan Parag",
                    image : "https://static.iplt20.com/players/210/4445.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 5,
                    playerName: "David Miller",
                    image : "https://static.iplt20.com/players/210/187.png",
                    from: "RR",
                    isOverSea: true, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Anuj Rawat",
                    image : "https://static.iplt20.com/players/210/10788.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 7,
                    playerName: "Chris Morris",
                    image : "https://static.iplt20.com/players/210/836.png",
                    from: "RR",
                    isOverSea: true, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 8,
                    playerName: "Rahul Tewatia",
                    image : "https://static.iplt20.com/players/210/1749.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 9,
                    playerName: "Chetan Sakariya",
                    image : "https://static.iplt20.com/players/210/11062.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 10,
                    playerName: "Mustafizur Rahman",
                    image : "https://static.iplt20.com/players/210/1594.png",
                    from: "RR",
                    isOverSea: true, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 11,
                    playerName: "Kartik Tyagi",
                    image : "https://static.iplt20.com/players/210/10059.png",
                    from: "RR",
                    isOverSea: false, //true or false
                    price: "",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                }
            
            ]
        },
        {
            teamId: 4,
            teamShortName: "KKR",
            teamName: "Kolkata Knight Riders",
            teamSlogan:"Korbo, Lorbo, Jeetbo Re",
            teamLogo: "./images/team5.png",
            ownerName: "Knight Riders Group,Red Chillies Entertainment, Mehta Group",
            mentorName: "Gautham Gambhir",
            coachName: "Brendon McCullum",
            championCount:2,
            playerCount: 22, 
            captainName: "Eoin Morgan",
            viceCaptaineName:"Dinesh Karthik",
            bestPerfomance: "Winner 2012, 2014",
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Nitish Rana",
                    image : "https://www.kkr.in/static-assets/images/players/2020/63649.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "5 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                    description: "Hi, my name is Nitish Rana. I was born on 27 December 1993 (age 27)."
                },
                {
                    playerid: 2,
                    playerName: "Shubman Gill",
                    image : "https://www.kkr.in/static-assets/images/players/2020/66818.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "4 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Shubman Gill. I was born on 8 September 1999 (age 21)."
                },
                {
                    playerid: 3,
                    playerName: "Rahul Tripathi",
                    image : "https://www.kkr.in/static-assets/images/players/2020/41229.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "3 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Rahul Tripathi. I was born on 2 March 1991 (age 30)."
                },
                {
                    playerid: 4,
                    playerName: "Eoin Morgan",
                    image : "https://www.kkr.in/static-assets/images/players/2020/3823.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: true, //true or false
                    price: "9 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                    description: "Hi, my name is Eoin Morgan. I was born on 10 September 1986 (age 34)."
                },
                {
                    playerid: 5,
                    playerName: "Shakib Al Hasan",
                    image : "https://www.kkr.in/static-assets/images/players/2020/3782.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: true, //true or false
                    price: "6 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                    description: "Hi, my name is Shakib Al Hasan. I was born on 24 March 1987 (age 34)."
                },
                {
                    playerid: 6,
                    playerName: "Dinesh Karthik",
                    image : "https://www.kkr.in/static-assets/images/players/2020/3632.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "8 crore",
                    isPlaying: true, // ture or false
                    role : "Bats-man", //Bats-Man or Bowler or All-rounder
                    style: "Righthanded", 
                    description: "Hi, my name is Dinesh Karthik. I was born on 1 June 1985 (age 36)."
                },
                {
                    playerid: 7,
                    playerName: "Andre Russell",
                    image : "https://www.kkr.in/static-assets/images/players/2020/12047.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: true, //true or false
                    price: "12 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Andre Russell. I was born on 29 April 1988 (age 33)."
                },
                {
                    playerid: 8,
                    playerName: "Pat Cummins",
                    image : "https://www.kkr.in/static-assets/images/players/2020/56964.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: true, //true or false
                    price: "3 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Pat Cummins. I was born on 8 May 1993 (age 28)."
                },
                {
                    playerid: 9,
                    playerName: "Harbhajan Singh",
                    image : "https://www.kkr.in/static-assets/images/players/2020/1367.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "3.5 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Harbhajan Singh. I was born on 3 July 1980 (age 41)."
                },
                {
                    playerid: 10,
                    playerName: "Varun Chakravarthy",
                    image : "https://www.kkr.in/static-assets/images/players/2020/67469.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "2 crore",
                    isPlaying: false, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Varun Chakravarthy. I was born on 29 August 1991 (age 29)."
                },
                {
                    playerid: 11,
                    playerName: "Prasidh Krishna",
                    image : "https://www.kkr.in/static-assets/images/players/2020/65702.png?v=3&w=200",
                    from: "KKR",
                    isOverSea: false, //true or false
                    price: "1.5 crore",
                    isPlaying: false, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is Prasidh Krishna. I was born on 19 February 1996 (age 25)."
                }
            
            ]
        },
        {
            teamId: 5,
            teamShortName: "RCB",
            teamName: "Royal Challengers Bangalore",
            teamSlogan:"Ee Sala Cup Namde",
            teamLogo: "./images/team6.png",
            ownerName: "United Spirits",
            mentorName: "Rahul Bhatia",
            coachName: "Simon Katich",
            championCount: 0,
            playerCount: 19, 
            captainName: "Virat Kohli",
            viceCaptaineName:"AB de Villiers",
            bestPerfomance: " 2009 Runners-up, 2011 Runners-up, 2016 Runners-up ",
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Devdutt Padikkal",
                    image : "./images/RCB/1.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "1.00cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 2,
                    playerName: "Virat Kohli",
                    image : "./images/RCB/2.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "18.00 cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 3,
                    playerName: "AB de Villiers",
                    image : "./images/RCB/3.png",
                    from: "RCB",
                    isOverSea: true, //true or false
                    price: "12.00 cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 4,
                    playerName: "Glenn Maxwell",
                    image : "./images/RCB/4.png",
                    from: "RCB",
                    isOverSea: true, //true or false
                    price: "14.25 cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 5,
                    playerName: "Washington Sundar",
                    image : "./images/RCB/5.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "1.8 cr",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Dan Christian",
                    image : "./images/RCB/6.png",
                    from: "RCB",
                    isOverSea: true, //true or false
                    price: "2 cr",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 7,
                    playerName: "Kyle Jamieson",
                    image : "./images/RCB/7.png",
                    from: "RCB",
                    isOverSea: true, //true or false
                    price: "12.34 cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed-fast", 
                },
                {
                    playerid: 8,
                    playerName: "Harshal Patel",
                    image : "./images/RCB/8.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "3.00 cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 9,
                    playerName: "Navdeep Saini",
                    image : "./images/RCB/9.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "1.00 cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 10,
                    playerName: "Yuzvendra Chahal",
                    image : "./images/RCB/10.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "5.50 cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 11,
                    playerName: "Mohammed Siraj",
                    image : "./images/RCB/11.png",
                    from: "RCB",
                    isOverSea: false, //true or false
                    price: "1.00 cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                }
            
            ]
        },
        {
            teamId: 6,
            teamShortName: "PBKS",
            teamName: "Punjab Kings",
            teamSlogan:" Sadda panjab",
            teamLogo: "./images/team7.png",
            ownerName: "Dabur,(Wadia Group,PZNZ Media,Preity Zinta,Apeejay Surrendra Group)",
            mentorName: "Anil Kumble",
            coachName: "Anil Kumble",
            championCount: 0,
            playerCount: 24, 
            captainName: "Mayank Agarwal",
            viceCaptaineName:"Chris Gayle",
            bestPerfomance:"semifinalist-2008,Runners-up 2014",
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "Chris Gayle",
                    image : "https://static.iplt20.com/players/284/236.png",
                    from: "PBKS",
                    isOverSea: true, //true or false
                    price: "12cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 2,
                    playerName: "Mayank Agarwal",
                    image : "https://static.iplt20.com/players/284/158.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "12cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 3,
                    playerName: "Sarfaraz Khan",
                    image : "https://static.iplt20.com/players/284/1564.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "4 cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 4,
                    playerName: "Mandeep Singh",
                    image : "https://static.iplt20.com/players/284/72.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "1cr",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 5,
                    playerName: "Ishan Porel",
                    image : "https://static.iplt20.com/players/284/3777.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "1cr ",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Ravi Bishnoi",
                    image : "https://static.iplt20.com/players/284/19351.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "1cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 7,
                    playerName: "Mohammed Shami",
                    image : "https://static.iplt20.com/players/284/94.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "8cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 8,
                    playerName: "Arshdeep Singh",
                    image : "https://static.iplt20.com/players/284/4698.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "2cr",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 9,
                    playerName: "Murugan Ashwin",
                    image : "https://static.iplt20.com/players/284/3187.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "2cr",
                    isPlaying: false, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 10,
                    playerName: "Harpreet Brar",
                    image : "https://static.iplt20.com/players/284/5441.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "1cr ",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 11,
                    playerName: "Darshan Nalkande",
                    image : "https://static.iplt20.com/players/284/4447.png",
                    from: "PBKS",
                    isOverSea: false, //true or false
                    price: "1cr",
                    isPlaying: false, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                }
            
            ]
        },
        {
            teamId: 7,
            teamShortName: "SRH",
            teamName: "Sunrisers Hyderabad",
            teamSlogan:"#OrangeorNothing",
            teamLogo: "./images/team8.png",
            ownerName: "SUN Group",
            mentorName: "Ashish Nehra",
            coachName: "Trevor Bayliss",
            championCount: 1,
            playerCount: 23, 
            captainName: "Kane Williamson",
            viceCaptaineName:"Jonny Bairstow",
            bestPerfomance: "Winner-2016, 2018 Runners-up", //Run-up-son, semifinal-200
            playerDetail: [
                {
                    playerid: 1,
                    playerName: "David Warner",
                    image : "https://static.iplt20.com/players/284/170.png",
                    from: "SRH",
                    isOverSea: true, //true or false
                    price: "12 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                    description: "Hi, my name is (playername). I was born on (dob exam April 30, 1999)."
                },
                {
                    playerid: 2,
                    playerName: "Jonny Bairstow",
                    image : "https://static.iplt20.com/players/284/506.png",
                    from: "SRH",
                    isOverSea: true, //true or false
                    price: "10 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is (playername). I was born on (dob exam April 30, 1999)."
                },
                {
                    playerid: 3,
                    playerName: "Manish Pandey",
                    image : "https://static.iplt20.com/players/284/123.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "5 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                    description: "Hi, my name is (playername). I was born on (dob exam April 30, 1999)."
                },
                {
                    playerid: 4,
                    playerName: "Kane Williamson",
                    image : "https://static.iplt20.com/players/284/440.png",
                    from: "SRH",
                    isOverSea: true, //true or false
                    price: "7 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 5,
                    playerName: "Kedar Jadhav",
                    image : "https://static.iplt20.com/players/284/297.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "3 crore",
                    isPlaying: true, // ture or false
                    role : "Batsman", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 6,
                    playerName: "Vijay Shankar",
                    image : "https://static.iplt20.com/players/284/1083.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "2 crore",
                    isPlaying: true, // ture or false
                    role : "Allrounder", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 7,
                    playerName: "Rashid Khan",
                    image : "https://static.iplt20.com/players/284/2885.png",
                    from: "SRH",
                    isOverSea: true, //true or false
                    price: "6 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 8,
                    playerName: "Jagadeesha Suchith",
                    image : "https://static.iplt20.com/players/284/2741.png",
                    from: "SRH",
                    isOverSea: true, //true or false
                    price: "1 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Left-handed", 
                },
                {
                    playerid: 9,
                    playerName: "Siddarth Kaul",
                    image : "https://static.iplt20.com/players/284/1086.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "2 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 10,
                    playerName: "Khaleel Ahmed",
                    image : "https://static.iplt20.com/players/284/2964.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "4 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                },
                {
                    playerid: 11,
                    playerName: "Sandeep Sharma",
                    image : "https://static.iplt20.com/players/284/1112.png",
                    from: "SRH",
                    isOverSea: false, //true or false
                    price: "6 crore",
                    isPlaying: true, // ture or false
                    role : "Bowler", //Bats-Man or Bowler or All-rounder
                    style: "Right-handed", 
                }
            
            ]
        }    
    ]



    for(var i =0; i<finalData.length; i++){
        $("#team-card-holders-one").append(teamCardHolder(finalData[i]));   
    }

function teamCardHolder(data){
    var teamCard = $("<article>").addClass("team-card").attr("id", data.teamId);
    var teamCardImage = $("<figure>").append($("<img>").attr("src", data.teamLogo));
    var teamCardBody = $("<div>").addClass("team-card-body");
    var  spanTeamName = $("<span>").html(data.teamName.split(" ")[0]).addClass("team-first-name");
    var restTeamName = data.teamName.split(" ").splice(1, 3).join(" ")
    var teamname = $("<h2>").append(spanTeamName, $("<br>"), restTeamName)
    teamCardBody.append(teamname, $("<h6>").html(data.teamSlogan), $("<h6>").html(data.bestPerfomance), $("<h6>").html("Total Player : " +data.playerCount));
    teamCard.append(teamCardImage, teamCardBody);
    teamCard.click(function(){
        localStorage.setItem("teamID", JSON.stringify($(this).attr("id")));
        $(location).attr("href", "./teamdetail.html");
    });
    return teamCard;
}


    var playerData = finalData[JSON.parse(localStorage.getItem("teamID"))];
    $("#team-name").html(playerData.teamName + " "+ "("+playerData.teamShortName+")");
    $("#team-logo").attr("src", playerData.teamLogo);
    $("#owner-name").html(playerData.ownerName);
    $("#coach-name").html(playerData.coachName);
    $("#mentor-name").html(playerData.mentorName);
    $("#performance").html(playerData.bestPerfomance);
    $("#captain-name").html(playerData.captainName);
    $("#vc-name").html(playerData.viceCaptaineName);
    $("#pl-count").html(playerData.playerCount);
    if(playerData.championCount){
        var titleCounter = $("<div>").append($("<p>").append("No. of Title win"), $("<p>").append(":"), $("<p>").append(playerData.championCount));
        $("#teamdetail-info-one").append(titleCounter);
    }

    var captainGlobal = playerData.captainName;
    for(var i =0; i<playerData.playerDetail.length; i++){
        if(playerData.playerDetail[i].role === "Batsman"){
            $("#batsman-card").append(playerCardHolder(playerData.playerDetail[i]));
        }else if(playerData.playerDetail[i].role === "Allrounder"){
            $("#all-round-card").append(playerCardHolder(playerData.playerDetail[i]));
        }else{
            $("#bowler-card").append(playerCardHolder(playerData.playerDetail[i]));
        }
    }
    
    function playerCardHolder(value){
        var playerImage = $("<img>").attr("src", value.image)
        var playerName = $("<div>").html($("<h4>").html(value.playerName)).addClass("player-name");
        var playerCardFigure = $("<figure>").append(playerImage, playerName);
        var playerCard = $("<article>").addClass("player-card");
        var style = $("<p>").html(value.style +" "+value.role);
        var playing = value.isPlaying ? $("<p>").html("Playing") :  $("<p>").html("Banched");
        var captainSign = captainGlobal === value.playerName ? $("<div>").html("C").addClass("captain-sign") : "";
        var overSea = value.isOverSea ? $("<div>").html($("<i>").addClass("fas fa-plane")).addClass("over-sea-sign") : "";
        playerCard.append(playerCardFigure, style, playing, $("<h6>").html("Price : "+value.price), captainSign, overSea)
        return playerCard;

    } 

    $(".player").click(() => {
        var inputVal = $(".input-search").val();
        var filterPlayerDetails = playerData.playerDetail.filter((item) => item.playerName.includes(inputVal));
        $("#display-none").addClass("display-none");
        $(".teamdetails-section-three h4").html("Search Result")
        for(var i =0; i<filterPlayerDetails.length; i++){
            console.log((filterPlayerDetails.length) ? $(".team-player-card").append(playerCardHolder(filterPlayerDetails[i])): $("<h3>").html("No result"));
        }
    });

    $(".team").click(() => {
        var inputVal = $(".input-search").val();
        finalData = finalData.filter((item) => item.teamName.includes(inputVal));
        $("#team-card-holders-one").addClass("display-none");   
        for(var i =0; i<finalData.length; i++){
            $("#team-card-holders-two").append(teamCardHolder(finalData[i]));   
        }
    });
});
