import React from "react";
import Persons from "./Persons";

function NameList() {
  const persons = [
    {
      id : 1,
      name : 'Mosh',
      age : 35
    },
    {
      id : 2,
      name : 'Brad',
      age : 30
    },
    {
      id : 3,
      name : 'Viswas',
      age : 25
    }
  ]
  const personList = persons.map(person => <Persons key = {person.id} person={person}></Persons> )
  return <div>{personList}</div>;
}

export default NameList;
