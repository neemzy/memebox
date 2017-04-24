import React from 'react';
import copyToClipboard from '../services/copyToClipboard';
import getMediaElement from '../services/getMediaElement';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };

        this.onClick = this.onClick.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onClick(event) {
        event.preventDefault();

        copyToClipboard(this.props.url);
        this.setState({ copied: true });
    }

    onMouseLeave() {
        this.setState({ copied: false });
    }

    render() {
        return (
            <div className="cell">
                {getMediaElement(this.props.url)}
                <a
                    className={'cell-link' + (this.state.copied ? ' cell-link-copied' : '')}
                    href={this.props.url}
                    onClick={this.onClick}
                    onMouseLeave={this.onMouseLeave}
                />
            </div>
        );
    }
};
