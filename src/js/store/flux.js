const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			person: []
		},
		actions: {
			
			
			setPeopleData: (results) => {
				const store = getStore();
				setStore({ ...store, people: results });
			},
			setPlanetsData: (results) => {
				const store = getStore();
				setStore({ ...store, planets: results });
			},
			setVehiclesData: (results) => {
				const store = getStore();
				setStore({...store, vehicles: results });
			},
			setPersonData: (uid, properties) => {
				const store = getStore();

				const newPeopleArray = store.people.map(person => {
					if (person.uid === uid) {
						person.properties = properties;
					}
					return person;
				})
				setStore({ ...store, people: newPeopleArray })
			},
			changeColor: (index, color) => {
				
				const store = getStore();

				
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				}); 

				
				setStore({ demo: demo }); 
			}
		}
	};
};

export default getState;
