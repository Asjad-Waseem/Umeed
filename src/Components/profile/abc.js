import React, { Component } from "react";

const initialValues = {

  timeSlotSelected: '',
  d: '',
  e: '',
  day: '',
  dayName: ''

}

let availableTimings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let availableTimings1 = [11, 12];
let finalTimings = [];

export default class abc extends Component {

  constructor(){

    super();

  this.state = initialValues;

    this.onChange = this.onChange.bind(this);

}

  AlertTime(value) {

    this.timeSlotSelected = value;

    alert(this.timeSlotSelected);

    alert("You selected the following slot " + value + " for your video chat session booking");

  }

  onChange(e){

    this.setState({[e.target.name]: e.target.value});

}

  render() {

    let bookedArr = [11];
    let day = "Monday";

    console.log(bookedArr);

    if(day === "Monday") {

      finalTimings = availableTimings;

      console.log(finalTimings);

    bookedArr.forEach((item) => {
      finalTimings.splice(finalTimings.indexOf(+item), 1);
    });

    console.log(finalTimings);

    }

    else {

    finalTimings = availableTimings1;
    
    bookedArr.forEach((item1) => {
      finalTimings.splice(finalTimings.indexOf(+item1), 1);
    });

    console.log(finalTimings);

    }

    console.log(this.state.d);

    this.state.day = new Date(this.state.d);

    console.log(this.state.day);

    this.state.dayName = this.state.day.toString().split(' ')[0];

    console.log(this.state.dayName);

    return (

      <div>

{finalTimings.includes(0) ? 

<button type="submit" onClick={() => { this.AlertTime('12:00 AM') }}>12:00 AM</button>
: null}<br></br>

{finalTimings.includes(1) ? 

<button type="submit" onClick={() => { this.AlertTime('01:00 AM') }}>01:00 AM</button>
: null}<br></br>

{finalTimings.includes(2) ? 

<button type="submit" onClick={() => { this.AlertTime('02:00 AM') }}>02:00 AM</button>
: null}<br></br>

{finalTimings.includes(3) ? 

<button type="submit" onClick={() => { this.AlertTime('03:00 AM') }}>03:00 AM</button>
: null}<br></br>

{finalTimings.includes(4) ? 

<button type="submit" onClick={() => { this.AlertTime('04:00 AM') }}>04:00 AM</button>
: null}<br></br>

{finalTimings.includes(5) ? 

<button type="submit" onClick={() => { this.AlertTime('05:00 AM') }}>05:00 AM</button>
: null}<br></br>

{finalTimings.includes(6) ? 

<button type="submit" onClick={() => { this.AlertTime('06:00 AM') }}>06:00 AM</button>
: null}<br></br>

{finalTimings.includes(7) ? 

<button type="submit" onClick={() => { this.AlertTime('07:00 AM') }}>07:00 AM</button>
: null}<br></br>

{finalTimings.includes(8) ? 

<button type="submit" onClick={() => { this.AlertTime('08:00 AM') }}>08:00 AM</button>
: null}<br></br>

{finalTimings.includes(9) ? 

<button type="submit" onClick={() => { this.AlertTime('09:00 AM') }}>09:00 AM</button>
: null}<br></br>

{finalTimings.includes(10) ? 

<button type="submit" onClick={() => { this.AlertTime('10:00 AM') }}>10:00 AM</button>
: null}<br></br>

{finalTimings.includes(11) ? 

<button type="submit" onClick={() => { this.AlertTime('11:00 AM') }}>11:00 AM</button>
: null}<br></br>

{finalTimings.includes(12) ? 

<button type="submit" onClick={() => { this.AlertTime('12:00 PM') }}>12:00 PM</button>
: null}<br></br>

{finalTimings.includes(13) ? 

<button type="submit" onClick={() => { this.AlertTime('01:00 PM') }}>01:00 PM</button>
: null}<br></br>

{finalTimings.includes(14) ? 

<button type="submit" onClick={() => { this.AlertTime('02:00 PM') }}>02:00 PM</button>
: null}<br></br>

{finalTimings.includes(15) ? 

<button type="submit" onClick={() => { this.AlertTime('03:00 PM') }}>03:00 PM</button>
: null}<br></br>

{finalTimings.includes(16) ? 

<button type="submit" onClick={() => { this.AlertTime('04:00 PM') }}>04:00 PM</button>
: null}<br></br>

{finalTimings.includes(17) ? 

<button type="submit" onClick={() => { this.AlertTime('05:00 PM') }}>05:00 PM</button>
: null}<br></br>

{finalTimings.includes(18) ? 

<button type="submit" onClick={() => { this.AlertTime('06:00 PM') }}>06:00 PM</button>
: null}<br></br>

{finalTimings.includes(19) ? 

<button type="submit" onClick={() => { this.AlertTime('07:00 PM') }}>07:00 PM</button>
: null}<br></br>

{finalTimings.includes(20) ? 

<button type="submit" onClick={() => { this.AlertTime('08:00 PM') }}>08:00 PM</button>
: null}<br></br>

{finalTimings.includes(21) ? 

<button type="submit" onClick={() => { this.AlertTime('09:00 PM') }}>09:00 PM</button>
: null}<br></br>

{finalTimings.includes(22) ? 

<button type="submit" onClick={() => { this.AlertTime('10:00 PM') }}>10:00 PM</button>
: null}<br></br>

{finalTimings.includes(23) ? 

<button type="submit" onClick={() => { this.AlertTime('11:00 PM') }}>11:00 PM</button>
: null}<br></br>


      <form>

      <input type="date"
      className='form-control form-control-sm'                        
      placeholder="Working From"
      name="d"
      value={this.state.d}
      onChange = {this.onChange}
      />

      </form>
      </div>

    );

  }
}
