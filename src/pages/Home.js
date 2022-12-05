import React, {Component} from 'react';

export class Home extends Component {


    render(){
        return(

            <div className="homepage">

                {/* VER COMO CENTRAR LA CARTA */}
                <div className="mt-4" style={{justifyContent: 'space-between'}}>
                    <div className="card mb-3 align-self-center" style={{maxWidth: '540px'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="edificio.jpeg" className="img-fluid rounded-start " id="imgHome"  alt="Edificio" style={{opacity: 0.7}} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Infinity</h5>
                                <p className="card-text">La empresa fue fundada en el año 1958. Somos una de las administraciones de consorcios más importantes del país.
                    
                                    Ofrecemos solidez y confianza basada en nuestra trayectoria. La actividad se ha ido complejizando a través de los años y hemos sabido responder a los nuevos desafíos. Tenemos como objetivo jerarquizarla mejorando continuamente nuestra calidad de servicio.
                                    
                                    Para saber más sobre nosotros y nuestra historia, tradición y legado haga click aquí.
                                </p>
                                <p className="card-text"><small className="text-muted">Lorem ipsum dolor sit amet.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                    <div className="card text-bg-secondary mb-3 m-4" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Beneficio 1</div>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
            
                    <div className="card text-bg-secondary mb-3 m-4" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Beneficio 2</div>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
            
                    <div className="card text-bg-secondary mb-3 m-4" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Beneficio 3</div>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
            
                    <div className="card text-bg-secondary mb-3 m-4" style={{maxWidth: '18rem'}}>
                        <div className="card-header">Beneficio 4</div>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet..</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
