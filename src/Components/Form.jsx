
function Form() {

    return(
        <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
              .....................
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          reminder=""
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add Task
        </button>
      </form>
    );
};


export default Form;