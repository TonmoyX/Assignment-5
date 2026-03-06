const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const issueCount = document.getElementById("issueCount");




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
   
        divCard.innerHTML = `<div class=" rounded-md bg-white h-full p-4 ${card.status === 'open' ? `border-t-2 border-green-300` : `border-t-2 border-purple-400` }">
                        <div class="flex justify-between">
                        ${card.status === 'open' ? `<img src="./assets/Open-Status.png">` : `<img src="./assets/Closed-Status.png">`}
                        <h2 class="rounded-xl w-[80px] text-center ${card.priority === 'high' ? 'bg-[#FEECEC] text-red-500' : card.priority === 'medium' ? 'bg-[#FFF6D1] text-[#F59E0B]' : card.priority === 'low' ? 'bg-[#EEEFF2] text-[#9CA3AF]' : ''}">${card.priority}</h2>
                        </div>
                        <h1 class="font-semibold text-[1.3rem] line-clamp-2 mt-[12px]">${card.title}</h1>
                        <p class="text-[#64748B] text-[.8rem] line-clamp-2 mt-[8px]">${card.description}</p>
                        <div class="mt-[18px] flex gap-4 items-center border-b-2 border-gray-300 pb-[1rem]">
                            <h1 class=" bg-[#FEECEC] rounded-xl text-red-500 w-[120px] p-1 text-center"><i class="fa-solid fa-bug"></i><span> Bug</span></h1>
                            <h2 class="bg-[#FFF8DB] rounded-xl text-[#D97706] w-full text-center p-1"><i class="fa-solid fa-location-crosshairs"></i><span> help wanted</span></h2>
                        </div>
                        <div class=" pt-[1rem] ">
                        <p class="text-[#64748B] text-[.8rem] mb-[8px]">${card.author}</p>
                        <p class="text-[#64748B] text-[.8rem]">1/15/2024</p>
                    </div>
                    </div>`;

        allCards.appendChild(divCard);
    })
} 


