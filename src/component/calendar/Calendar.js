import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import './Timeline.css'
import './Timeline.css'
import moment from 'moment'
import './calendar.css'

const groups = [{ id: 1, title: 'ПОСТ 1' }, { id: 2, title: 'ПОСТ 2' }, { id: 3, title: 'ПОСТ 3' }, { id: 4, title: 'ПОСТ 4' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'Skoda AA0956AA',
    start_time: moment(),
    end_time: moment().add(1.5, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'Mers KA4455CH',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(1.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: `3586877 BMW AA88778AA`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 5,
    group: 1,
    title: ` BMW AA88778AA`,
    start_time: moment().add(1, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 4,
    group: 3,
    title: 'item 33',
    start_time: moment().add(-0, 'hour'),
    end_time: moment().add(6, 'hour')
  }
]

function Calendar(props) {
  return (
    <div className='calendarStyle'>
    <h1>calendar</h1>
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
    </div>
  )
}
export default Calendar;