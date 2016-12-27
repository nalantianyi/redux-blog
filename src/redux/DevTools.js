/**
 * Created by nalantianyi on 2016/12/27.
 */
import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow'></LogMonitor>
    </DockMonitor>
);
export default DevTools;