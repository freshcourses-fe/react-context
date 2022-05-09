import React, { Component } from 'react';
import { add, addWeeks, format, startOfWeek } from 'date-fns';

class Calendar extends Component {
  state = {
    currentDay: new Date(),
  };

  render() {

    console.log(startOfWeek(this.state.currentDay))
    return (
      <div>
        <div>
          <p>{format(this.state.currentDay, 'MMMM, -y:')}</p>
        </div>

        <div>
          <p>{format(this.state.currentDay, 'MMMM y')}</p>
          <table>
            <thead>
              <tr>
                <td>S</td>
                <td>M</td>
                <td>T</td>
                <td>W</td>
                <td>T</td>
                <td>F</td>
                <td>S</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calendar;
