import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'

const data = {
  labels: [],
  datasets: [
    {
      data: [],
      label: 'Temperature',
      borderColor: '#A8DADC',
      hoverBorderColor: '#40bcc1',
      fill: false
    }
  ]
}

const options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'black'
    }
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      bottom: 40
    },
    maintainAspectRatio: false,
    responsive: true
  }
}

class Temperature extends Component {
  constructor() {
    super()
    this.state = {data: data}
    this.populateData = this.populateData.bind(this)
  }
  async componentDidMount() {
    const {weather} = this.props
    await this.populateData()
  }
  populateData() {
    if (this.props.weather.length) {
      this.props.weather.forEach(elem => {
        data.labels.push(elem.dt_txt.slice(0, 10))
        data.datasets[0].data.push(elem.main.temp)
      })
      this.setState({data: data})
    }
  }

  render() {
    return (
      <div className="container graph">
        <Line data={data} options={options} height={40} width={80} />
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
)(Temperature)
