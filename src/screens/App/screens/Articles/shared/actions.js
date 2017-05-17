import request from '../../../../../shared/request';
import { ARTICLES_QUERY, ARTICLE_QUERY, ARTICLE_DELETE_MUTATION } from './queries';

export const getArticles = () => dispatch => {
  request(ARTICLES_QUERY).then(response => (
    dispatch({
      type: 'ARTICLES_SUCCESS',
      articles: response.data.articles,
    })
  ));

  dispatch({
    type: 'ARTICLES_REQUEST',
  });
};

export const getArticle = id => dispatch => {
  request(ARTICLE_QUERY, { id }).then(response => (
    dispatch({
      type: 'ARTICLE_SUCCESS',
      article: response.data.article,
    })
  ));

  dispatch({
    type: 'ARTICLE_REQUEST',
  });
};

export const deleteArticle = (id, history) => dispatch => {
  request(ARTICLE_DELETE_MUTATION, { id }).then(response => {
    history.push('/');

    return dispatch({
      type: 'ARTICLE_DELETE_SUCCESS',
      id: response.data.id,
    });
  });

  dispatch({
    type: 'ARTICLE_DELETE_REQUEST',
    id,
  });
};