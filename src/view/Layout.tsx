import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import '../style/layout.css';

class Layout extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            menuList: [
                {
                    title: '修改信息',
                    path: '/edit',
                },
                {
                    title: '我的博文',
                    path: '/myBlog',
                },
                {
                    title: '我的收藏',
                    path: '/myCollect',
                }
            ],
            noLogin: [
                {
                    title: '登录/注册',
                    path: '/login'
                }
            ]
        };
    }

    _renderMenu() {
        const { noLogin, menuList } = this.state;
        const { userId } = this.props.user;
        const showMenu = userId ? menuList : noLogin;
        console.log(showMenu);
        return (
            <Menu>
                {
                    showMenu.map(({ title, path }: any) => {
                        return (
                            <Menu.Item key={path}>
                                <a href={path}>{title}</a>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }

    render() {
        const Menu = this._renderMenu();
        const { userName, userImg } = this.props.user;
        return (
            <div className={'header_top'}>
                <div>
                    博客
                </div>
                <div>
                    <Dropdown overlay={Menu}>
                        <span><img src={userImg} alt=""/>{userName}</span>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (totalState: any) {
    return {
        user: totalState.user,
    }
};

export default connect(mapStateToProps)(Layout);
