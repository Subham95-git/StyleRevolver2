import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import kurta from '../Resorces/kurta.jpg';
const FlexCard = ()=>{
    const header = (
        <img alt="Card" src={kurta} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
    );
    return(
        <div className="p-d-flex p-flex-wrap-reverse">
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
        <div className="p-mr-2 p-mb-2">
        <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={header}>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                </Card>
        </div>
    </div>
    // <div>
        
    // </div>
    );
    
}
export default FlexCard;