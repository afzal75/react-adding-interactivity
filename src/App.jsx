/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => console.log("Playing!")}
//       onUploadImage={() => console.log("Uploading!")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onSmach={onPlayMovie}>Play Movie</Button>
//       <Button onSmach={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onSmach, children }) {
//   return <button onSmach={onSmach}>{children}</button>;
// }

// ! event Propagetion

// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onSmach={() => {
//         console.log("You clicked on the toolbar!");
//       }}
//     >
//       <button onSmach={() => console.log("Playing!")}>Play Movie</button>
//       <button onSmach={() => console.log("Uploading!")}>Upload Image</button>
//     </div>
//   );
// }

// * stopPropagation()

// function Button({ onSmach, children }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onSmach();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         console.log("You clicked on the toolbar!");
//       }}
//     >
//       <Button onSmach={() => console.log("Playing!")}>Play Movie</Button>
//       <Button onSmach={() => console.log("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// }

// !preventDefault();

// export default function Signup() {
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//       }}
//     >
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// ! STATE

// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   // let index = 0;

//   function handleClick() {
//     // index = index + 1;
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h2>
//         <i>{sculpture?.name} </i>
//         by {sculpture?.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList?.length})
//       </h3>
//       <img src={sculpture?.url} alt={sculpture.alt} />
//       <p>{sculpture.description}</p>
//     </>
//   );
// }

// ! Multiple state using antoher example

// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>Next</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }

// ! use state using OBJECT{}

// import { useState } from "react";
// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   return (
//     <div
//       // ! another way

//       onPointerMove={(e) => {
//         const newPosition = {};
//         (newPosition.x = e.clientX), (newPosition.y = e.clientY);

//         setPosition(newPosition);
//       }}
//       // onPointerMove={(e) => {
//       //   setPosition({
//       //     x: e.clientX,
//       //     y: e.clientY,
//       //   });
//       // }}

//       // onPointerMove={e => {
//       //   position.x = e.clientX;  // ! sorasori state er object mutation kora jabe na
//       //   position.y = e.clientY;
//       // }}

//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           backgroundColor: "red",
//           borderRadius: "50%",
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           left: -10,
//           top: -10,
//           width: 20,
//           height: 20,
//         }}
//       />
//     </div>
//   );
// }
