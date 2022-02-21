import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div className="planets">
          <div className="cards">
            {planets.map((el) => (<PlanetCard
              key={ el.name }
              planetName={ el.name }
              planetImage={ el.image }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
