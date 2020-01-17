import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Store from '../Store';
import { Provider } from 'react-redux';
import routeConfig from './routeConfig';
import Layout from '../view/Layout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';


const BasicRoute = () => (
    <ConfigProvider locale={zhCN}>
        <Provider store={Store}>
            <Layout>
                <HashRouter>
                    <Switch>
                        {
                            routeConfig.map(({ View, path }: { View: any, path: string }) => {
                                return <Route
                                    exact
                                    path={path}
                                    component={View}
                                    key={path}
                                />
                            })
                        }
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    </Switch>
                </HashRouter>
            </Layout>
        </Provider>
    </ConfigProvider>
);


export default BasicRoute;
