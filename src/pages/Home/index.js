import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import { MdMoodBad } from 'react-icons/md';

import api from '~/services/api';
import { hideInitialLoading } from '~/utils';

import { Input, Button } from '~/components';
import { Container, NoData } from './styles';
import CardsContainer from './CardsContainer';

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const isEmpty = useMemo(() => {
    return posts.length === 0;
  }, [posts]);

  const getImageUrl = useCallback(() => {
    const arrIds = [
      1003,
      1024,
      1025,
      1062,
      1074,
      1084,
      169,
      200,
      219,
      237,
      244,
      433,
    ];

    const index = Math.round(
      Math.random(0, arrIds.length - 1) * (arrIds.length - 1 - 0) + 0,
    );

    return `https://picsum.photos/id/${arrIds[index]}/400/400`;
  }, []);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    try {
      const requests = [
        api.get(`/posts?_page=${page}&_limit=9`),
        api.get('/users'),
      ];

      const [{ data: postsData }, { data: usersData }] = await Promise.all(
        requests,
      );

      const formattedPosts = postsData.map(post => ({
        ...post,
        image: getImageUrl(),
        user: usersData.find(u => post.userId === u.id),
      }));

      localStorage.setItem(
        '@petzblog:posts',
        JSON.stringify([...posts, ...formattedPosts]),
      );
      setPosts([...posts, ...formattedPosts]);
      setUsers(usersData);
      setPage(page + 1);

      setTimeout(() => {
        hideInitialLoading();
      }, 1000);
    } catch (error) {
      toast.error('Erro ao carregar os posts');
    }
    setLoading(false);
  }, [getImageUrl, posts, page]);

  const handleDelete = useCallback(
    async id => {
      setLoading(true);
      try {
        await api.delete(`/posts/${id}`);

        const filteredPosts = posts.filter(post => post.id !== id);
        localStorage.setItem('@petzblog:posts', JSON.stringify(filteredPosts));
        setPosts(filteredPosts);
        toast.success(`Post #${id} excluido com sucesso`);
      } catch (error) {
        toast.error(`Erro ao excluir post #${id}`);
      }
      setLoading(false);
    },
    [posts],
  );

  const handleFilter = useCallback(
    async event => {
      event.preventDefault();
      setLoading(true);

      try {
        const { data: response } = await api.get(
          `/posts?title_like=${searchText}&body_like=${searchText}`,
        );

        const formattedPosts = response.map(post => ({
          ...post,
          image: getImageUrl(),
          user: users.find(u => post.userId === u.id),
        }));

        setPosts(formattedPosts);
      } catch (error) {
        toast.error(`Error ao buscar por: ${searchText}`);
      }

      setLoading(false);
      setFiltered(true);
    },
    [searchText, getImageUrl, users],
  );

  const resetFilter = useCallback(() => {
    setPosts([]);
    setSearchText('');
    setPage(1);
    setFiltered(false);
  }, []);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (!filtered) {
      loadPosts();
    }
  }, [filtered]);

  return (
    <Container>
      <form onSubmit={handleFilter}>
        <label htmlFor="input-search">
          <span>Busca</span>
          <Input
            id="input-search"
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            placeholder="Procure aqui seu post"
            required
          />
        </label>
        {!filtered ? (
          <Button type="submit" onClick={handleFilter}>
            Buscar
          </Button>
        ) : (
          <Button type="reset" variant="secondary" onClick={resetFilter}>
            Limpar filtros
          </Button>
        )}
      </form>
      {!isEmpty && (
        <CardsContainer
          data={posts}
          onDelete={handleDelete}
          loading={loading}
        />
      )}

      {filtered && isEmpty && !loading && (
        <NoData>
          <MdMoodBad size={90} />
          <p>Pesquisa não retornou nenhum dado!</p>
        </NoData>
      )}

      {!isEmpty && (
        <Button className="w-100" onClick={loadPosts} loading={loading}>
          Ver mais...
        </Button>
      )}
    </Container>
  );
}

export default Home;
