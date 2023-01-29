export default function SearchResults(props) {
  console.log(props);
  if (props.searchResults.length > 0) {
    return (
      <ul>
        {props.searchResults.map((item, index) => (
          // console.log(item.name)
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
