import { Link } from "react-router-dom";

function SearchResults(props) {
  console.log("selecteditem", props.selectedItem);
  function testClick(e, item) {
    console.log(item);
    props.setSelectedItem(item);
  }
  const items = props.searchResults;
  console.log("PROP ITEM", items);

  return (
    <ul>
      {items.map((item) => (
        <div
          onClick={(e) => {
            testClick(e, item);
          }}
          href={`https://www.wowhead.com/item=${item.itemId}`}
        >
          <img style={{ width: "30px", height: "30px" }} src={item.icon}></img>
          <li key={item.itemId}>{item.name}</li>
        </div>
      ))}
    </ul>
  );
}

export default SearchResults;
