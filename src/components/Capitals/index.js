import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapital: countryAndCapitalsList[0].capitalDisplayText}

  getSelectedCapital = event => {
    const cap = event.target.value
    this.setState({selectedCapital: cap})
  }

  getCountry = capital => {
    let capitalCountry = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === capital,
    )

    return capitalCountry
  }

  render() {
    const {selectedCapital} = this.state
    const country = this.getCountry(selectedCapital)
    console.log(country)
    return (
      <div>
        <h1>Countries And Capitals</h1>
        <div className={`select form-control`}>
          <select value={selectedCapital} onChange={this.getSelectedCapital}>
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
        </div>
      </div>
    )
  }
}

export default Capitals
