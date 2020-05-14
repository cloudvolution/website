import React from "react"
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const divstyle = {
     backgroundColor: 'rgba(255,255,255,0.5)',
     marginTop: '2em'
    };

    return (
      <Layout location={this.props.location}>
        <div style={divstyle}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
             <h1 style={{ 'text-align': 'center' }}>COVID-19 UPDATE</h1>
             <p style={{ 'text-align': 'center' }}>We are now focusing on helping our partners move workloads to the cloud and transition to telework as a priority.<br />Contact us for any inquiries at <a href="mailto:info@cloudvolution.io">info@cloudvolution.io.</a></p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
