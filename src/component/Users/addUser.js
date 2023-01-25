import React from 'react'

export default function addUser(props) {

     function addUserHandler(event){
        event.preventDefaults();
    }
    
  return (
    <div>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="text"/>
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}
