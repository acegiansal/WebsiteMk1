import shadow from "../assets/thin_shadow_smaller.png";

interface ShadowCardProps {
  shadowGap: number;
  maxWidth: number;
}

const ShadowCard = ({ shadowGap, maxWidth }: ShadowCardProps) => {
  const cardBuffer = 20;
  const cardStyle = {
    width: maxWidth,
  };

  const floatStyle = {
    height: shadowGap,
    width: maxWidth,
  };

  const shadowStyle = {
    height: 40,
    width: maxWidth,
  };

  const floatDiv = <div style={floatStyle}></div>;

  return (
    <>
      <div>
        <div className="card border-dark mx-1" style={cardStyle}>
          <div className="card-header">Test Floating Card</div>
          <div className="card-body">
            <h5 className="card-title">Go sens Go?</h5>
            <p className="card-text">
              Does this shadow effect really look good? Do I need something else
              here?
            </p>
            <a href="#" className="btn btn-primary">
              This button does nothing
            </a>
          </div>
        </div>
        <br />
        {floatDiv}
        <br />
        <img src={shadow} style={shadowStyle} alt="shadow" />
      </div>
    </>
  );
};

export default ShadowCard;