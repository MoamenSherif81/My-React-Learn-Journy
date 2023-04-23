function  Box(props){

  const styles = {
    backgroundColor: 
      props.on ? '#222' : 'transparent',
    color: 
      props.on ? '#fff' : '#000',
  }

  return (
    <div className='box' style={styles} onClick={props.handleClick}>
        {props.id}
    </div>
  )
}

export default Box;