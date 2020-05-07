import React, { useEffect, useState, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import Spinner from 'react-spinner-material';
import { ThemeContext } from 'styled-components';

import api from '~/services/api';
import history from '~/services/history';
import { hideInitialLoading } from '~/utils';

import {
  Container,
  CommentsContainer,
  Comment,
  PostContainer,
  LoadingContainer,
} from './styles';

function Post() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState([true]);
  const theme = useContext(ThemeContext);
  const [post] = useState(() => {
    const selectedPost = localStorage.getItem('@petzblog:post:selected');

    if (selectedPost) {
      return JSON.parse(selectedPost);
    }

    return null;
  });
  const { id } = useParams();

  const spinnerColor = useMemo(() => {
    return theme.type === 'light' ? '#fff' : '#333';
  }, [theme]);

  useEffect(() => {
    async function loadComments() {
      setLoading(true);

      try {
        const { data: response } = await api.get(`/posts/${id}/comments`);

        setComments(response);

        setTimeout(() => {
          hideInitialLoading();
        }, 1000);
      } catch (error) {
        toast.error('Errro ao carregar comentários');
      }

      setLoading(false);
    }

    loadComments();
  }, [id]);

  return (
    <Container>
      <div className="back-container">
        <button
          type="button"
          onClick={() => history.push('/')}
          title="Voltar para Home"
        >
          <FiArrowLeft size={22} /> Voltar
        </button>
      </div>
      <PostContainer>
        <div className="post-content-container">
          <img src={post.image} alt={post.title} />
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
        <div className="author-container">
          <span>
            <b>Autor:</b> {post.user.name}
          </span>
          <span>
            <b>E-mail:</b> {post.user.email}
          </span>
        </div>
      </PostContainer>
      {loading && (
        <LoadingContainer>
          <Spinner color={spinnerColor} stroke={8} radius={150} />
        </LoadingContainer>
      )}
      <CommentsContainer>
        {comments.map(comment => (
          <Comment key={`comment-id-${comment.id}`}>
            <div className="author-container">
              <span>
                <b>Autor:</b> {comment.name}
              </span>
              <span>
                <b>E-mail: </b> {comment.email}
              </span>
            </div>

            <div className="comment-body">
              <p>{comment.body}</p>
            </div>
          </Comment>
        ))}
      </CommentsContainer>
    </Container>
  );
}

export default Post;
