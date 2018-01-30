import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
    changeFilter = (name, e) => {
        e.preventDefault
        this.props.onChangeFilter(name)
    }
    renderFilter = (filter, name) => {
        // if(filter === this.props.filter) {
        //     return name
        // }

        return (
            <a href="#"
                onClick={this.changeFilter.bind(this, filter)}
            >
                {name}
            </a>
        )
    }
    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'ALL')}
                {' '}
                {this.renderFilter('SHOW_COMPLETED', 'COMPLETED')}
                {' '}
                {this.renderFilter('SHOW_ACTIVE', 'ACTIVE')}
            </p>
        )
    }
}

Footer.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}