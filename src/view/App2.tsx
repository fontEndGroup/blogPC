import React, { Component } from 'react';
import store from '../Store';
import { connect } from 'react-redux';
import '../style/App.css';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.chengeConent = this.chengeConent.bind(this);
    }

    chengeConent() {
        store.dispatch({
            type: 'setBolbList',
            data: {
                bolbList: [
                    { title: 1 },
                    { title: 2 },
                    { title: 3 },
                ]
            }
        });
    }

    render() {
        const { bolbList = [] } = this.props._app;
        return (
            <div className="App">
                <button
                    onClick={this.chengeConent}
                >
                    改变内容
                </button>
                <header className="App-header">
                    {
                        bolbList.map(({ title }: { title: string }) => {
                            return <div>{title}</div>
                        })
                    }
                </header>
            </div>
        );
    }
};

const mapPropsToState = function (totalState: any) {
    return {
        _app: totalState.home,
    }
};
export default connect(mapPropsToState)(App);
