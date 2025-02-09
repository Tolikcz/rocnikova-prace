import { Link } from "react-router-dom"


export default function Home() {
  return (
    <>
        <h1>Home page</h1>
        <Link to={"/create-monkey"}>
          <button>Create monkey</button>
        </Link>
        <Link to="/monkeys">
          <button>Show monkeys</button>
        </Link>
    </>
  )
}
