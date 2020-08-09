import { take } from 'lodash';
import { Card } from 'slate-frontend';
import { articleService } from 'app/service';
import { ArticleRow } from '../article-row';
import { Article } from 'slate-rp-interfaces';
import React, { useEffect, useState } from 'react';
import { defaultLatestNewsState, LatestNewsState } from './';

export function LatestNews() {
  const [state, setState] = useState<LatestNewsState>(defaultLatestNewsState);

  useEffect(() => {
    async function fetchLatestNews(): Promise<void> {
      const articles: Article[] = await articleService.getAll();
      setState({
        articles,
        showSpinner: false,
      });
    }
    fetchLatestNews();
  }, []);

  return (
    <Card>
      <h3>Latest News</h3>
      {state.articles.length === 0 && !state.showSpinner && <p>There isn't any news to share</p>}
      {take(state.articles, 3).map((article) => (
        <ArticleRow article={article} key={article.id} />
      ))}
    </Card>
  );
}
