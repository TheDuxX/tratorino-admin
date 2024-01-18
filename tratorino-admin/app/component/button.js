const Button = ({ text, onClick }) => {
  return (
    <button type="button" className="bg-primary h-[48px] rounded-[48px] w-full text-white font-semibold text-[18px]" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;