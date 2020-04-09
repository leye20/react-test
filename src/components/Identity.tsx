import * as React from 'react';

export interface IIdentityProps {
    name: string
    age: string
    role: string
    department: string
    displayMethod: (displayMethod: string) => String;
}

export default class Identity extends React.Component<IIdentityProps> {
    render()
    {
        let { name, age, role, department, displayMethod } = this.props
        return (
            <dl>
                <dt>Name:</dt>
                <dd>{name}</dd>
                <dt>Age:</dt>
                <dd>{age}</dd>
                <dt>Role:</dt>
                <dd>{role}</dd>
                <dt>Department:</dt>
                <dd>{department}</dd>
                <dt>Message:</dt>
                <dd>{displayMethod( 'Join us...')}</dd>
            </dl>
        )
    }
}