import React from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'

export default class HiddenAction extends React.Component {
    static propTypes = {
        action: PropTypes.func.isRequired,
        clickThreshold: PropTypes.num,
        clickTimeout: PropTypes.num,
        feedback: PropTypes.bool,
    }

    static defaultProps = {
        clickThreshold: 8,
        clickTimeout: 3000,
        feedback: false,
    }

    constructor (props) {
        super(props)

        this.state = { clickCt: 0, timeoutId: null }
    }

    componentWillUnmount = () => {
        const { timeoutId } = this.state
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
    }

    onClick = () => {
        const { clickThreshold, clickTimeout, action } = this.props
        const { timeoutId, clickCt } = this.state
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        const newTimeoutId = setTimeout(() => {
            this.setState({ clickCt: 0 })
        }, clickTimeout)
        const newClickCt = clickCt + 1

        this.setState({ clickCt: newClickCt, timeoutId: newTimeoutId })

        if (newClickCt >= clickThreshold) {
            this.setState({ clickCt: 0, timeoutId: null })
            action()
        }
    }

    render () {
        const { children, feedback, style } = this.props
        if (feedback) {
            return <TouchableOpacity onPress={this.onClick} style={style}>
                {children}
            </TouchableOpacity>
        } else {
            return <TouchableWithoutFeedback onPress={this.onClick}>
                <View style={style}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        }
    }
}
