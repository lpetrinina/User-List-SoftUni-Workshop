import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Header />

      {/* <!-- Main component  --> */}
      <main className="main">
        {/* <!-- Section component  --> */}
        <UserList />
      </main>

      <Footer />
    </>
  );
}

export default App;
