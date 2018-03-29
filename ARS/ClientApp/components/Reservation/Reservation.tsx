import * as React from 'react';
import * as immutable from 'immutable'
import { RouteComponentProps } from 'react-router';
import { Reservation } from '../Model'
import * as api from '../Api'

export type reservationComponentProps = { reservation: Reservation, key: number }

export class ReservationComponent extends React.Component<reservationComponentProps, {}> {
    constructor() {
        super();
        this.state = { };
    }

    confirmDeletion() {
        var wantsToDelete = window.confirm("Are you sure you want to delete this reservation?");
        if (wantsToDelete) {
            var reservationId = this;
            api.delete_reservation(reservationId).then(function (deleted) {
                if (deleted) {
                    location.reload();
                }
            });
        }
    }

    public render() {
        return <tr>
            <th scope="row">{this.props.reservation.id}    </th>
            <td>{this.props.reservation.classroom_id}</td>
            <td>{this.props.reservation.created_at}</td>
            <td>{this.props.reservation.start_time}</td>
            <td>{this.props.reservation.end_time}</td>
            <td><button type="button" className="btn btn-primary btn-danger" name="delete_reservation" onClick={this.confirmDeletion.bind(this.props.reservation.id)}>Delete</button></td>
        </tr>
    }

}
