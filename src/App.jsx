// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="flex items-center justify-center h-screen bg-black">
// //       {/* Hidden image for Open Graph (WhatsApp preview) */}
// //       <img
// //         src="https://th.bing.com/th/id/R.cb1cc28f283301a5d4e91ea7cefde1fc?rik=EJJfV1cx%2fY3s6g&riu=http%3a%2f%2fwww.pmindia.gov.in%2fwp-content%2fuploads%2f2014%2f06%2fHigh1.jpg&ehk=bPwyjIef3Jyenrgi%2b2KGxSfg1Gy3UWA07762GkH2IhA%3d&risl=&pid=ImgRaw&r=0"
// //         alt="OG Preview"
// //         style={{ display: "none" }}
// //       />

// //       {/* Display Rickroll GIF when the site opens */}
// //       <img
// //         src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTEyZmtybDdud2xoMjU3cng4bTJpZ2ppd2hjOXFsM3MzYjIxMzJ2aiZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/D8vC3ehZ1JpGE/giphy.gif"
// //         alt="Never Gonna Give You Up"
// //         className="w-full h-full object-cover"
// //       />
// //     </div>
// //   );
// // }

// // export default App;

// import "./App.css";
// import image from "./assets/images.jpeg";

// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       {/* Hidden image for Open Graph (WhatsApp preview) */}
//       <img
//         src="https://th.bing.com/th/id/R.cb1cc28f283301a5d4e91ea7cefde1fc?rik=EJJfV1cx%2fY3s6g&riu=http%3a%2f%2fwww.pmindia.gov.in%2fwp-content%2fuploads%2f2014%2f06%2fHigh1.jpg&ehk=bPwyjIef3Jyenrgi%2b2KGxSfg1Gy3UWA07762GkH2IhA%3d&risl=&pid=ImgRaw&r=0"
//         alt="OG Preview"
//         style={{ display: "none" }}
//       />

//       {/* Display Rickroll GIF when the site opens */}
//       <img
//         src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTEyZmtybDdud2xoMjU3cng4bTJpZ2ppd2hjOXFsM3MzYjIxMzJ2aiZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/D8vC3ehZ1JpGE/giphy.gif"
//         alt="Never Gonna Give You Up"
//         className="w-full h-full object-cover sm:w-auto sm:h-auto" // Ensures image is responsive
//       />
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import image from "./assets/images.jpeg"; // Import the local image

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Hidden image for Open Graph (WhatsApp preview) */}
      <img
        src="https://www.shutterstock.com/image-photo/indias-prime-minister-narendra-modi-before-2441612935" // Use the imported local image
        alt="OG Preview"
        style={{ display: "none" }} // Keeping it hidden for Open Graph
      />

      {/* Display Rickroll GIF when the site opens */}
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTEyZmtybDdud2xoMjU3cng4bTJpZ2ppd2hjOXFsM3MzYjIxMzJ2aiZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/D8vC3ehZ1JpGE/giphy.gif"
        alt="Never Gonna Give You Up"
        className="w-full h-full object-cover sm:w-auto sm:h-auto"
      />
    </div>
  );
}

export default App;
