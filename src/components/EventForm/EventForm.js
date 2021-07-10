import './EventForm.css'


function EventForm() {

  return(
    <>
      <form>
        <label for='Date'>Date of tee time:</label>
        <input
          type='date'
          name='Date'
          id='Date'
        />
        <label for='Tee Time'>Tee Time:</label>
        <input
          type='time'
          name='Tee Time'
          id='Tee Time'
          min='07:00'
          max='17:00'
          required
        />
        <label for='num players'>Open Positions:</label>
        <select
          name='num players'
          id='num players'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </form>
    </>
  )
}

export default EventForm