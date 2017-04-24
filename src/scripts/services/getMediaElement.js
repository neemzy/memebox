import React from 'react';

/**
 * @param {String} url
 *
 * @return {Object}
 */
export default function(url) {
    let ytId = null;

    if (url.match(/youtu\.be/)) {
        ytId = url.split('/').pop();
    } else if (url.match(/youtu.*\?v=/)) {
        ytId = url.split('=').pop();
    }

    if (ytId) {
        return (
            <iframe className="cell-media" src={'https://www.youtube.com/embed/' + ytId} frameBorder="0" allowFullScreen></iframe>
        );
    }

    return (
        <div className="cell-media cell-media-background" style={{ backgroundImage: 'url("' + url + '")' }}></div>
    );
};
