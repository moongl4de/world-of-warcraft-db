export default function SearchResults(props) {
  console.log(props);
  if (props.searchResults.length > 0) {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.788)",
          padding: "4px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.116)",
        }}
      >
        {props.searchResults.map((item, index) => (
          <div className="row">
            <div className="col-md-2">
              <img style={{ width: "70px" }} src={item.icon}></img>
            </div>
            <div className="col-md-10" style={{ paddingTop: "10px" }}>
              <a
                style={{ fontSize: "20px", color: "#ff8000" }}
                href="#"
                data-wowhead={`item=${item.itemId}`}
                key={index}
              >
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
