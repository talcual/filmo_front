
'use client'

import { useEffect, useState} from "react";

interface Film {
    nombre:string, 
    resumen:string,
    idioma:string
}

export default function Home() {


    const [films, setFilms] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token') || null;
 
        const Filmos = (token:string) => {
            
            fetch('http://localhost:3002/app/film/get?q=boy', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' + token
                },
            })
            .then(response => response.json())
            .then(data => {
                setFilms(data);
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            
        }

        if (token) {
            Filmos(token);
        }

    }, []);


    return (
        
        <>


        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">Flix Film</h1>
                        <p className="fs-4">Flix Film el site de videos academicos</p>
                        <a className="btn btn-primary btn-lg" href="/login">Ingresar</a>
                    </div>
                </div>
            </div>
        </header>

        <div>
            
        </div>

        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                                          {
                            films.map((film:Film, index:number) => (
                    <div className="col-lg-6 col-xxl-4 mb-5" key={index}>


                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-film"></i></div>
                                        <h2 className="fs-4 fw-bold">{film.nombre}</h2>
                                        <p className="mb-0">{film.idioma}</p>
                                    </div>
                                </div>

                    </div>
                            ))
                        }
                </div>
            </div>
        </section>

        
        </>
        

     )

}