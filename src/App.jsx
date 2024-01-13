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

// ! preventDefault()

export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
