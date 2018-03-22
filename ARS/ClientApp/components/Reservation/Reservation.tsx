import * as React from 'react';
import * as immutable from 'immutable'
import { RouteComponentProps } from 'react-router';
import { Reservation } from '../Model'

export type reservationComponentProps = { reservation: Reservation, key: number }

export class ReservationComponent extends React.Component<reservationComponentProps, {}> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <tr>
            <th scope="row">{this.props.reservation.id}    </th>
            <td>{this.props.reservation.classroom_id}</td>
        </tr>
    }

}
