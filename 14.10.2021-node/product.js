let productCont = document.getElementById("productCont");
let data = [
  {
    name: "sofa",
    price: 2600,
    img: "https://images.pexels.com/photos/5490904/pexels-photo-5490904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

productCont.innerHTML += `<h1>${data[0].name}</h1><p>${data[0].price}</p><img src="${data[0].img}">`;
