
import List from "./list";
import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <List users={data} />
    </div>
  );
}