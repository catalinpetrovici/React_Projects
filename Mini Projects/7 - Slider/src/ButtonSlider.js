const Button = ({ onClick, icon, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
    </button>
  );
};
export default Button;
