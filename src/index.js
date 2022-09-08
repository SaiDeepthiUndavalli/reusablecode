import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails

  return (
    <div className="banner-card-container">
      <div className={className}>
        <h1 className="heading"> The Seasons Latest </h1>
        <p className="para">
          Get the seasons all latest designs in a flick of your hand
        </p>
        <button className="button">Show More</button>
      </div>
      <div className={className}>
        <h1 className="heading"> Our New Designs</h1>
        <p className="para">
          Get the designs developed by our in-house team all for yourself
        </p>
        <button className="button">Show More</button>
      </div>
      <div className={className}>
        <h1 className="heading"> Insiders</h1>
        <p className="para">
          Get the top class products for yourself with an extra off
        </p>
        <button className="button">Show More</button>
      </div>
    </div>
  )
}
export default BannerCardItem

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
