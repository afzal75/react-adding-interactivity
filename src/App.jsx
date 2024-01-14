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

// ! State Object

// import { useState } from "react";

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@sculpture.com",
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person, // ! spreding person
//       firstName: e.target.value, // New first name from the input
//       // lastName: person.lastName,
//       // email: person.email,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person, // ! spreding person
//       lastName: e.target.value, // New first name from the input
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person, // ! spreding person
//       email: e.target.value, // New first name from the input
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={person.firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={person.lastName} onChange={handleLastNameChange} />
//       </label>
//       <label>
//         Email:
//         <input value={person.email} onChange={handleEmailChange} />
//       </label>
//       <p>
//         {person.firstName} {person.lastName} ({person.email})
//       </p>
//     </>
//   );
// }

// ! ===============================================================

// import { useState } from "react";

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@sculpture.com",
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value,
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={person.firstName} onChange={handleChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={person.lastName} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input value={person.email} onChange={handleChange} />
//       </label>
//       <p>
//         {person.firstName} {person.lastName} ({person.email})
//       </p>
//     </>
//   );
// }

// ! ===============================================================

// import { useState } from "react";

// export default function Form() {
//   const [person, setPerson] = useState({
//     name: "Niki de Saint Phalle",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   function handleNameChange(e) {
//     setPerson({
//       ...person,
//       name: e.target.value,
//     });
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value,
//       },
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         city: e.target.value,
//       },
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value,
//       },
//     });
//   }

//   return (
//     <>
//       <label>
//         Name:
//         <input value={person.name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Title:
//         <input value={person.artwork.title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         City:
//         <input value={person.artwork.city} onChange={handleCityChange} />
//       </label>
//       <label>
//         Image:
//         <input value={person.artwork.image} onChange={handleImageChange} />
//       </label>
//       <p>
//         <i>{person.artwork.title}</i>
//         {" by "}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </>
//   );
// }

// ! =======================Using UseImmer=======================

import { useImmer } from "use-immer";

export default function Form() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    updatePerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
