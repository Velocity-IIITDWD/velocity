function createAndAppendMembers(projectApi, p)
{
    const parentDiv = document.createElement('div');
    parentDiv.classList =
        "team-members-card h-[250px] w-[200px] md:h-[300px] md:w-[250px] bg-[#13011c] rounded-[10px] border-[1px] border-[#6A07CC] border-opacity-[70%] drop-shadow-team-card flex justify-center group relative overflow-hidden";
    projectApi.appendChild(parentDiv);
        
    const innerParentDiv = document.createElement('div');
    innerParentDiv.classList =
        'content flex flex-col items-center justify-center gap-2 group-hover:translate-y-[-20px] transition-all duration-[0.5s]';
    parentDiv.append(innerParentDiv);


    const memberImageDiv = document.createElement("div");
    memberImageDiv.classList = "h-[150px] w-[150px] md:h-[200px] md:w-[200px] bg-white rounded-sm";
    innerParentDiv.appendChild(memberImageDiv);

    const image = document.createElement("img");
    image.setAttribute("src", p.img);
    memberImageDiv.appendChild(image);

    const para = document.createElement("p");
    para.classList = "font-roboto";
    para.textContent = p.name;
    innerParentDiv.appendChild(para);

    const memberSocials = document.createElement("div");
    memberSocials.classList = "h-[24px] w-[120px] bg-[#5600e8] rounded-3xl absolute -bottom-[30px] group-hover:bottom-0 transition-all duration-[0.5s] ease-in-out opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3";
    innerParentDiv.appendChild(memberSocials);

    const github = document.createElement("a");
    github.href = p.githubLink;
    memberSocials.appendChild(github);

    const githubIcon = document.createElement("img");
    githubIcon.setAttribute("src", "../../images/socials/github.png");
    githubIcon.classList = "h-6 w-6";
    github.appendChild(githubIcon);

    const linkedin = document.createElement("a");
    linkedin.href = p.linkedinLink;
    memberSocials.appendChild(linkedin);

    const linkedinIcon = document.createElement("img");
    linkedinIcon.setAttribute("src", "../../images/socials/linkedin.png");
    linkedinIcon.classList = "h-6 w-6";
    linkedin.appendChild(linkedinIcon);

    const gmail = document.createElement("a");
    gmail.href = p.gmailLink;
    memberSocials.appendChild(gmail);

    const gmailIcon = document.createElement("img");
    gmailIcon.setAttribute("src", "../../images/socials/gmail-logo.png");
    gmailIcon.classList = "h-6 w-6";
    gmail.appendChild(gmailIcon);
}

// Fetching from API
// For member section
async function loadMembers(role) {
    const membersDivCarousel = document.getElementById("membersDivCarousel");
    membersDivCarousel.textContent = "";

    const projectApi = document.createElement("div");
    projectApi.classList = "team-members-container flex gap-16 w-[300px*6] animate-scroll";
    membersDivCarousel.appendChild(projectApi);

    try {
        const response = await fetch("../../api/members.json");
        const data = await response.json();
        let membersAppended = [];
        
        if(role === undefined)
        {
            membersAppended = [];
            for (let roleMembers in data) {
                for (let p of data[roleMembers]) {
                    console.log(p.name);
                    if(membersAppended.includes(p.id))
                    {
                        continue;
                    }
                    membersAppended.push(p.id);
                    createAndAppendMembers(projectApi, p);
                }
            }
        }
        else
        {
            membersAppended = [];
            if(data[role]){}
            for (let p of data[role]) { 
                console.log(p.name);  
                if(membersAppended.includes(p.id))
                {
                    continue;
                }
                membersAppended.push(p.id);
                createAndAppendMembers(projectApi, p);
            }
        }
                
    } catch (error) {
        console.error('Error:', error);
    }
}

function main()
{
    const isMediumWindow = window.innerWidth < 992;
    if(!isMediumWindow)
    {
        const nonTechMembers = document.getElementById("nonTechMembers");
        const webDevMembers = document.getElementById("webDevMembers");
        const appDevMembers = document.getElementById("appDevMembers");
        const techLeadMembers = document.getElementById("techLeadMembers");
        const selectMembers = document.getElementById("selectMembers");
        const heading = document.getElementById("heading");
    
        heading.addEventListener("click", ()=>{loadMembers()});
        techLeadMembers.addEventListener("click", ()=>{loadMembers("Tech")});
        webDevMembers.addEventListener("click", ()=>{loadMembers("webDev")});
        appDevMembers.addEventListener("click", ()=>{loadMembers("appDev")});
        nonTechMembers.addEventListener("click", ()=>{loadMembers("nonTech")});
    }
    else
    {
        const selectMembers = document.getElementById("selectMembers");
        selectMembers.addEventListener("change", (event)=>{
            loadMembers(event.target.value);
        })
    };
}

export default function membersjs() {
// members Section
loadMembers().then(()=>
{
    main();
});
}