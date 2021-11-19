import { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import WorkshopCard from "../../components/workshopcard";

function App() {
  const [workshopName, setWorkshopName] = useState("");
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const workshopString = localStorage.getItem("workshops");
    if (workshopString.length > 0) {
      const workshopArray = workshopString.split(",");
      setWorkshops(workshopArray);
    }
  }, []);

  useEffect(() => {
    if (workshops.length > 0) {
      localStorage.setItem("workshops", workshops);
    }
  }, [workshops]);

  const test = () => {
    setWorkshops([...workshops, workshopName]);
    setWorkshopName("");
  };

  const onChange = (event) => {
    setWorkshopName(event.target.value);
  };

  const removeWorkshop = (id) => {
    const newWorkshops = workshops.filter(
      (nameOfWorkshop, index) => index !== id
    );
    setWorkshops(newWorkshops);

    if (newWorkshops.length === 0) {
      localStorage.setItem("workshops", newWorkshops);
    }
  };

  return (
    <div>
      <Input value={workshopName} onChange={onChange}></Input>
      <Button onClick={test}>Dodaj warsztat</Button>
      {workshops.length === 0 && <p>Brak warsztatów</p>}
      {workshops.map((singleWorkshop, index) => (
        <WorkshopCard
          key={index}
          name={singleWorkshop}
          id={index}
          removeWorkshop={removeWorkshop}
        />
      ))}
    </div>
  );
}

export default App;
