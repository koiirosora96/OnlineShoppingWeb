import "./ViewCategory.css"
import Category from "./Category.js"

function ViewCategory() {
    const SearchPageItems = [
        {
            "name": "Laptop",
            "image": "src/SearchPagePics/Laptop.jpeg",
            "category": "computer",
            "title": "laptop",
            "recommented": 1
        },
        {
            "name": "Clothes",
            "image": "src/SearchPagePics/Clothes.jpg",
            "category": "goods",
            "title": "Clothes",
            "recommented": 1
        },
        {
            "name": "Iphone Case",
            "image": "src/SearchPagePics/IphoneCase.jpeg",
            "category": "cellPhone",
            "title": "IphoneCase",
            "recommented": 0
        },
        {
            "name": "LivingRoom",
            "image": "src/SearchPagePics/LivingRoom.jpeg",
            "category": "goods",
            "title": "LivingRoom",
            "recommented": 1
        },
        {
            "name": "Shoes",
            "image": "src/SearchPagePics/Shoes.jpeg",
            "category": "goods",
            "title": "Shoes",
            "recommented": 1
        },
    ]

    return ( 
        <div className="ViewCategory">
            {
            SearchPageItems.map(item => {
                return <Category name={item.name} image={item.image} ></Category>})
            }
        </div>
     );
}

export default ViewCategory;