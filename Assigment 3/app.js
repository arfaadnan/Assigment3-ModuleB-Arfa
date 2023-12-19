const mobile_Phones = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
];
function search_Mobile_Phones(){
    const searchBy= document.getElementById("searchBy").value;
    const searchValue = document.getElementById("searchValue").value.toLowerCase();
    const filtered_Phones=mobile_Phones.filter(phone=> phone[searchBy].toLowerCase().includes(searchValue));
    displayResults(filtered_Phones);

};

function displayResults(phones){
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML="";

    if(phones.Length===0){
        resultDiv.innerHTML="<p>Searched Result Not Matched </p>"
        return;
    }
    const ul = document.createElement('ul');
    phones.forEach(phone => {
      const li = document.createElement('li');
      li.textContent = `Brand: ${phone.brand}, Model: ${phone.model}, Price: ${phone.price}, Camera: ${phone.camera}, RAM: ${phone.ram}, ROM: ${phone.rom}`;
      ul.appendChild(li);
    });

    resultDiv.appendChild(ul);
  }
