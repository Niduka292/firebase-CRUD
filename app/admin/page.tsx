export default function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registered</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@email.com</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}