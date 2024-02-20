import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

function App() {

  const[images , setImages] = useState([]);

  const getImagesFromApi =async () =>{
    const imagesData =await  fetch('https://api.unsplash.com/photos/?client_id=J5Pt_KlR8q3vbDR9UUksMtpzu4HgOKSBiVwN22VdQi4');
    const imagesResponse = await imagesData.json();
    console.log(imagesResponse);
    setImages(imagesResponse);

  }
  useEffect(() =>{
    getImagesFromApi();
  },[])

  return (
    <div className="App">
      <h1  className="text-2xl bg-white/60 text-black p-2 font-semibold mb-6">Designed with Unsplash API</h1>
      <div  className="w-[100vw] flex items-center justify-center min-h-10 ">
        <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {images.map((image,index)=>(
              <Gallery data={image} index={index}/>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
