import React,{useState} from "react";
import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data"; 
const allCategories = ["all",...new Set(items.map((item)=> item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  const filterCategories = (category)=>{
    if(category === "all"){
      setMenuItems(items);
      return;
    }
    const categoryItems = items.filter((item)=> item.category===category)
    console.log(categoryItems);
    setMenuItems(categoryItems);
  }
  return (
    <main>
      <section>
        <div className="App">
          <h2 className="heading">Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCategories={filterCategories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
