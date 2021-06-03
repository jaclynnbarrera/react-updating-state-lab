import React from 'react'

class YouTubeDebugger extends React.Component {
    
    constructor () {
        super()
        this.state =  {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = () => {
        this.setState({
            settings: { 
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    handleOtherClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        debugger
	    return (
	    	<div>
			<button className="bitrate"onClick={this.handleClick.bind(this)}>Change Bitrate</button>
            <button className="resolution"onClick={this.handleOtherClick.bind(this)}>Change Resolution</button>
	    	</div>
	    	)
	    }
    }

// DigitalClicker.defaultProps = {
// 	groceryList: []
// 	}

export default YouTubeDebugger
