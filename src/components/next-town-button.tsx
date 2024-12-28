interface NextTownButtonProps {
  addTown: () => void;
}

const NextTownButton = ({ addTown }: NextTownButtonProps) => {
  return (
    <div
      className="bg-town-button cursor-pointer text-center border-2 border-dashed border-town-border rounded p-4"
      onClick={addTown}
    >
      Add next town
    </div>
  );
};

export default NextTownButton;
