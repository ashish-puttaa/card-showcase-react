import React from 'react';
import ViewBox from './components/view-box/view-box.component.js';
import Card from './components/card/card.component';
import './App.css';

import sereja from './images/sereja-ris-zGyG2OyLu4k-unsplash.jpg';
import husen from './images/husen-siraaj-zyJkh98ySE0-unsplash.jpg';
import houston from './images/houston-ray-bkZlpn5iMEM-unsplash.jpg';
import dimitar from './images/dimitar-donovski-RyvVnWaWbjI-unsplash.jpg';

function App() {
   return (
      <ViewBox>
         <h1 className="title">Showcase</h1>
         <div className="card-container">
            <Card title="Sereja Ris" image={sereja} />
            <Card title="Husen Siraaj" image={husen} />
            <Card title="Houston Ray" image={houston} />
            <Card title="Dimitar Donovski" image={dimitar} />
         </div>
      </ViewBox>
   );
}

export default App;
