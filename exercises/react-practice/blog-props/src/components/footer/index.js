import React, { Component } from 'react';
import './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="components-footer">
                <div className="wrap">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-github" />
                            </a>
                        </li>
                    </ul>
                    <p className="copyright">Copyright © Your Website 2018</p>
                </div>
            </div>
        );
    }
}
