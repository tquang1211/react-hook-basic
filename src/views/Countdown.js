import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 10
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    //sẽ đc chạy sau khi render lần đầu
    componentDidMount() {
        // setTimeout(() => {
        //     console.log('me');
        // }, 1000);

        //Ko dùng let do biến let chỉ sử dụng đc trong componentDidMount, muốn dùng let thì khai báo bên ngoài
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                //this.props.onTimesup();
            }
        }
    }

    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }
}


const NewCountDown = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            props.onTimesup();
            return;
        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer)
        };
    }, [count]);

    return (
        <div>{count} hooks</div>
    )
}

//export default CountDown;
export { CountDown, NewCountDown };