import './Error.css';

const Error = ({ error }) => {
  return (
    <div className="Error">
      <h2>{error}</h2>
    </div>
  );
};

export default Error;
