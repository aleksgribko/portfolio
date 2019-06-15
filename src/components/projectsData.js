const projectsData = [
    {
        id: 'project1',
        name: "Brooklyn Outdoor Film Festival",
        technologies: [
            'HTML', 
            'CSS', 
            'Bootstrap 4', 
            'JavaScript'
        ],
        skills: [
            'Make a modern design',
            'Write a project brief',
            'Choose an appropriate technical solution',
            'Detail project specifications',
            'List functionalities requested by the client'
        ],
        git: 'https://github.com/Alezh89/filmfestbrooklyn.com',
        site: 'https://alezh89.github.io/filmfestbrooklyn.com/',
        description: 'Brooklyn Outdoor Film Festival',
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ]
              
    },

    {
        id: 'project2',
        name: "Turn-based war board game",
        technologies: [
            'HTML', 
            'CSS', 
            'Bootstrap 4', 
            'JavaScript',
            'jQuery'
        ],
        skills: [
            'Implement the jQuery library in a web application',
            'Design reusable JavaScript application architecture',
            'Develop an object-oriented JavaScript application',           
        ],
        git: 'https://github.com/Alezh89/war-board-game',
        site: 'https://alezh89.github.io/war-board-game/',
        description: `turn-based strategy "Local war" where two players by means of weapons and other items try to win by making to the other player 100 damage points.
        Each player can move up to 3 cells horisontally or vertically, exept if there is a hindrance, then movements are limited.
        From the beggining each player has the following points: 5 attack with fists and 100 health. Each player can improve his attack points by collecting weapons. Picking up a new weapon will replace the previous one.
        Each player can attack the other player if players are in the neighbouring cells (not diagonally). With granede the attack range increases to 2 cells horisontally or vertically.
        A player can attack only once: before or after move. But if the player had a chance to attack and didn't use it - he can't attack after the move.
        If a player desides to defend himself - he can't move, but receives twice less damage.`,    
        pictureText: [
            'Hello page',
            'Playground'
        ]   
    },

    {
        id: 'project3',
        name: "Restaurant review site",
        technologies: [
            'ReactJS',
            'Google API, Fetch API, JSON',
            'DevTools',
            'HTML, CSS', 
            'Bootstrap 4', 
            'JavaScript',
            'jQuery'
        ],
        skills: [
            'Develop a full JavaScript application according to a specification',
            'Use an external API in JavaScript',
            'Debug an application using DevTools',           
        ],
        git: 'https://github.com/Alezh89/Restaurant-review-site-on-React-',
        site: 'https://restaurantsaround.netlify.com',
        description: `A restaurant review site with google maps API. One side of the website is the map with (1) featured restaurants 
        (with a JSON file) and (2) restaurants around the user. Another side is a list of all restaurants: featured and found for the user. 
        he map is centered on the user and searches for restaurants around him. It should be a button "Find me" somewhere. Each restaurant 
        has a layout with additional information: address, google street view picture and reviews (already existing). User should be able 
        to make a new review and to add a new restaurant by double clicking on the map`,       
        pictureText: [
            'Map page with restaurants',
            'Mobile view, one restaurant'
        ]   
    },

    {
        id: 'project4',
        name: "Portfolio",
        technologies: [
            'ReactJS (with styled components)',    
            'modern JavaScript',          
            'DevTools (improve performance)',
            'HTML, CSS, SASS'                      
        ],
        skills: [
            'Use react for a portfolio website',
            'Implements new instruments (SASS, React styled components)',
            'Improve render time',           
        ],
        git: '',
        site: '',
        description: `This website portfolio that is result of my latest activity and practice. Here I collected exemples of my work and used my ReactJS knowledge`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },
    {
        id: 'project5',
        name: "Wordpress website",
        technologies: [
            'Wordpress',            
            'HTML', 
            'CSS'                      
        ],
        skills: [
            'Write documentation destined for non-technical users',
            'Select a WordPress theme based on client needs',
            'Adapt a WordPress theme to client needs',           
        ],
        git: '',
        site: 'http://dev-petit-chateau.pantheonsite.io',
        description: `This website portfolio that is result of my latest activity and practice. Here I collected exemples of my work and used my ReactJS knowledge`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },
    {
        id: 'project6',
        name: "Maping out a technical solution for the food delivery site",
        technologies: [
            'UML',            
            'MySQL'                                 
        ],
        skills: [
            'Create technical architecture using UML diagrams',
            'Design a database schema',
            'Use a schema when designing a database',           
        ],
        git: 'https://github.com/Alezh89/UML-SQL',
        site: '',
        description: `A young startup called ExpressFood delivers their own high-quality meals to residences with their team of delivery bikers.
        Every day, ExpressFood creates 2 main dishes and 2 desserts. These 2 main dishes are stored and then given to delivery people who bike to the food to the residence that requested it. 
        On its website, ExpressFood allows clients to order one or multiple dishes and desserts. There are no fees for delivery. Menu items change every day.
        Once a client submits their order, they see a page displaying if the order has gone out for delivery yet, as well as an estimate for their meal's arrival time.
        ExpressFood needs to make a database for them. It will need to contain:
         - A list of clients
         - A list of the different daily menu items
         - A list of delivery people
         - An order history for each client
        Make a UML diagram to model this technical architecture and the actual MySQL database and fill it up with information`,       
        pictureText: [
            'UML diagram',
            'SQL database'
        ] 
    },

    {
        id: 'project7',
        name: "Working with an existing project",
        technologies: [
            'Jasmine (JS testing framework)',            
            'DevTools, performance optimization',
            'JS'

        ],
        skills: [
            'Optimize the performance of a project using DevTools',
            'Implement unit and functional tests in a web application',
            'Take over an existing JavaScript project',           
        ],
        git: 'https://github.com/Alezh89/Todo-list',
        site: '',
        description: `This website portfolio that is result of my latest activity and practice. Here I collected exemples of my work and used my ReactJS knowledge`,       
        pictureText: [
            'Jasmine testing framework',
            'Technical documentation'
        ] 
    },

    {
        id: 'project8',
        name: "Quotation generator",
        technologies: [
            'HTML, CSS',             
            'JS'
        ],
        skills: [
            'Design an algorithm to meet a specification',
            'Implement the JavaScript syntax in a program',                  
        ],
        git: 'https://github.com/Alezh89/quotegenerator',
        site: 'https://alezh89.github.io/quotegenerator/',
        description: `This website portfolio that is result of my latest activity and practice. Here I collected exemples of my work and used my ReactJS knowledge`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },

    ];

export default projectsData;