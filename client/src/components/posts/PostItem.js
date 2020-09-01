import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, user, likes, comments, date },
  showActions,
}) => (
  <div className='single-post'>
    {showActions && !auth.loading && user === auth.user._id && (
      <button
        onClick={() => deletePost(_id)}
        type='button'
        className='delete-btn'
      >
        <i className='fas fa-times' />
      </button>
    )}
    <div className='name'>
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>
    </div>
    <div className='text'>
      <p className='text'>{text}</p>
    </div>
    {showActions && (
      <div className='buttons'>
        <div className='like-dislike'>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='like-btn'
          >
            <i className='fas fa-thumbs-up' />
            {'  '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='dislike-btn'
          >
            <i className='fas fa-thumbs-down' />
          </button>
        </div>
        <div className='comment'>
          <button className='comment-btn'>
            <Link to={`/posts/${_id}`}>
              <i className='fas fa-comment'></i>
              {'  '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
          </button>
        </div>
      </div>
    )}

    <div className='date'>
      <p>
        Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>
    </div>

    <div className='content'>
      {showActions && (
        <Fragment>
          {/* <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button> */}
          {/* <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button> */}
          {/* <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link> */}
          {/* {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )} */}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
