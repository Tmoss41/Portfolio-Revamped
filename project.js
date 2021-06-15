const projects = [{
    name: 'Casino Simulator',
    language: 'Ruby'
    },
    {
        name: 'LocateAParty',
        language: 'Ruby on Rails'
    },
    {
        name: "LabConnect",
        language: 'Ruby on Rails'
    }
]


    for (const element of projects){
        const projectCard = document.createElement("figure")
        const title = document.createElement("h1")
        const content = document.createTextNode(element.name)
        title.appendChild(content)
        projectCard.appendChild(title)
        const test = document.getElementById('test')
        const section = document.getElementById('project-scroll')
        projectCard.style.borderRadius = '15px'
        section.insertBefore(projectCard, test);
    }