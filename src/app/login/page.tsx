
'use client'

import { useState } from  'react'

export default function Login() {
  
    const [user, setUser] = useState({
        usuario: 'Hola, Usuario',
        passwd : ''
    })


    const Login = () => {
        
        fetch('https://quickest-corissa-toscanodev-1ef86f3a.koyeb.app/app/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user.usuario,
                password: user.passwd,
            }),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);

            const d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days in milliseconds
            const expires = "expires=" + d.toUTCString();
            document.cookie = "token="+data.token+";" + expires + ";path=/";

            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    const fillUser = (username:string) => {
        console.log(username);
        setUser({
            ...user, usuario : username
        })
    }

    const fillPasswd = (passwd:string) => {
        setUser({
            ...user, passwd: passwd
        })
    }


    return (
       
       <>
         

         <header className="py-5 ">
            <div className="container w-50">
                <div className="p-4 p-lg-3 bg-light rounded-3 text-left">
                    <div className="m-4">

                        <h2>{user.usuario}</h2>

                        <form action="">

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => fillUser(e.target.value)} />
                                <div id="emailHelp" className="form-text">{ "We'll never share your email with anyone else." }</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => fillPasswd(e.target.value)} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>

                            <button type="button" className="btn btn-primary" onClick={() => Login()}>Login</button>

                        </form>


                    </div>
                </div>
            </div>
        </header>
         

       </>
    )

}