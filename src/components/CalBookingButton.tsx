type CalBookingButtonProps = {
  label?: string;
  className?: string;
};

const CAL_LINK = "https://cal.com/hassan-iftikhar";

const CalBookingButton = ({
  label = "Book a call",
  className = "",
}: CalBookingButtonProps) => {
  return (
    <a
      href={CAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-sm md:text-md inline-flex items-center justify-center rounded-xl outline outline-blue-300 border border-blue-400 bg-blue-600 px-4 py-2 text-white shadow-md transition-all duration-200 hover:cursor-pointer hover:border-blue-600 hover:outline-blue-400 hover:bg-blue-500 ${className}`.trim()}
    >
      {label}
    </a>
  );
};

export default CalBookingButton;
