import '../App.css';

const MyForm = ({setColor, setCheckColor}) => {
  return (
  <form onSubmit={(e)=>{
            e.preventDefault()  
          setColor(e.target.viyan.value)
          setCheckColor(true)
            }}>
                <input type="text"
                placeholder="Write color name or hexa value"
                name="viyan"
                />
                <button type="submit"> Add </button>
          </form>
  )
}

export default MyForm
