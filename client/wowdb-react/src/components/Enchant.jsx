function Enchant(props) {
  if (props.iconURL) {
    return (
      <a target="_blank" href={`https://www.wowhead.com/item=${props.itemId}`}>
        <img
          className={`enchantIcon ${props.rarity}`}
          src={props.iconURL}
        ></img>
      </a>
    );
  }
}

export default Enchant;
