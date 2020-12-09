const Data = ({ records }) => {
  return (
    <div>
      {records.map((item, i) => (
        <h1 key={i}>{item.fields.Name}</h1>
      ))}
    </div>
  );
};

export default Data;
