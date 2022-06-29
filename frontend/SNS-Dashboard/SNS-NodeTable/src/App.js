import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1>All SNS Node Details</h1><br></br>
          <h4>One Click to pay all node</h4>
          <button class="btn btn-primary" type="submit">MultiPay</button><br></br><br></br>
    <table class="table table-dark table-striped">
      <thead>
              <tr>
                <th scope="col">Node Name</th>
                <th scope="col">Node Address</th>
                <th scope="col">Total Size</th>
                <th scope="col">Free Size</th>
                <th scope="col">Allocated Size</th>
                <th scope='col'>Payment Amount</th>
                <th scope='col'> Payment</th>
              </tr>
            </thead>
            <tbody>
            
                   <tr>
                        <td>Hell</td>
                        <td>0x5533</td>
                        <td>fref</td>
                        <td>fef</td>
                        <td>fef</td>
                        <td>fef</td>
                        <td><button class="btn btn-primary" type="submit">Pay</button></td>
                  </tr>  
                
            </tbody>
      </table>
      </div>
</div>
</div>
    </div>
  );
}

export default App;
