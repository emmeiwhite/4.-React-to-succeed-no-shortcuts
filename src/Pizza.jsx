export default function Pizza(props) {
  return (
    <div className="pizza">
      <img
        src={props.image}
        alt={props.name}
      />
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

// Revisit: React renders the component based on its current data. And data must be kept in sync with the application UI. And this data is made out of props and state.
