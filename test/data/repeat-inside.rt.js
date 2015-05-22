define([
    'react/addons',
    'lodash'
], function (React, _) {
    'use strict';
    function repeatWord1(word, wordIndex) {
        return [
            React.createElement('dt', {}, word.word),
            React.createElement('dd', {}, word.definition)
        ];
    }
    return function () {
        return React.createElement.apply(this, [
            'dl',
            {},
            _.map(this.state.words, repeatWord1.bind(this))
        ]);
    };
});