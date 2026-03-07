const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const filterSection = document.getElementById("filter-section");

const issueCount = document.getElementById("issueCount");

const openIssueCount = [];
const closeIssueCount = [];


// all issue take by api
const allIssue = async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    displayIssue(data.data);
    issueCount.textContent = `${data.data.length} Issues`;
}
allIssue();


// display all issue

const allCards = document.getElementById("allCards")
// allCards.innerHTML = "";
const displayIssue = (issueCards) => {
    issueCards.forEach((card) => {
        const divCard = document.createElement("div");
        const date = new Date(card.createdAt).toLocaleDateString();
   
        divCard.innerHTML = `<div onclick="modal(${card.id})" class=" rounded-md bg-white h-full p-4 ${card.status === 'open' ? `border-t-2 border-green-300` : `border-t-2 border-purple-400` }">
                        <div class="flex justify-between">
                        ${card.status === 'open' ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed-Status.png">`}
                        <h2 class="rounded-xl w-[80px] text-center ${card.priority === 'high' ? 'bg-[#FEECEC] text-red-500' : card.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : card.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : ''}">${card.priority}</h2>
                        </div>
                        <h1 class="font-semibold text-[1.3rem] line-clamp-2 mt-[12px]">${card.title}</h1>
                        <p class="text-[#64748B] text-[.8rem] line-clamp-2 mt-[8px]">${card.description}</p>
                        <div class="mt-[18px] flex gap-4 items-center border-b-2 border-gray-300 pb-[1rem]">
                            ${card.labels.map(label => `<p class=" text-[.8rem] ${label === 'bug' ? 'bg-[#FEECEC] text-red-500' : label === 'help wanted' ? 'bg-[#FFF8DB] text-[#D97706]' : 'bg-[#d6f7cc] text-[#16f834]'} px-2 py-1 rounded-full line-clamp-1">${label.toUpperCase()}</p>`).join('')} 
                        </div>
                        <div class=" pt-[1rem] ">
                        <p class="text-[#64748B] text-[.8rem] mb-[8px]">${card.author}</p>
                        <p class="text-[#64748B] text-[.8rem]">${date}</p>
                    </div>
                    </div>`;

        allCards.appendChild(divCard);
    })
} 

const openIssue = async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    displayOpenIssue(data.data);
    issueCount.textContent = `${openIssueCount.length} Issues`;
}

// filter open issue
const displayOpenIssue = (openCards) => {

    openCards.forEach((card) => {
        
        card.status === 'open' && openIssueCount.push(card);
        if(card.status === 'open'){
            
            const divCard = document.createElement("div");
            const date = new Date(card.createdAt).toLocaleDateString();
       
            divCard.innerHTML = `<div onclick="modal(${card.id})" class=" rounded-md bg-white h-full p-4 ${card.status === 'open' ? `border-t-2 border-green-300` : `border-t-2 border-purple-400` }">
                            <div class="flex justify-between">
                            ${card.status === 'open' ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed-Status.png">`}
                            <h2 class="rounded-xl w-[80px] text-center ${card.priority === 'high' ? 'bg-[#FEECEC] text-red-500' : card.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : card.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : ''}">${card.priority}</h2>
                            </div>
                            <h1 class="font-semibold text-[1.3rem] line-clamp-2 mt-[12px]">${card.title}</h1>
                            <p class="text-[#64748B] text-[.8rem] line-clamp-2 mt-[8px]">${card.description}</p>
                            <div class="mt-[18px] flex gap-4 items-center border-b-2 border-gray-300 pb-[1rem]">
                                ${card.labels.map(label => `<p class=" text-[.8rem] ${label === 'bug' ? 'bg-[#FEECEC] text-red-500' : label === 'help wanted' ? 'bg-[#FFF8DB] text-[#D97706]' : 'bg-[#d6f7cc] text-[#16f834]'} px-2 py-1 rounded-full line-clamp-1">${label.toUpperCase()}</p>`).join('')} 
                            </div>
                            <div class=" pt-[1rem] ">
                            <p class="text-[#64748B] text-[.8rem] mb-[8px]">${card.author}</p>
                            <p class="text-[#64748B] text-[.8rem]">${date}</p>
                        </div>
                        </div>`;

                        filterSection.appendChild(divCard);

 } 
}) 
}

// filter close issue

const closeIssue = async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    displayCloseIssue(data.data);
    issueCount.textContent = `${closeIssueCount.length} Issues`;
}

const displayCloseIssue = (closeCard) => {

    closeCard.forEach((card) => {
        
        card.status === 'closed' && closeIssueCount.push(card);
        if(card.status === 'closed'){
            
            const divCard = document.createElement("div");
            const date = new Date(card.createdAt).toLocaleDateString();
       
            divCard.innerHTML = `<div onclick="modal(${card.id})" class=" rounded-md bg-white h-full p-4 ${card.status === 'close' ? `border-t-2 border-green-300` : `border-t-2 border-purple-400` }">
                            <div class="flex justify-between">
                            ${card.status === 'closed' ? `<img src="./assets/Closed-Status.png">` : `<img src="./assets/Open-Status.png">`}
                            <h2 class="rounded-xl w-[80px] text-center ${card.priority === 'high' ? 'bg-[#FEECEC] text-red-500' : card.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : card.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : ''}">${card.priority}</h2>
                            </div>
                            <h1 class="font-semibold text-[1.3rem] line-clamp-2 mt-[12px]">${card.title}</h1>
                            <p class="text-[#64748B] text-[.8rem] line-clamp-2 mt-[8px]">${card.description}</p>
                            <div class="mt-[18px] flex gap-4 items-center border-b-2 border-gray-300 pb-[1rem]">
                                ${card.labels.map(label => `<p class=" text-[.8rem] ${label === 'bug' ? 'bg-[#FEECEC] text-red-500' : label === 'help wanted' ? 'bg-[#FFF8DB] text-[#D97706]' : 'bg-[#d6f7cc] text-[#16f834]'} px-2 py-1 rounded-full line-clamp-1">${label.toUpperCase()}</p>`).join('')} 
                            </div>
                            <div class=" pt-[1rem] ">
                            <p class="text-[#64748B] text-[.8rem] mb-[8px]">${card.author}</p>
                            <p class="text-[#64748B] text-[.8rem]">${date}</p>
                        </div>
                        </div>`;

                        filterSection.appendChild(divCard);

 } 
}) 
}







// toggling button
const toggle = (id) =>{
    allBtn.classList.remove("btn-primary");
    openBtn.classList.remove("btn-primary");
    closeBtn.classList.remove("btn-primary"); 

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove("btn-primary");
    selectedBtn.classList.add("btn-primary");

    if(id === "allBtn"){
        allCards.innerHTML = "";
        allIssue();
        openIssueCount.length = 0;
        closeIssueCount.length = 0;
        
    }
    else if(id === "openBtn"){
        allCards.innerHTML = "";
        openIssue();
        closeIssueCount.length = 0;
        filterSection.innerHTML = "";
    }
    else if(id === "closeBtn"){
        allCards.innerHTML = "";
        closeIssue();
        openIssueCount.length = 0;
        filterSection.innerHTML = "";

    }
}

















//Modal

const modal = async (id) => {
     const url = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
     const det = await url.json();
     displayModal(det.data);
}

const displayModal = (card) => {
const detailsContainer = document.getElementById("details-container");
 const date = new Date(card.createdAt).toLocaleDateString();
    detailsContainer.innerHTML = `
                        
                        </div>
                        <h1 class="font-semibold text-[1.3rem] line-clamp-2 mt-[12px]">${card.title}</h1>
                        
                        <div>
                        <p class="flex items-center"> <span class="${card.status === 'open' ? 'bg-[#FEECEC] text-red-500' : card.status === 'close' ? 'bg-[#FFF6D1] text-[#F59E0B]' : 'bg-[#bd91ee] text-[#5d04c2]'} px-2 py-1 rounded-full line-clamp-1 w-16">${card.status}</span>  .  <span> Opened by ${card.author} </span>  . <span>  ${date}</span>  </p>
                        </div>

                        <p class="text-[#64748B] text-[.8rem] line-clamp-2 mt-[8px]">${card.description}</p>
                       
                        

                        <div class="flex justify-between mt-[28px] items-center">
                        <div>
                        <h1 class="text-[1rem] text-[#64748B]">Assignee :</h1>
                         <p class="text-[#1F2937] text-[1rem] mb-[8px]">${card.assignee}</p>
                        </div/>
                        <div class="pr-[90px]">
                        <h1 class="text-[1rem] text-[#64748B]">Priority :</h1>
                         <h2 class="rounded-xl w-[80px] text-center ${card.priority === 'high' ? 'bg-[#FEECEC] text-red-500' : card.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : card.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : ''}">${card.priority}</h2>
                        </div>
                         </div>
                        
                    </div>
                    </div>


        <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>  `;

   
    document.getElementById("my_modal").showModal();
}