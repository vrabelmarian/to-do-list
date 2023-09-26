import './styles.css';

export default function App() {
  return (
    <form className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item">New item</label>
        <br/>
        <input 
          type="text"
          id="item"
          placeholder="learn e.c."></input>
      </div>
      <button className="btn" >Add</button>
    </form>
  )
}