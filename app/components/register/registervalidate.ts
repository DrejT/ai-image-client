export async function registerValidate(username:string,email:string,password:string) {
    const newUser = await fetch("http://localhost/8080/register", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "username":username,
            "email":email,
            "password":password
          }),
    })
    const userdata = await newUser.json();
    return userdata;
}