function GridLayout() {
  return (
    <div className="container text-center">
      <div className="row mb-3">
        <div className="col bg-secondary text-white border">First col</div>
        <div className="col bg-secondary text-white border">Second col</div>
      </div>
      <div className="row mb-3">
        <div className="col bg-secondary text-white border">col</div>
        <div className="col bg-secondary text-white border">col</div>
        <div className="col bg-secondary text-white border">col</div>
      </div>
      <div className="row mb-3">
        <div className="col bg-secondary text-white border">col</div>
        <div className="col bg-secondary text-white border">col</div>
        <div className="col bg-secondary text-white border">col</div>
      </div>
    </div>
  );
}
export default GridLayout;
