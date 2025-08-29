import '../App.css';

const MyForm = ({setColor}) => {
  return (
          <>
                <input type="text"
                placeholder="Write color name or hexa value"
                // name="viyan"
                onChange={ (e) =>  setColor(e.target.value)}
                />
          </>
  )
}

export default MyForm
