import "./App.css";
// bootstrap.css
import "bootstrap/dist/css/bootstrap.min.css";
import AddInventory from "./components/classComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Product Inventory Form</h1>       
       <AddInventory/>
      {/*<h1>We will</h1>
       <ul>
        <li>React js ref vs syntheticEvent</li>
        <li>Form in reactjs</li>
        <li>Reactjs Hook:useState()</li>
        <li>React components: function vs class</li>
        <li>Add Product name,price, quantity in inventory data</li>
        <li>React-Bootstrap use case</li>
  </ul>*/} 
      </header>
    </div>
  );
}

export default App;
