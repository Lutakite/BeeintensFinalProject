import { connect } from 'react-redux';

import { getLessonName, getLessonNum } from 'account/LessonPage/data/selectors';

import { Heading } from 'components';

const mapStateToProps = state => ({
    children: `Лекция № ${getLessonNum(state)}. ${getLessonName(state)}`, 
});

export default connect(mapStateToProps)(Heading);