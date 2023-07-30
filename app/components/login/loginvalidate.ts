export async function loginValidate(username:string,password:string){
    const data = await fetch("http://localhost:8080/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "username":username,
            "password":password
          }),
    });
    const user = await data.json();
    console.log(user);
    return user;
}