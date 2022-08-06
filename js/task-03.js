const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryLink = document.querySelector(".gallery");
const createGalleryItem = images.map((element) => {
  galleryLink.insertAdjacentHTML(
    "beforeEnd",
    `<li><img src="${element.url}" alt="${element.alt}" style="width:320px; height:210px;border-radius:16px;margin:15px"></li>`
  );
});
galleryLink.setAttribute(
  "style",
  "list-style-type:none; display: flex; justify-content:center; "
);

//FIRST VARIANT

// const galleryLink = document.querySelector(".gallery");

// galleryLink.classList.add("my-style");
// document.getElementsByClassName("my-style")[0].style =
//   "display:flex; justify-content:center; padding:0px";

// const itemsEl = () => {
//   const itemsProperties = document.createElement("li");
//   itemsProperties.style.listStyle = "none";
//   itemsProperties.style.marginLeft = "15px";
//   itemsProperties.style.marginRight = "15px";

//   return itemsProperties;
// };

// const imgEl = () => {
//   const imgProperties = document.createElement("img");
//   imgProperties.width = 320;
//   imgProperties.height = 210;
//   imgProperties.style.borderRadius = "24px";

//   return imgProperties;
// };

// const addImages = images.map((element) => {
//   const addImgLink = imgEl();
//   addImgLink.src = element.url;

//   return addImgLink;
// });

// const insertImgToItems = addImages.map((element) => {
//   const itemElement = itemsEl();
//   itemElement.appendChild(element);

//   return itemElement;
// });

// galleryLink.append(...insertImgToItems);

//SECOND VARIANT
