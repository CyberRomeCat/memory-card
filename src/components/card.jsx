// eslint-disable-next-line react/prop-types
export default function Card({ image, titanID, onClick }) {
  return (
    <div className="card" id={titanID} onClick={onClick}>
      {image}
    </div>
  );
}
