function handleFormSubmit() {
    event.preventDefault();
    console.log("Form was Submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="Enter your details"/>
      <button>Submit</button>
    </form>
  );
}
