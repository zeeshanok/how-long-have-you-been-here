import React from 'react';
import handleViewport from 'react-in-viewport';
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
    checkPlural(text, num) {
        if (num === 0) {
            return text;
        }
        else if (num === 1) {
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

        const daysDisplay = days > 0 ? (<div><span>{days} day{this.checkPlural("s", days)},</span><br /></div>) : null
        const hoursDisplay = hours > 0 ? (<div><span>{hours} hour{this.checkPlural("s", hours)},</span><br /></div>) : null
        const minutesDisplay = minutes > 0 ? (<div><span>{minutes} minute{this.checkPlural("s", minutes)} and</span><br /></div>) : null
        const secondsDisplay = (<div><span>{seconds} second{this.checkPlural("s", seconds)}</span></div>)
        
        // Le message
        let message = (<span>Congratulations!</span>);
        if (minutes >= 1) message = (<span>Its been over a  minute. Do you not have anything else to do?</span>);
        if (minutes >= 5) message = (<span>Still got nothing to do?</span>);
        if (minutes >= 10) message = (<span>So... how's life?</span>);
        if (minutes >= 20) message = (<span>Why are you even here?</span>);
        if (minutes >= 30) message = (<span>Ok this is getting ridiculous...</span>);
        if (minutes >= 50) message = (<span>Are you trying to reach an hour? Well you're close</span>);
        if (hours >= 1) message = (<span>Congratulations on spending 1 hour of your life like this (If you have been here without switching tabs or looking away, I salute you)</span>);
        if (hours >= 1 && minutes >= 30) message = (<span>Ok at this point... you should probably close this site</span>)
        if (hours >= 2) message = (<span>This is the last message. Now leave</span>);
        if (hours >= 3) message = (<span>Just leave... Theres nothing to wait for. No suprises</span>);
        if (hours >= 5) message = (<span>Dude seriously, just leave</span>);
        if (hours >= 6) message = (<span>Now I feel like you forgot to close this tab. Just close it and leave</span>);
        if (hours >= 10) message = (<span>Bruh.</span>);
        if (hours >= 22) message = (<span>Do you even sleep? Or did you just leave your computer turned on?</span>);
        if (days >= 1) message = (<span>Its over a day. What are you doing with your life?</span>);
        if (days >= 1 && hours >= 2) message = (<span>Im running out of things to say now</span>);
        if (days >= 2) message = (<span>Theres no secret message at 10 days. Shoo</span>);
        if (days >= 3) message = (<span>I really want a power outage so that you can CLOSE THIS DAMN TAB. JUST LEAVE FFS</span>);
        if (days >= 5) message = (<span>Wtf are you even here for? I told you, theres nothing at 10 days</span>);
        if (days >= 6) message = (<span>Im not talking to you now</span>);
        if (days >= 6 && hours >= 1) message = null;
        if (days >= 7) message = (<span>7 DAYS! ARE YOU OUT OF YOUR MIND?</span>);
        if (days >= 8) message = (<span>I have nothin to say at this point</span>);
        if (days === 10) message = (<span>Congratulations on reaching 10 days! As I said there is no suprise. So i will now refresh myself</span>);
        if (days === 10 && seconds >= 60) message = (<span>Haha i was kidding</span>);
        if (days === 10 && minutes >= 2) message = (<span>I will refresh in 10 seconds...</span>);
        if (days === 10 && minutes >= 2) {
            for(let i=0;i<=9;i++){
                if (seconds === i){
                    message = (<span>I will refresh in {i+1} seconds...</span>);
                    break;
                }
            }
        }
        if (days >= 10 && minutes >= 10) {
            window.location.reload();
        }
        //Le message end
        return (
            <div className="clock">
                <br />
                <span className="head">You have wasted</span>
                {daysDisplay} {hoursDisplay} {minutesDisplay} {secondsDisplay}
            <span className="head">on this website.<br />{message}</span>
            </div>
        );
    }
}

export default handleViewport(Clock);