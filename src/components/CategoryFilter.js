import React from "react";

function CategoryFilter({ categories, selectCategory, filterSelectCategory }) {
  const btns = categories.map((category) => {
    const className = category === selectCategory ? "selected" : null;
    return (
      <button
        key={categories}
        className={className}
        onClick={() => filterSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btns}
    </div>
  );
}

export default CategoryFilter;
