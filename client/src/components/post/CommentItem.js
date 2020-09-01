import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment,
}) => (
  <div className='single-comment'>
    <div className='name'>
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='text'>{text}</p>
      <div className='date'>
        <p>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
      </div>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='delete-btn'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
