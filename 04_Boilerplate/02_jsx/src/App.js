import logo from "./birdy.png";
import "./App.css";
import gezwitscher from "./gezwitscher.js";

// ohne map

// function App() {
//   const post = {
//     user: "Ferdi Hoske",
//     content: "Lerne gerade React. Macht voll Spaß!",
//     date: "10-05-2017 11:01",
//   };

//   return (
//     <div className="App">
//       <img src={logo} className="logo" alt="logo" />
//       <h1 className="twitter-blue">Zwitscher</h1>
//       <h2>Posts</h2>
//       <p>
//         <b>{post.user}</b>
//       </p>
//       <p>{post.content}</p>
//       <p>{post.date}</p>
//     </div>
//   );
// }

// mit map

function App() {
  const posts = gezwitscher.map((post, index) => {
    return (
      <div key={index}>
        <p>
          <b>{post.user}</b>
        </p>
        <p>{post.content}</p>
        <p>{post.date}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
      <h2>Posts</h2>
      {posts}
    </div>
  );
}

export default App;
