export const Question2 = () => {
  return (
    <div className="q2">
      <h2>Novell Services Login</h2>
      <form>
        <table cellSpacing="10" cellPadding="14">
          <tbody>
            <tr>
              <td>Username: </td>
              <td>
                <input type="text" placeholder="Enter username" />
              </td>
            </tr>
            <tr>
              <td>Password: </td>
              <td>
                <input type="password" placeholder="Enter password" />
              </td>
            </tr>
            <tr>
              <td>City of Employment: </td>
              <td>
                <input type="text" placeholer="Enter city" />
              </td>
            </tr>
            <tr>
              <td>Web Server: </td>
              <td>
                <select defaultValue="">
                  <option value="" disabled>
                    --Choose an Option--
                  </option>
                  <option value="AMAZON">AMAZON</option>
                  <option value="GOOGLE">GOOGLE</option>
                  <option value="VITCHENNAI">VITCHENNAI</option>
                  <option value="MICROSOFT">MICROSOFT</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Please specify your role: </td>
              <td>
                <input type="radio" name="role" id="admin" />
                <label htmlFor="admin">Admin</label>
                <br />
                <input type="radio" name="role" id="engineer" />
                <label htmlFor="engineer">Engineer</label>
                <br />
                <input type="radio" name="role" id="manager" />
                <label htmlFor="manager">Manager</label>
                <br />
                <input type="radio" name="role" id="guest" />
                <label htmlFor="guest">Guest</label>
              </td>
            </tr>
            <tr>
              <td>Single Sign-on to the following:</td>
              <td>
                <input type="checkbox" name="signon" id="mail" />
                <label htmlFor="mail">Mail</label>
                <br />
                <input type="checkbox" name="signon" id="payroll" />
                <label htmlFor="payroll">Payroll</label>
                <br />
                <input type="checkbox" name="signon" id="self-service" />
                <label htmlFor="self-service">Self-Service</label>
              </td>
            </tr>
            <tr>
              <td id="bottomBtns">
                <button type="button">Login</button>
              </td>
              <td>
                <input type="reset" value="Reset" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
