"use client";
const Customers = () => {
return (
  <div className="flex min-h-screen flex-col items-center justify-center bg-[#3c7091]">
    <table>
      <caption>All Customers</caption>
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Current Balance (₹)</th>
          <th scope="col">Send Money</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Chris</th>
          <td>HTML tables</td>
          <td>22</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">Dennis</th>
          <td>Web accessibility</td>
          <td>45</td>
          <td>45</td>
        </tr>
        <tr>
          <th scope="row">Sarah</th>
          <td>JavaScript frameworks</td>
          <td>29</td>
          <td>29</td>
        </tr>
        <tr>
          <th scope="row">Karen</th>
          <td>Web performance</td>
          <td>36</td>
          <td>36</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan={3}>
            Net Current Balance (₹)
          </th>
          <td>33</td>
        </tr>
        <tr>
          <th scope="row" colSpan={3}>
            Total Customers
          </th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

};

export default Customers;
