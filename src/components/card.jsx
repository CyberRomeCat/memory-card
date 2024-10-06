// eslint-disable-next-line react/prop-types
export default function Card({ image, titanId }) {
  function onClick() {
    alert('works');
  }

  return (
    <>
      <div className="card" key={titanId} onClick={onClick}>
        {image}
      </div>
    </>
  );
}
