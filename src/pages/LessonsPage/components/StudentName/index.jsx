import { connect } from 'react-redux';

import { getStudentName } from 'account/StudentPage/data/selectors';
import { Heading } from 'components';

const mapStateToProps = state => ({
    children: getStudentName(state),
});

export default connect(mapStateToProps)(Heading);