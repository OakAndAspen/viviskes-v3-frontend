import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 my-3">
                    <img src="images/divers/groupPhoto.png" className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h1>Présentation</h1>

                    <p>Si nous devions résumer en une seule question tout ce qui motive les quelques quarante membres de
                        l’association Viviskes, cela serait : comment vivaient les Celtes ?</p>

                    <p>Cette question, l’association d’anthropologie guerrière Viviskes essaie d’y répondre en adoptant
                        une approche pratique basée sur l’expérimentation, tout en profitant des lumières des
                        archéologues et artisans intégrés à l’association. Dans ce cadre, nous proposons de nombreuses
                        animations d'histoire vivante.</p>

                    <h1>Agenda</h1>
                    <h2>Futurs évènements publics</h2>
                    <p><em>/api/events</em></p>
                    <h2>Evènements récents</h2>
                    <p><em>/api/events</em></p>
                </div>
                <div className="col-md-4">
                    <h2>Nos partenaires</h2>
                    <p><em>/api/partners</em></p>
                </div>
            </div>
        );
    }
}

