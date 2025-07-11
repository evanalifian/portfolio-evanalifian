import Header from "./components/layout/Header";
import Jumbotron from "./components/layout/Jumbotron";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4">
        <Jumbotron />
      </main>
    </>
  );
}
