import React from "react";

// function CategoryItem(props) {
//   return (
//     <div>
//       {props.categories.map((category, index) => (
//           <p>{category.name}</p>
//       ))}
//     </div>
//   );
// }

// export default CategoryItem;

const categoryItem = ({name}) => {
    return(
        <div>
            <p>
            {name}
            </p>
        </div>
    )
}

export default categoryItem