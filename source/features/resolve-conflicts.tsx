import './resolve-conflicts.css';
import React from 'dom-chef';
import elementReady from 'element-ready';
import features from '../libs/features';

async function init(): Promise<void> {
	await elementReady('.CodeMirror', {
		stopOnDomReady: false
	});

	document.head.append(<script src={browser.runtime.getURL('resolve-conflicts.js')}/>);
}

features.add({
	id: __featureName__,
	description: 'Fix merge conflicts in a click',
	screenshot: false
}, {
	include: [
		features.isConflict
	],
	load: features.onAjaxedPages,
	init
});
