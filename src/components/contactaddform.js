import { Link } from 'react-router-dom';

function ContactAddForm() {
  return (
    <>
      <div>
        <Link to="/">Go back</Link>
      </div>
      <div>
        <form>
          <div class="mb-3">
            <label for="nameInput" class="form-label">
              Name of My Friend
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleNameInput"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactAddForm;
