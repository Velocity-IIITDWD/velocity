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

    if(p.isLead) {
        const title = document.createElement("p");
        title.classList = "font-roboto";
        title.textContent = p.title;
        innerParentDiv.appendChild(title);
    }

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

let response, data, roles, jsonData;

async function loadMembers(role) {
    const membersDivCarousel = document.getElementById("membersDivCarousel");
    membersDivCarousel.textContent = "";

    const projectApi = document.createElement("div");
    projectApi.classList = "team-members-container flex gap-16 w-[300px*6] no-animate-scroll";
    membersDivCarousel.appendChild(projectApi);
    
    let membersAppended = 0;

    
    try {    
        if (role === undefined || role === 'All')
        {
            for (let p of data) {
                membersAppended++;
                createAndAppendMembers(projectApi, p);
            }
        } else if (role === "Ex-Leads") {
            for (let p of data) {
                if(p.isLead && p.isCurrentMember == false) {
                    membersAppended++;
                    createAndAppendMembers(projectApi, p);
                }
            }
        } else if (role === "Leads") {
            for (let p of data) {
                if(p.isLead && p.isCurrentMember) {
                    membersAppended++;
                    createAndAppendMembers(projectApi, p);
                }
            }
        } else {
            for (let p of data) {
                if(p.roles.includes(role)) {
                    membersAppended++;
                    createAndAppendMembers(projectApi, p);
                }
            }
        }

        if (membersAppended * 300 > window.innerWidth) {
            for (let i=0; i<4; i++) {
                if (role === undefined || role === 'All')
                {
                    for (let p of data) {
                        createAndAppendMembers(projectApi, p);
                    }
                } else if (role === "Ex-Leads") {
                    for (let p of data) {
                        if(p.isLead && p.isCurrentMember == false) {
                            createAndAppendMembers(projectApi, p);
                        }
                    }
                } else if (role === "Leads") {
                    for (let p of data) {
                        if(p.isLead && p.isCurrentMember) {
                            createAndAppendMembers(projectApi, p);
                        }
                    }
                } else {
                    for (let p of data) {
                        if(p.roles.includes(role)) {
                            createAndAppendMembers(projectApi, p);
                        }
                    }
                }
            }
        }
        
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries[0].intersectionRatio <= 0) return;

            if (membersAppended * 300 > window.innerWidth) {
                projectApi.classList.replace("no-animate-scroll", "animate-scroll");
                membersDivCarousel.classList.replace("justify-center", "justify-start");
            } else {
                membersDivCarousel.classList.replace("justify-start", "justify-center");
                projectApi.classList.replace("animate-scroll", "no-animate-scroll");
            }
        });
        intersectionObserver.observe(projectApi);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadRoles() {
    let teamRoles = document.querySelector("#team-roles");
    
    let teamRolesMd = document.createElement("div");
    teamRolesMd.classList = "team-roles max-md:hidden grid md:grid-cols-3 xl:grid-cols-6 md:gap-y-6 md:gap-x-16 lg:gap-x-28 px-5";
    teamRoles.appendChild(teamRolesMd);

    for (let role of roles) {
        if (role === "All") continue;
        let roleDiv = document.createElement("div");
        roleDiv.id = role;
        roleDiv.classList = "text-center member-button relative px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group cursor-pointer";
        teamRolesMd.appendChild(roleDiv);

        let purpleCard = document.createElement("span");
        purpleCard.classList = "w-[200px] h-[200px] rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0";
        roleDiv.appendChild(purpleCard);

        let roleInnerDiv = document.createElement("div");
        roleInnerDiv.classList = "flex items-center h-full";
        roleDiv.appendChild(roleInnerDiv);
        
        let roleButton = document.createElement("span");
        roleButton.classList = "relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white";
        roleButton.textContent = role;
        roleButton.style.marginTop = (roleDiv.offsetHeight - roleButton.offsetHeight)/2;
        roleInnerDiv.appendChild(roleButton);
    }

    let teamRolesSm = document.createElement("div");
    teamRolesSm.classList = "md:hidden mb-3 w-40 text-sm font-roboto relative inline-flex items-center justify-start overflow-hidden font-medium transition-all duration-150 ease-out rounded-[5px] group cursor-pointer hover:bg-white bg-purple-600";
    teamRoles.appendChild(teamRolesSm);
    
    let teamRolesSmSelect = document.createElement("select");
    teamRolesSmSelect.classList = "bg-transparent px-4 py-2 font-semibold cursor-pointer text-black";
    teamRolesSmSelect.id = "selectMembers";
    teamRolesSmSelect.style.backgroundColor = "#FFFFF7";
    
    teamRolesSm.appendChild(teamRolesSmSelect);

    for (let role of roles) {
        let option = document.createElement("option");
        option.value = role;
        option.textContent = role;
        teamRolesSmSelect.appendChild(option);
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
        response = await fetch("../../api/members.json");
        jsonData = await response.json();
        data = await jsonData.Members;
        roles = await jsonData.Roles;
        await loadRoles();
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