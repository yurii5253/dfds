const printInfo = (data) => {
    console.log(data)
   }
   
   function Form(props) {
    return (
    <form>
    <input className="input" placeholder={props.info} />
    <button type="button" onClick={e => printInfo("Click")}>Натисни</button>
    </form>)
   }
   
   Form.defaultProps = {
    info: 'Впишіть дані'
   }
   
   export default Form;