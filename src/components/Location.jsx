import React from 'react';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Location = () => {
  const locations = [
    {
      title: 'Місце церемонії',
      name: 'ЗАГС №1',
      address: 'проспект Академіка Глушкова, 1к8, Павильон 8, Київ, 03127',
      mapUrl: 'https://www.google.com/maps/place/%22%D0%97%D0%90%D0%93%D0%A1+%E2%84%961%22/@50.3794709,30.4666667,15z/data=!4m10!1m2!2m1!1z0LfQsNCz0YE!3m6!1s0x40d4c9520e89e5eb:0x9acd7f5c30d1e634!8m2!3d50.3784138!4d30.4761289!15sCgjQt9Cw0LPRgVoKIgjQt9Cw0LPRgZIBDXdlZGRpbmdfdmVudWWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTkhkR1YyVkd4M1JSQUKqAT4QASoMIgjQt9Cw0LPRgSgNMh4QASIa8XFmEMVfjsQBJxfS3gpup-FBu87sjqJ22xYyDBACIgjQt9Cw0LPRgeABAPoBBAgOEC4!16s%2Fg%2F11fmnhmhhv?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      title: 'Місце банкету',
      name: 'Веранда на Дніпрі',
      address: 'Набережне шосе, 11а, Київ, 02000',
      mapUrl: 'https://www.google.com/maps/place/%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B5+%D1%88%D0%BE%D1%81%D0%B5,+11%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4272603,30.5681508,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf781962fa1b:0xe9f1aa759250688c!8m2!3d50.4272569!4d30.5707257!16s%2Fg%2F11f4q6b66l?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const handleLocationClick = (mapUrl) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="location-container">
      <h2 className="location-title">Локації</h2>
      <div className="locations-list">
        {locations.map((location, index) => (
          <div 
            key={index} 
            className="location-item"
            onClick={() => handleLocationClick(location.mapUrl)}
          >
            <div className="location-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="location-info">
              <h3 className="location-subtitle">{location.title}</h3>
              <div className="location-name">
                <span>{location.name}</span>
                <FaArrowRight className="arrow-icon" />
              </div>
              <p className="location-address">{location.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
