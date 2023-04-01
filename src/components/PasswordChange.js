import React from "react";

function PasswordChange(){

return (
    <div>
    <form>
    <label htmlFor="user_name">user_name: </label>
    <input type="text" name="user_name" onChange={(e) => setUsername(e.target.value)}/>
    <label htmlFor="email">email: </label>
    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
    <input type="submit" value="Reset Password" />
    </form>
    </div>
)
}

export default PasswordChange