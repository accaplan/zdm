var React = require('react');

var Layout = require('./partials/layout.jsx');

module.exports = ({ page, site }) => (
    <Layout site={ site }>
        { site.work.map( project => (
            <h1>{ project.title }</h1>
        )) }
    </Layout>
)