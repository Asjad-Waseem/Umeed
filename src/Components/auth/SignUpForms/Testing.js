import React, { Component } from 'react';

const initialState = {

  video: ''

}

class Testing extends Component {

  uploadVideo = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'asjad123')
    this.setState({ loading: true })
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dzxm2eveo/video/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    // console.log(file)
    this.setState({
      video: file.secure_url,
      loading: false
    })

    console.log(this.state.video)
  }
  

  render() {
    return (

                 <div className = "main">
                 <div className = "form-group">
                  <input type="file" 
                  className='form-control form-control-sm'
                  placeholder="Profile Image"
                  name="file" 
                  onChange={this.uploadVideo}
                  />

                  </div>

                  <button className = "btn btn-success mt-4" onClick = {this.uploadVideo}>Upload</button>
        
      </div>
    )
  }
}

export default Testing;
