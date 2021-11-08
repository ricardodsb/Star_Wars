const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: [],
			vehiclesList: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://www.swapi.tech/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ peopleList: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://www.swapi.tech/api/planets";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ planetsList: json.results });
			},
			fetchVehicles: async () => {
				const URL = "https://www.swapi.tech/api/vehicles";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				setStore({ vehiclesList: json.results });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			removeFav: (category, uid) => {
				// si el usuario añade elementos, los incluimos en la lista global
				const store = getStore();
				let position;
				store.favorites.forEach((element, index) => {
					if (element.category === category && element.id === uid) {
						position = index;
					}
				});
				store.favorites.splice(position, 1);
				setStore({ favorites: [...store.favorites] });
			}
		}
	};
};

export default getState;
