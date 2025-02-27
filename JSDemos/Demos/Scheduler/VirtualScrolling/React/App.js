import React from 'react';

import Scheduler, { Resource, View, Scrolling } from 'devextreme-react/scheduler';
import {
  resources,
  generateAppointments
} from './data.js';

const currentDate = new Date(2021, 1, 2);

const groups = ['humanId'];

const startDay = new Date(2021, 1, 1);
const endDay = new Date(2021, 1, 28);
const startDayHour = 8;
const endDayHour = 20;

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

function App() {
  return (
    <Scheduler
      dataSource={appointments}
      height={600}
      defaultCurrentView='Timeline'
      defaultCurrentDate={currentDate}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      cellDuration={60}
      showAllDayPanel={false}
      groups={groups}>
      <View
        type='timelineWorkWeek'
        name='Timeline'
        groupOrientation='vertical'
      />
      <View
        type='workWeek'
        groupOrientation='vertical'
      />
      <View
        type='month'
        groupOrientation='horizontal'
      />
      <Resource
        fieldExpr='humanId'
        dataSource={resources}
        label='Employee'
      />
      <Scrolling
        mode='virtual'
      />
    </Scheduler>
  );
}

export default App;
