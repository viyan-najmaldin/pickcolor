import '../App.css';

const MyForm = ({setColor}) => {
  return (
  <form onSubmit={(e)=>{
            e.preventDefault()  
          setColor(e.target.viyan.value)
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
