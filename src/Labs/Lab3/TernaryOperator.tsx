const TernaryOperator = () => {
    let loggedIn = true;
  
    return (
      <div id="wd-ternary-operator">
        <h4>Logged In</h4>
        {loggedIn ? <p>Welcome</p> : <p>Please login</p>} {/* Ternary operator */}
        <hr />
      </div>
    );
  };
  
  export default TernaryOperator;