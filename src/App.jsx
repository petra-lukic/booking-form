import { useState } from 'react'; 
import DatePicker from 'react-datepicker';
import Modal from './Modal'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './Styles/App.scss'; 
export default function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    numPeople: 2,
    date: new Date(),
    time: '08:00',
    comments: ''
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // State to control modal visibility
  const [modalOpen, setModalOpen] = useState(false);

  // Handler to update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value 
    }));
  };

  // Handler to update form data on date change
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date 
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formattedDate = formatDate(formData.date); 
    setSubmittedData({
      ...formData,
      date: formattedDate 
    });
    setModalOpen(true);
  };

  // Function to format date as dd/MM/yyyy
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; 
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setModalOpen(false); 
  };

  return (
    <section className='app'>
      <h1 className='app_headline'>Ready For Action? Book Your Game!</h1>
      <form className='app_form' onSubmit={handleSubmit}>
        <div className='app_form_line'>
          {/* Container for first name input */}
          <div className='app_form_line_container app_form_line_container--line'>
            <label>First name:</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Container for last name input */}
          <div className='app_form_line_container app_form_line_container--line'>
            <label>Last name:</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Container for email input */}
        <div className='app_form_line app_form_line_container--line'>
          <div className='app_form_line_container'>
            <label>Email:</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
          </div>
        </div>
        <div className='app_form_line'>
          {/* Container for number of people in the booking input */}
          <div className='app_form_line_container app_form_line_container--box'>
            <label>Number of people:</label>
            <input
              type='number'
              name='numPeople'
              value={formData.numPeople}
              onChange={handleChange}
              min='2'
              max='40'
              required
            />
          </div>
          {/* Container for date picker */}
          <div className='app_form_line_container app_form_line_container--box'>
            <label>Date:</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat='dd/MM/yyyy'
              className='datepicker'
              required
            />
          </div>
          {/* Container for time selection */}
          <div className='app_form_line_container app_form_line_container--box'>
            <label>Time:</label>
            <select
              name='time'
              value={formData.time}
              onChange={handleChange}
              required
            >
              {/* Generate time options from 08:00 to 19:00 */}
              {Array.from({ length: 12 }, (_, i) => i + 8).map(hour => (
                <option key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                  {hour.toString().padStart(2, '0')}:00
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Container for additional comments */}
        <div className='app_form_line'>
          <div className='app_form_line_container app_form_line_container--line'>
            <label>Additional comments:</label>
            <textarea
              name='comments'
              value={formData.comments}
              onChange={handleChange}
              maxLength='300'
            />
          </div>
        </div>
        <button className='app_form_submit-button' type='submit'>Submit</button>
      </form>

      {/* Modal to display submitted data */}
      {modalOpen && 
        (<Modal onClose={handleCloseModal}>
          <section className='app_submitted-data'>
            <h2>Submitted Data</h2>
            <p>First name: <span>{submittedData.firstName}</span></p>
            <p>Last name: <span>{submittedData.lastName}</span></p>
            <p>Email: <span>{submittedData.email}</span></p>
            <p>Number of people: <span>{submittedData.numPeople}</span></p>
            <p>Date: <span>{submittedData.date}</span></p>
            <p>Time: <span>{submittedData.time}</span></p>
            <p>Additional comments: <span>{submittedData.comments}</span></p>
        </section>
      </Modal>)}
    </section>
  );
};

