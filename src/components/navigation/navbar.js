function NavigationBar(props) {
  return (
    <>
      <h3>Here is a Navigation Bar {props.name}</h3>
      {props.submenu ? <p>{props.submenu}</p> : <p>Sub-menu does not exists</p>}
    </>
  );
}
export default NavigationBar;
