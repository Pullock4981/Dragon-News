// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const LefrSideNav = () => {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     fetch(`categories.json`)
//       .then((res) => res.json)
//       .then((data) => setCategories(data));
//   }, []);
//   return (
//     <div>
//       <h2 className="lg:text-2xl text-2xl font-semibold mb-3">All Category</h2>
//       {
//         categories.map(category =>{
//             <Link>{category.name}</Link>
//         })
//       }
//     </div>
//   );
// };

// export default LefrSideNav;


import { useEffect, useState } from "react";  
import { Link } from "react-router-dom";  

const LefrSideNav = () => {  
  const [categories, setCategories] = useState([]);  

  useEffect(() => {  
    fetch(`categories.json`)  
      .then((res) => res.json()) // Corrected to call json()  
      .then((data) => setCategories(data));  
  }, []);  

  return (  
    <div>  
      <h2 className="lg:text-2xl text-2xl font-semibold mb-3">All Categories: {categories.length}</h2>  
      {categories.map((category) => (  
        <Link className="block text-base font-medium ml-5 p-2 " key={category.id} to={`/categories/${category.id}`}> {/* You can adjust the path as needed */}  
          {category.name}  
        </Link>  
      ))}  
    </div>  
  );  
};  

export default LefrSideNav;