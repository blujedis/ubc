
const DEFAULTS = {
  name: 'Guest User',
  img: 'https://via.placeholder.com/100',
  email: 'user@mail.com',
  size: 100
};

const _wrapperStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const _divStyle = {
  display: 'flex',
  border: '2px solid #444',
  borderRadius: '6px',
  overflow: 'hidden'
};

const _imgStyle = {
  objectFit: 'cover'
};

const EvComponent = (props) => {
  props = {
    ...DEFAULTS,
    ...props
  };
  const { name, img, email, size } = props;
  const wrapperStyle = { ..._wrapperStyle };
  const divStyle = { ..._divStyle };
  const imgStyle = { ..._imgStyle, width: size };
  return (
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <img src={img} style={imgStyle} />
      </div>
      <div>
        <p>{name}</p>
        <p><a href={'mailto:' + email}>{email}</a></p>
      </div>
    </div>
  );
};

export default EvComponent;

