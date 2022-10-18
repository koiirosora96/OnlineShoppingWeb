import "./ViewCategory.css"
import Category from "./Category.js"

// function importAll(r) {
//     let images = {};
//     r.keys().forEach((item,index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('../../public/SearchPagePics', false, /\.(png|jpeg|svg|jpg)$/))

// console.log(images)
function ViewCategory() {
    const SearchPageItems = [
        {
            "name": "Laptop",
            "image": "Laptop.jpeg",
            "category": "computer",
            "title": "laptop",
            "recommented": 1
        },
        {
            "name": "Clothes",
            "image": "Clothes.jpg",
            "category": "goods",
            "title": "Clothes",
            "recommented": 1
        },
        {
            "name": "Iphone Case",
            "image": "IphoneCase.jpeg",
            "category": "cellPhone",
            "title": "IphoneCase",
            "recommented": 0
        },
        {
            "name": "LivingRoom",
            "image": "LivingRoom.jpeg",
            "category": "goods",
            "title": "LivingRoom",
            "recommented": 1
        },
        {
            "name": "Shoes",
            "image": "Shoes.jpeg",
            "category": "goods",
            "title": "Shoes",
            "recommented": 1
        },
    ]

    return ( 
        <div className="ViewCategory">
            {
            SearchPageItems.map((item,index) => {
                return <Category name={item.name} image={item.image} key={index}></Category>})
            }
        </div>
     );
}

export default ViewCategory;