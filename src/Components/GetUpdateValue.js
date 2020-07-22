import React from 'react'

const Forms = ({item, onSubmit}) => {
    return (
      <form onSubmit={onSubmit} key={item.userId}>
        <label>
          First Name
          <input type="text" name="userName" defaultValue={item.userName} />
        </label>
        <label>
          Last Name
          <input type="text" name="email" defaultValue={item.email} />
        </label>
        <button>Submit!</button>
      </form>
    )
  }
  
  Forms.defaultValue={
      item:[]
  }
//   Form.defaultProps= {
//     item: []
//   }
  
//   Form.PropTypes = {
//     item: PropTypes.object,
//     onSubmit: PropTypes.func.isRequired
//   }


  export default Forms;