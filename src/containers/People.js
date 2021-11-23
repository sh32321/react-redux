import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";
import { personUpdate } from "../actions/personUpdate";
import { deletePerson } from "../actions/deletePerson";

const People = ({ data, personUpdateFunc, personDeleteFunc }) => {
  const personAddedHandler = () => {
    personUpdateFunc();
  };

  const personDeletedHandler = (personId) => {
    personDeleteFunc(personId);
  };

  return (
    <div>
      <AddPerson personAdded={personAddedHandler} />
      {data.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.personData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personUpdateFunc: () => dispatch(personUpdate()),
    personDeleteFunc: (personId) => dispatch(deletePerson(personId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
