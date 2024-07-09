import './App.css';
import Item from './components/item';
import ItemDate from './components/ItemDate'
function App() {

  const response = [
    {
      itemName: "Nirma",
      itemData: "11",
      itemMonth: "May",
      itemYear: "2011"
    },
    {
      itemName: "SurfExcel",
      itemData: "12",
      itemMonth: "nov",
      itemYear: "2021"

    },
    {
      itemName: "555",
      itemData: "16",
      itemMonth: "April",
      itemYear: "2023"
    }
  ]

  const itemTwoName = "SurfExcel"
  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemData} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={itemTwoName}></Item>
      <ItemDate day={response[0].itemData} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name="555"></Item>
      <ItemDate day={response[0].itemData} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

      <div className="App">
        Hello Jee
      </div>
    </div>
  );
}

export default App;
