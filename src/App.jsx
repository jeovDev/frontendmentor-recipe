import omelette from "./assets/images/image-omelette.jpeg";
function App() {
  return (
    <div className="bg-background p-10">
      <div className="p-5 bg-white rounded-xl content">

  
      <div className="cover max-h-header overflow-hidden">
        <img className="rounded-2xl w-screen" src={omelette} alt="" />
      </div>
      <div className="title-details mt-5">
        <h6 className="text-2xl font-youngSerif font-light">
          {" "}
          Simple Omelette Recipe{" "}
        </h6>
        <p className="mt-2 text-sm font-outfitFont">
          {" "}
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>

      <div className="preparation p-5 bg-recipe mt-5 rounded-2xl">
        <h1 className="text-recipe text-xl font-medium font-outfitFont">Preparation Time</h1>
        <ul className="text-sm m-3 mx-10 flex flex-col gap-1 list-disc"> 
          <li><span className="font-medium">Total : </span> Approximately 10 minutes</li>
          <li> <span className="font-medium">Preparation : </span> 5 minutes</li>
          <li> <span className="font-medium">Cooking : </span> 5 minutes</li>
        </ul>
      </div>

      <div className="ingredients mt-5 ">
        <h6 className="text-2xl font-medium font-youngSerif text-title">Ingredients</h6>
        <ul className="text-sm m-3 mx-10 flex flex-col gap-1 list-decimal">
          <li className="pl-2">Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li className="pl-2">Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li className="pl-2"> Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.</li>
          <li className="pl-2">Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li className="pl-2">Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li className="pl-2">Enjoy: Serve hot, with additional salt and pepper if needed.</li>
        </ul>
      </div>

      <div className="ingredients mt-5 ">
        <h6 className="text-2xl font-medium font-youngSerif text-title">Nutrition</h6>
        <p className="text-sm mt-2">The table below shows nutritional values per serving without the additional fillings.</p>
        <div className="px-3 text-sm ">
        <div className="grid grid-cols-2 border-b-2 w-full p-2 mt-3 font-outfitFont">
            
            <div>Calories</div>
            <div className="text-title font-medium"> 277kcal</div>

         </div>
         <div className="grid grid-cols-2 border-b-2 w-full p-2 mt-3 font-outfitFont">
            
            <div>Carbs</div>
            <div className="text-title font-medium"> 0g</div>

         </div>
         <div className="grid grid-cols-2 border-b-2 w-full p-2 mt-3 font-outfitFont">
            
            <div>Protein</div>
            <div className="text-title font-medium"> 20g</div>

         </div>
         <div className="grid grid-cols-2 border-b-2 w-full p-2 mt-3 font-outfitFont">
            
            <div>Fat</div>
            <div className="text-title font-medium"> 22g</div>

         </div>
        </div>

        
      </div>
      </div>

    </div>
  );
}

export default App;
