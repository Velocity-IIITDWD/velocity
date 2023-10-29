function createAndAppendMembers(projectApi, p)
{
    const parentDiv = document.createElement('div');
    parentDiv.classList = "team-members-card h-[250px] w-[200px] md:h-[300px] md:w-[250px] bg-[#13011c] rounded-[10px] border-[1px] border-[#6A07CC] border-opacity-[70%] drop-shadow-team-card flex justify-center group relative overflow-hidden";
    projectApi.appendChild(parentDiv);
        
    const innerParentDiv = document.createElement('div');
    innerParentDiv.classList = 'content flex flex-col items-center justify-center gap-2 group-hover:translate-y-[-20px] transition-all duration-[0.5s]';
    parentDiv.append(innerParentDiv);


    const memberImageDiv = document.createElement("div");
    memberImageDiv.classList = "h-[150px] w-[150px] md:h-[200px] md:w-[200px] bg-white rounded-md bg-cover bg-center";
    memberImageDiv.style.backgroundImage = `url(${p.img})`;
    innerParentDiv.appendChild(memberImageDiv);

    const para = document.createElement("p");
    para.classList = "font-roboto";
    para.textContent = p.name;
    innerParentDiv.appendChild(para);

    const memberSocials = document.createElement("div");
    memberSocials.classList = "h-[24px] w-[120px] bg-[#5600e8] rounded-3xl absolute bottom-[30px] group-hover:bottom-0 transition-all duration-[0.5s] ease-in-out opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3";
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

let response, data;

// Fetching from API
// For member section
async function loadMembers(role) {
    const membersDivCarousel = document.getElementById("membersDivCarousel");
    membersDivCarousel.textContent = "";

    const projectApi = document.createElement("div");
    projectApi.classList = "team-members-container flex gap-16 w-[300px*6] animate-scroll";
    membersDivCarousel.appendChild(projectApi);

    try {

        let membersAppended = [];
        
        if(role === undefined || role === 'All')
        {
            membersAppended = [];
            for (let roleMembers in data) {
                for (let p of data[roleMembers]) {
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
                if(membersAppended.includes(p.id))
                {
                    continue;
                }
                membersAppended.push(p.id);
                createAndAppendMembers(projectApi, p);
            }
        }

        if(membersAppended.length * 300 < window.innerWidth) {
            projectApi.classList.remove("animate-scroll");
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function main()
{
    const member_roles = document.querySelectorAll(".member-button");
    
    let chosen_button = "";

    member_roles.forEach((button)=>{
        button.onclick = ()=>{
            member_roles.forEach((btn)=>{
                btn.classList = "member-button relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group cursor-pointer";
                btn.children[0].classList = "w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0";
                btn.children[1].classList = "relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white";
            });
            if(button.id === chosen_button)
            {
                loadMembers();
                chosen_button = "";
            }
            else
            {
                loadMembers(button.id);
                chosen_button = button.id;
                button.classList.remove("bg-white");
                button.classList.add("bg-purple-600");
                button.classList.remove("hover:bg-white");
                button.children[0].classList.remove("bg-purple-600");
                button.children[0].classList.add("bg-white-700");
                button.children[1].classList.remove("text-black");
                button.children[1].classList.add("text-white");
                button.children[1].classList.remove("group-hover:text-white");
                button.children[1].classList.add("group-hover:text-black");
            }
        };
    });

    const selectMembers = document.getElementById("selectMembers");
    selectMembers.addEventListener("change", (event)=>{
        loadMembers(event.target.value);
    });
}

async function run(){
    try{
        response = await fetch("../../api/members.json")
        data = await response.json();
        await loadMembers();
        main();
    } catch (error) {
        console.error(error);
    }
}
export default function membersjs() {
    // members Section
    run();
}