import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllMonkeys } from "../../models/monkeys"

export default function MonkeyList() {
  const [monkeys, setMonkeys] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllMonkeys();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMonkeys(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    
  }

  return (
    <div>
    
    </div>
  )
}
