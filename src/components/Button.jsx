const Button = ({ text, type = "primary", onClick, noStyle }) => {
  const btnCss =
    type === "primary"
      ? "text-white bg-green-800"
      : !noStyle && "text-green-800 bg-white border border-green-800";
  return (
    <button
      onClick={onClick}
      className={`${btnCss} rounded-3xl font-bold px-6 py-2 text-sm`}
    >
      {text}
    </button>
  );
};

export default Button;
