import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";
import Modal from "./Modal";
// const initialErrorMessageState = {
//   title: false,
//   description: false,
//   dueDate: false,
// };
export default function NewTask({ onAddTask, onCancelTask }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  // function handleFormError(key, value) {
  //   setErrorMessage((prev) => ({ ...prev, [key]: value.trim() === "" }));
  // }

  // function handleFormSubmission(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const formObj = Object.fromEntries(formData.entries());
  //   Object.entries(formObj).forEach(([key, value]) => {
  //     handleFormError(key, value);
  //   });
  //   const sendData = Object.values(formObj).every((val) => val !== "");
  //   console.log(sendData);
  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   handleFormError(name, value);
  // }

  // const [errorMessage, setErrorMessage] = useState(initialErrorMessageState);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredTitle.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddTask({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>
          Oops... looks like you forget to entered all values
        </p>
        <p className='text-stone-600 mb-4'>
          Please Make sure you provided valid input for every input field.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <div>
          <Input
            label='Title'
            name='title'
            type='text'
            // value={title}
            ref={title}
          />
          <Input
            label='Description'
            isTextArea
            name='description'
            // value={description}
            ref={description}
          />
          <Input
            label='Due Date'
            name='dueDate'
            type='date'
            // value={dueDate}
            ref={dueDate}
          />
          <menu className='flex items-center justify-end gap-4 my-4'>
            <li>
              <button
                type='button'
                className='text-stone-800 hover:text-stone-950'
                onClick={onCancelTask}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                type='button'
                onClick={handleSave}
              >
                Save
              </button>
            </li>
          </menu>
        </div>
      </div>
    </>
  );
}
