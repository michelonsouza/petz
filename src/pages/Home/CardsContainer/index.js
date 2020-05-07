import React, { useContext, useMemo, useCallback, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import Spinner from 'react-spinner-material';
import { ThemeContext } from 'styled-components';

import history from '~/services/history';

import { Modal } from '~/components';
import { Container, Card, LoadingOverlay } from './styles';

function CardsContainer({ data, loading, onDelete }) {
  const theme = useContext(ThemeContext);
  const [postSelected, setPostSelected] = useState(null);

  const spinnerColor = useMemo(() => {
    return theme.type === 'light' ? '#fff' : '#333';
  }, [theme]);

  const maxStringLength = useCallback((string, length = 15) => {
    return `${string.substring(0, length)}...`;
  }, []);

  const handleNavigate = useCallback(
    id => {
      const post = data.find(p => p.id === id);
      localStorage.setItem('@petzblog:post:selected', JSON.stringify(post));
      history.push(`/post/${id}`);
    },
    [data],
  );

  return (
    <>
      {postSelected && (
        <Modal
          id={postSelected}
          onDelete={onDelete}
          onClose={() => setPostSelected(null)}
        />
      )}
      <Container>
        {data.map(post => (
          <Card key={`post-id-${post.id}`} img={post.image} title={post.title}>
            <div className="card-img" />

            <div className="card-content">
              <span className="author" title={post.user.name}>
                {post.user.name}
              </span>
              <button
                type="button"
                className="post-title"
                onClick={() => handleNavigate(post.id)}
              >
                <b>#</b> {post.id} - {maxStringLength(post.title)}
              </button>
              <button
                type="button"
                title={`Excluir post #${post.id}`}
                onClick={() => setPostSelected(post.id)}
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </Card>
        ))}

        {loading && (
          <LoadingOverlay>
            <Spinner color={spinnerColor} stroke={8} radius={150} />
          </LoadingOverlay>
        )}
      </Container>
    </>
  );
}

CardsContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default memo(CardsContainer);
