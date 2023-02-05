function Item(props) {
  return (
    <a
      target="_blank"
      href={`https://www.wowhead.com/classic/item=${props.itemId}`}
    >
      <img className={`bisIcon ${props.rarity}`} src={props.iconURL}></img>
    </a>
  );
}

export default Item;

//<a href="https://www.wowhead.com/item=25697" class="q3" data-wowhead="gems=23121&amp;ench=2647&amp;pcs=25695:25696:25697">[Felstalker Bracers]</a>
