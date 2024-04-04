import "./Tools.css";

function ToolsCard({ name, img }) {
  return (
    <>
      <h3>{name}</h3>
      <div className="octagonWrap">
        <div className="octagon">
          <img src={img} />
        </div>
      </div>

      <div className="shadow"></div>
    </>
  );
}

export default ToolsCard;
