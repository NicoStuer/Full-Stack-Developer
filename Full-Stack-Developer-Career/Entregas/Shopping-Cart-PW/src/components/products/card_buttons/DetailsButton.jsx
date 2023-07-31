
function DetailsButton({onClick}) {
  return (
    <div className="flex items-center">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClick}>
        Details
      </button>
    </div>
  );
}

export default DetailsButton;
