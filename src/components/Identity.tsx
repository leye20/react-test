import * as React from "react";

export interface IIdentityProps {
  name: string;
  age: string;
  role: string;
  department: string;
  displayMethod: (displayMethod: string) => String;
}

export default class Identity extends React.Component<IIdentityProps> {
  render() {
    let { name, age, role, department, displayMethod } = this.props;
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Role: {role}</li>
        <li>Department: {department}</li>
        <li>Message: {displayMethod("Join us...")}</li>
      </ul>
    );
  }
}
