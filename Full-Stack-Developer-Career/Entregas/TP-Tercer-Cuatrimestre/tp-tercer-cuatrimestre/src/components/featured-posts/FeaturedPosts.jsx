import React from "react";

function FeaturedPosts() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="h-40 bg-blue-300">Fila 1</div>
        <div className="h-40 bg-green-300">Fila 2</div>
        <div className="h-40 bg-yellow-300">Fila 3</div>
      </div>

      <div className="w-1/4 bg-red-500">Banner</div>
    </div>
  );
}

export default FeaturedPosts;
