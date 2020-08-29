import React, { Component } from 'react'

class Testing1 extends Component {

    render() {
    return (
      <div className = "container" style = {{textAlign: 'center'}}>

<video width="320" height="240" controls>
<p>saad</p>

<source src="https://res.cloudinary.com/dzxm2eveo/video/upload/v1592757002/wimb7jxl6uzd6yhuwwou.mp4" type="video/mp4"/>
<p>Your browser does not support the video tag.</p>
</video>

<video width="320" height="240" style = {{paddingLeft: '10px'}} controls >
<source src="https://res.cloudinary.com/dzxm2eveo/video/upload/v1592757002/wimb7jxl6uzd6yhuwwou.mp4" type="video/mp4"/>
<p>Your browser does not support the video tag.</p>
</video>

<br></br>

<p>dfaddsaasd</p>



      </div>
    )
  }
}

export default Testing1;
