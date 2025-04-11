export const Question2 = () => {
  const fruits = ["Apple", "Orange", "Strawberry"];
  return (
    <div className="fruits">
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};
