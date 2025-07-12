const snacksItems=[
    {id:1,name: "Aloo Tikki" , price:"80" , imgSrc:"https://media.istockphoto.com/id/1204866803/photo/indian-potato-patties-aloo-tikki-served-with-yogurt-close-up-in-a-dish-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=G7VRISuqTrUi_1D6O_EtjH2b1VH6H2yR-D9HKD7ro9s=", description:"Crispy and spicy Aloo Tikki, loved by all street food lovers"},
    {id:2,name: "Samosa" , price:"30",imgSrc:"https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.jpg?s=612x612&w=0&k=20&c=bxOAfJThGKNSzugC7Id_vPO9l5UPljCKSgOc18-2vS0=", description:"Crispy samosas filled with spicy mashed potatoes"},
    {id:3,name: "Pani Puri" , price:"40",imgSrc:"https://media.istockphoto.com/id/511655152/photo/pani-puri-or-panipuri-golgappe-or-gol-gappe-chat-item.jpg?s=612x612&w=0&k=20&c=Atn65dlJsQ4uE1Pxi0brLog6ESWF-xkj06L0_ksaHJk=", description:"Tangy and spicy Pani Puri, a perfect evening snack"},
    {id:4,name: "Dahi Bhalla" , price:"100",imgSrc:"https://media.istockphoto.com/id/1403309429/photo/dahi-bhalla-delhi.jpg?s=612x612&w=0&k=20&c=YDGm_1gtfRKahzh1nhDLKm-XhGqXwCFfUh7dxYJi3T0=",description:"Soft and delicious dumplings soaked in creamy yogurt."},
   
]

const snacks = document.querySelector("#snacks")


snacksItems.forEach(item=>{
    const itemDiv=document.createElement('div')
    itemDiv.classList.add('card')
    itemDiv.innerHTML = `<img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.description}</p>
                            <h4>₹${item.price}</h4>
                            <button class="btn">Add to Cart</button>
                        </div>`;
    snacks.appendChild(itemDiv)
    console.log(item.name);
  })


const sabjiItems = [
    { id: 1, name: "Aloo Gobi", price: "120", imgSrc: "https://media.istockphoto.com/id/1317737079/photo/curry-roasted-cauliflower-vegetarian-vegetable-dish-selective-focus-copy-space.jpg?s=612x612&w=0&k=20&c=aTrp3vS8KyF8YvlZMvUm-2lXmQqdGsBiD4gsH3j0LsE=", description: "A spicy and flavorful combination of potatoes and cauliflower." },
    { id: 2, name: "Baingan Bharta", price: "150", imgSrc: "https://media.istockphoto.com/id/1437118868/photo/dhaba-style-baingan-bharta-or-mashed-eggplant-curry.jpg?s=612x612&w=0&k=20&c=cUr_zcxvLawS3mGnlw3Ln04N6jWr9UDcr8rGmiupxLQ=", description: "Smoky roasted eggplant mashed and cooked in a spicy gravy." },
    { id: 3, name: "Aloo Methi", price: "100", imgSrc: "https://media.istockphoto.com/id/1358749870/photo/indian-cuisine-aloo-methi-sabji-or-fenugreek-potato-sabji-served-in-a-karahi.jpg?s=612x612&w=0&k=20&c=yvUOXv4BGjCzjNVIDuFxpS1cHjw9cSCYkwl0i3JTz8g=", description: "Potatoes cooked with aromatic fenugreek leaves." },
    { id: 4, name: "Shahi Paneer", price: "180", imgSrc: "https://media.istockphoto.com/id/1195261518/video/paneer-butter-masala-recipes.jpg?s=640x640&k=20&c=5WzlmSvsk_rtWXvFL3rQ_if8u_DgrYnDYakz4HmnkT8=", description: "Paneer cubes cooked in a rich, creamy tomato-based gravy." },
    { id: 5, name: "Matar Paneer", price: "140", imgSrc: "https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=", description: "Paneer and peas cooked together in a spiced gravy." },
    { id: 6, name: "Chana Masala", price: "120", imgSrc: "https://media.istockphoto.com/id/1182758935/photo/homemade-indian-chickpea-chana-masala.jpg?s=612x612&w=0&k=20&c=t9hk82loyPEu37eFnA8v-oKGscX4_ektoiwUsXVsegs=", description: "Chickpeas cooked in a tangy, spiced tomato gravy." },
    // { id: 7, name: "Gobi Masala", price: "130", imgSrc: "", description: "Cauliflower cooked in a flavorful, spiced curry." },
    { id: 8, name: "Bhindi Masala", price: "110", imgSrc: "https://media.istockphoto.com/id/516316282/photo/indian-masala-fried-bhindi-or-ladyfinger-curry.jpg?s=612x612&w=0&k=20&c=IRTS-aCjpujiT5Y62vT3SKDGCcPg5GFtMu4Arl9ETjY=", description: "Stir-fried okra with cumin, coriander, and garam masala." },
    { id: 9, name: "Kadai Paneer", price: "160", imgSrc: "https://media.istockphoto.com/id/968502384/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl.jpg?s=612x612&w=0&k=20&c=xJQOvlclaNvUMpfVp_Ht_J1Z170fptDgTGLW3zFpFL4=", description: "Paneer cubes cooked with bell peppers and a spicy kadai masala." },
    // { id: 10, name: "Palak Paneer", price: "170", imgSrc: "", description: "Paneer in a smooth, spiced spinach gravy." }
];

const sabjiSection = document.querySelector("#maincourse");

sabjiItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    sabjiSection.appendChild(itemDiv);
    console.log(item.name);
});

const breadItems = [
    { id: 1, name: "Butter Naan", price: "50", imgSrc: "https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=71SgbJtnfiHUiud1oGxnhiZsx5nuivWwZt8DlIk8hi0=", description: "Soft, buttery naan served hot, perfect with gravies." },
    { id: 2, name: "Tandoori Roti", price: "40", imgSrc: "https://media.istockphoto.com/id/1296860425/photo/indian-cuisine-tandoori-roti-whole-wheat-flat-bread.jpg?s=612x612&w=0&k=20&c=Gpe7DhMx5sbSrI2mKX3VEaLITGG_VPme_iWVwkAVZ5E=", description: "Traditional whole wheat bread cooked in a tandoor oven." },
    { id: 3, name: "Garlic Naan", price: "60", imgSrc: "https://media.istockphoto.com/id/893029766/photo/garlic-and-coriander-naan-served-in-a-plate-its-a-type-of-indian-bread-or-roti-flavoured-with.jpg?s=612x612&w=0&k=20&c=WLGXBd45MxMdC7gyXqawzbyZ-1qRSSrLxO6Rbp92G70=", description: "Soft naan topped with a generous amount of garlic." },
    { id: 4, name: "Lachha Paratha", price: "60", imgSrc: "https://media.istockphoto.com/id/1449429511/photo/green-lacha-chilli-paratha.jpg?s=612x612&w=0&k=20&c=uxo7Xv4mY9ieG6gEU-FDr1V6qzGnbtzgIXmygTLD2yU=", description: "Layered, flaky paratha made with whole wheat flour." },
    { id: 5, name: "Aloo Paratha", price: "70", imgSrc: "https://media.istockphoto.com/id/1189080088/photo/aloo-paratha-with-lassi-indian-potato-stuffed-flatbread-with-butter-on-top-served-with-fresh.jpg?s=612x612&w=0&k=20&c=8KprZL9pGFprY6K92EIncUGrZ0Ttx93EukipV3Nz--4=", description: "Stuffed paratha with spiced mashed potatoes, served with curd or pickle." },
    { id: 6, name: "Chapati", price: "20", imgSrc: "https://media.istockphoto.com/id/900220822/photo/indian-bread-chapati-fulka-gehu-roti-with-wheat-grains-in-background-its-a-healthy-fiber-rich.jpg?s=612x612&w=0&k=20&c=m2wZmANP7JUMS3dTnfqDPk4EAFSpOCfjqgFFeWKM6h8=", description: "Traditional whole wheat flatbread, soft and healthy." },
    // { id: 7, name: "Pudina Paratha", price: "80", imgSrc: "", description: "Flaky paratha flavored with fresh mint leaves." },
    // { id: 8, name: "Paneer Paratha", price: "90", imgSrc: "", description: "Paratha stuffed with spiced paneer (cottage cheese)." },
    { id: 9, name: "Missi Roti", price: "50", imgSrc: "https://media.istockphoto.com/id/1073544762/photo/corn-flour-bread.jpg?s=612x612&w=0&k=20&c=z4p67zHS6Gi6IQvYGqGKesHGD5yZOXZJgEuupY2T2oI=", description: "A traditional roti made with gram flour and spices." },
    // { id: 10, name: "Naan (Plain)", price: "40", imgSrc: "", description: "Soft and fluffy plain naan, a staple with curries." }
];

const breadSection = document.querySelector("#breads");

breadItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    breadSection.appendChild(itemDiv);
    console.log(item.name);
});

const thaliItems = [
    { id: 1, name: "North Indian Thali", price: "300", imgSrc: "", description: "A complete meal with dal, sabji, roti, rice, and curd." },
    { id: 2, name: "South Indian Thali", price: "250", imgSrc: "", description: "A complete platter with rice, sambar, curd, dosa, and more." },
    { id: 3, name: "Gujarati Thali", price: "350", imgSrc: "", description: "A sweet and savory combination of dal, sabji, roti, rice, and farsan." },
    { id: 4, name: "Rajasthani Thali", price: "400", imgSrc: "", description: "A royal thali with dal baati churma, gatte ki sabji, rice, and roti." },
    { id: 5, name: "Maharashtrian Thali", price: "300", imgSrc: "", description: "A balanced meal with chapati, dal, sabji, rice, and sol kadhi." },
    { id: 6, name: "Punjabi Thali", price: "350", imgSrc: "", description: "A hearty thali with makki di roti, sarson da saag, dal, rice, and curd." },
    { id: 7, name: "Kashmiri Thali", price: "450", imgSrc: "", description: "A traditional meal with rogan josh, rice, raita, and saag." },
    { id: 8, name: "Bengali Thali", price: "380", imgSrc: "", description: "A complete thali with rice, macher jhol, daal, and begun bhaja." },
    { id: 9, name: "Thali with Punjabi Tandoori Roti", price: "320", imgSrc: "", description: "A thali served with tandoori roti, dal, sabji, rice, and raita." },
    { id: 10, name: "Vegan Thali", price: "280", imgSrc: "", description: "A plant-based thali with dal, sabji, roti, rice, and vegan curd." }
];

const thaliSection = document.querySelector("#thali");

thaliItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    thaliSection.appendChild(itemDiv);
    console.log(item.name);
});

const southIndianItems = [
    { id: 1, name: "Dosa", price: "100", imgSrc: "", description: "Crispy rice crepe served with chutneys and sambar." },
    { id: 2, name: "Idli", price: "60", imgSrc: "", description: "Steamed rice cakes served with chutney and sambar." },
    { id: 3, name: "Vada", price: "80", imgSrc: "", description: "Crispy fried lentil doughnuts served with chutney and sambar." },
    { id: 4, name: "Uttapam", price: "120", imgSrc: "", description: "Thick, savory pancake topped with vegetables." },
    { id: 5, name: "Pongal", price: "110", imgSrc: "", description: "Rice and lentil dish tempered with ghee, cashews, and black pepper." }
];

const southIndianSection = document.querySelector("#southindian");

southIndianItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    southIndianSection.appendChild(itemDiv);
    console.log(item.name);
});

const chineseItems = [
    { id: 1, name: "Spring Rolls", price: "150", imgSrc: "", description: "Crispy rolls filled with vegetables and served with dipping sauce." },
    { id: 2, name: "Chili Paneer", price: "180", imgSrc: "", description: "Paneer cubes fried and tossed in a spicy, tangy sauce." },
    { id: 3, name: "Hakka Noodles", price: "120", imgSrc: "", description: "Stir-fried noodles with vegetables and soy sauce." },
    { id: 4, name: "Vegetable Manchurian", price: "150", imgSrc: "", description: "Fried vegetable balls tossed in a savory, spicy Manchurian sauce." },
    { id: 5, name: "Sweet and Sour Vegetables", price: "130", imgSrc: "", description: "Stir-fried veggies with a sweet and sour sauce." }
];

const chineseSection = document.querySelector("#chinese");

chineseItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    chineseSection.appendChild(itemDiv);
    console.log(item.name);
});

const dessertsItems = [
    { id: 1, name: "Gulab Jamun", price: "80", imgSrc: "", description: "Deep-fried dough balls soaked in sugary syrup." },
    { id: 2, name: "Rasgulla", price: "90", imgSrc: "", description: "Soft cheese balls soaked in sugar syrup." },
    { id: 3, name: "Kheer", price: "120", imgSrc: "", description: "Traditional Indian rice pudding made with milk and cardamom." },
    { id: 4, name: "Jalebi", price: "70", imgSrc: "", description: "Crispy, sweet deep-fried batter soaked in sugar syrup." },
    { id: 5, name: "Carrot Halwa", price: "100", imgSrc: "", description: "Grated carrots cooked with milk, ghee, and sugar." }
];

const dessertsSection = document.querySelector("#desert");

dessertsItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    dessertsSection.appendChild(itemDiv);
    console.log(item.name);
});


const beveragesItems = [
    { id: 1, name: "Masala Chai", price: "50", imgSrc: "", description: "Traditional spiced tea brewed with milk and aromatic spices." },
    { id: 2, name: "Lassi", price: "60", imgSrc: "", description: "A refreshing yogurt drink, served sweet or salty." },
    { id: 3, name: "Fresh Lime Soda", price: "40", imgSrc: "", description: "A tangy and fizzy drink made with fresh lime juice and soda." },
    { id: 4, name: "Sweet Coconut Water", price: "70", imgSrc: "", description: "Fresh coconut water served chilled with a hint of sweetness." },
    { id: 5, name: "Filter Coffee", price: "80", imgSrc: "", description: "Strong and aromatic South Indian filter coffee." }
];

const beveragesSection = document.querySelector("#beverages");

beveragesItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card');
    itemDiv.innerHTML = `
        <img src=${item.imgSrc} class="card-img-top" alt=${item.name}>
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <h4>₹${item.price}</h4>
            <button class="btn">Add to Cart</button>
        </div>`;
    beveragesSection.appendChild(itemDiv);
    console.log(item.name);
});


  const menuControl = document.querySelectorAll(".menu_nav_controls")
  const displayMenu = document.querySelectorAll(".display_menu_items")
  
  menuControl.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data_target');
        console.log(target);
        
        displayMenu.forEach(section => {
            section.style.display = 'none';
        });
        
        document.getElementById(target).style.display = 'grid';
    });
    
});

document.getElementById('snacks').style.display = 'grid';



function addToCart(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = items.find(i => i.id === itemId);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }
  
