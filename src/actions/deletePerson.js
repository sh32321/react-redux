export const DELETE_PERSON = "DELETE_PERSON";

export const deletePerson = (personId) => {
  return { type: DELETE_PERSON, payload: personId };
};
