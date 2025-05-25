import React, { useEffect, useRef, useState } from 'react';
import "./App.css";
const MapaGoogle = () => {
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const mapRef = useRef(null);
  const origenRef = useRef(null);
  const destinoRef = useRef(null);

  // Cargar el script de Google Maps
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBEoSLabgw23JHSopeH3k-FASwaQD8r244&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    loadGoogleMaps();

    return () => {
      // Limpieza si es necesario
    };
  }, []);

  const initMap = () => {
    // Configuración inicial del mapa
    const newMap = new window.google.maps.Map(mapRef.current, {
      center: { lat: 5.171264420641354, lng: -72.5510772745456 },
      zoom: 13,
      mapId: '168329a24463ac0736041595',
      disableDefaultUI: true,
      zoomControl: true,
    });

    // Autocompletado para los campos
    new window.google.maps.places.Autocomplete(origenRef.current);
    new window.google.maps.places.Autocomplete(destinoRef.current);

    // Servicios para rutas
    const newDirectionsService = new window.google.maps.DirectionsService();
    const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
      map: newMap,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: '#3b71ca',
        strokeOpacity: 0.8,
        strokeWeight: 4,
      },
    });

    setMap(newMap);
    setDirectionsService(newDirectionsService);
    setDirectionsRenderer(newDirectionsRenderer);

    // Centrar en ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        newMap.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        newMap.setZoom(15);
      });
    }

    // Agregar motocarros
    agregarMotocarros(newMap);
  };

  const agregarMotocarros = (mapInstance) => {
    const ubicaciones = [
      { lat: 5.171264420641354, lng: -72.5510772745456 },
      // ... más ubicaciones
    ];

    ubicaciones.forEach((ubicacion, i) => {
      new window.google.maps.Marker({
        position: ubicacion,
        map: mapInstance,
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scaledSize: new window.google.maps.Size(32, 32),
        },
        title: `Motocarro #${i + 1}`,
      });
    });
  };

  const calcularRuta = () => {
    if (!directionsService || !directionsRenderer) return;

    const origen = origenRef.current.value;
    const destino = destinoRef.current.value;

    if (!origen || !destino) {
      alert('Por favor ingresa origen y destino');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();

    Promise.all([
      new Promise((resolve) =>
        geocoder.geocode({ address: origen }, (results, status) => {
          if (status === 'OK') resolve(results[0].geometry.location);
          else resolve(null);
        })
      ),
      new Promise((resolve) =>
        geocoder.geocode({ address: destino }, (results, status) => {
          if (status === 'OK') resolve(results[0].geometry.location);
          else resolve(null);
        })
      ),
    ]).then(([originLocation, destinationLocation]) => {
      if (!originLocation || !destinationLocation) {
        throw new Error('No se pudo encontrar una o ambas direcciones');
      }

      directionsService.route(
        {
          origin: originLocation,
          destination: destinationLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
            alert('Ruta calculada correctamente!');
          } else {
            alert('Error al calcular la ruta: ' + status);
          }
        }
      );
    });
  };

  return (
    <div className="map-container">
      <div ref={mapRef} id="cliente-map"  />
      
      <div className="controls">
        <input
          ref={origenRef}
          type="text"
          placeholder="Origen"
          id="origen"
        />
        <input
          ref={destinoRef}
          type="text"
          placeholder="Destino"
          id="destino"
        />
        <button onClick={calcularRuta}>Calcular Ruta</button>
      </div>
    </div>
  );
};

export default MapaGoogle;
