import Item from "./Item.jsx";

export default function ListItem() {
  return (
    <div className="container">
      <Item
        img={"https://i.imgur.com/jImRpPw.jpg"}
        productName={"AirPods Pro"}
        price={"249"}
      />

      <Item
        img={"https://i.imgur.com/LUyQhmF.jpg"}
        productName={"Nintendo Switch"}
        price={"299"}
      />

      <Item
        img={"https://i.imgur.com/CugpEfY.jpg"}
        productName={"PS5"}
        price={"499"}
      />

      <Item
        img={"https://i.imgur.com/HgPROm3.jpg"}
        productName={"Xbox Series X"}
        price={"499"}
      />

      <Item
        img={"https://i.imgur.com/SH7FrjV.jpg"}
        productName={"Iphone 14 Pro Max - 1TB"}
        price={"1,599"}
      />

      <Item
        img={"https://i.imgur.com/1Vf4DWy.jpg"}
        productName={"Samsung S22 Ultra - 1TB"}
        price={"1,399"}
      />

      <Item
        img={"https://i.imgur.com/69V42nb.jpg"}
        productName={"MacBook Pro 14' M1 Max (64GB RAM | 4TB)"}
        price={"4,699"}
      />

      <Item
        img={"https://i.imgur.com/TaO01Rv.jpg"}
        productName={"2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"}
        price={"6,999"}
      />

      <Item
        img={"https://i.imgur.com/PXJj7z0.jpg"}
        productName={"Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"}
        price={"4,950"}
      />
    </div>
  );
}
