export const MessageCompose: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Abgesendet!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Absenden</button>
    </form>
  );
};
