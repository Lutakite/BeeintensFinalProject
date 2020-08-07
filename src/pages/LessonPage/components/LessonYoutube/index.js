import { connect } from 'react-redux';

import { getLessonYoutube } from 'account/LessonPage/data/selectors';

import { Youtube } from 'components';

const mapStateToProps = state => ({
    children: getLessonYoutube(state), 
});

export default connect(mapStateToProps)(Youtube);