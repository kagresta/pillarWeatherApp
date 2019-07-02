import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'

const data = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: ['#1D3557', '#1D3557', '#1D3557', '#1D3557', '#1D3557'],
      borderColor: 'rgb(214, 214, 214)',
      hoverBorderColor: 'rgb(255,250,250)'
    }
  ]
}

const options = {
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: 'black'
    }
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      top: 50,
      bottom: 40
    },

    responsive: true
  }
}

class Humidity extends Component {
  constructor() {
    super()
    this.state = {data: data}
    this.populateData = this.populateData.bind(this)
  }
  async componentDidMount() {
    await this.populateData()
  }
  populateData() {
    if (this.props.weather.length) {
      this.props.weather.forEach(elem => {
        data.labels.push(elem.dt_txt.slice(0, 10))
        data.datasets[0].data.push(elem.main.humidity)
      })
      this.setState({data: data})
    }
  }

  render() {
    return (
      <div className="container graph">
        <Bar data={data} options={options} height={40} width={80} />
      </div>
    )
  }
}

const mapState = state => ({
  weather: state.openWeather
})

export default connect(
  mapState,
  null
)(Humidity)
