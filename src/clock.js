import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: new Date(),
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.setState(
            { time: new Date() }
        )
    }
    componentDidMount() {
        setInterval(this.tick, 1000)
    }
    checkPlural(text,num){
        if (num === 0) {
            return text;
        }
        else if (num === 1){
            return "";
        }
        else {
            return text;
        }
    }
    render() {
        let distance = this.state.time - this.state.startTime;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysDisplay = days > 0 ? (<div><span>{days} day{this.checkPlural("s",days)},</span><br /></div>) : null
        const hoursDisplay = hours > 0 ? (<div><span>{hours} hour{this.checkPlural("s",hours)},</span><br /></div>) : null
    const minutesDisplay = minutes > 0 ? (<div><span>{minutes} minute{this.checkPlural("s",minutes)} and</span><br /></div>) : null
        const secondsDisplay = (<div><span>{seconds} second{this.checkPlural("s",seconds)}</span></div>)

        return (
            <div className="clock">
                <br />
                <span className="head">You have wasted</span>
                {daysDisplay} {hoursDisplay} {minutesDisplay} {secondsDisplay}
                <span className="head">on this website.<br />Congratulations!</span>
            </div>
        )
    }
}

export default Clock;