import { DELETE_PERSON } from "../actions/deletePerson";
import { UPDATE_PERSON } from "../actions/personUpdate";

const initState = {
  personData: [],
};

export const personReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "John",
        age: Math.floor(Math.random() * 40),
      };
      const newPersonState = [...state.personData, newPerson];
      return { ...state, personData: newPersonState };
    case DELETE_PERSON:
      const newPeople = state.personData.filter(
        (person) => person.id !== action.payload
      );
      return { ...state, personData: newPeople };
    default:
      return state;
  }
};
