const container = document.getElementById("cards")

const fetch_users = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        
        if (!response.ok) throw new Error("Could not fetch data");

        const users = await response.json();
        display_cards(users);
        
    } catch (error) {
        container.innerHTML = `<p class="text-red-500">Error loading data: ${error.message}</p>`;
    }
};

const display_cards = (users) =>{
    const user_card = users.users.map(user =>{
        return `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-20 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div class="px-6 pb-6 text-center">
                <img src="${user.image}" alt="${user.firstName}" 
                     class="w-24 h-24 mx-auto -mt-12 rounded-full border-4 border-white bg-gray-50 object-cover">
                
                <h2 class="mt-4 text-xl font-bold text-gray-800">${user.firstName} ${user.lastName}</h2>
                <p class="text-indigo-600 font-medium text-sm mb-4">${user.company.title}</p>
                
                <div class="text-sm text-gray-600 space-y-2 pt-4 border-t border-gray-100">
                    <p class="flex items-center justify-center">
                        <span class="mr-2">📧</span> ${user.email}
                    </p>
                    <p class="flex items-center justify-center">
                        <span class="mr-2">📍</span> ${user.address.city}, ${user.address.state}
                    </p>
                </div>
            </div>
        </div>
            `
    }).join("")
    container.innerHTML = user_card;
};

fetch_users()

