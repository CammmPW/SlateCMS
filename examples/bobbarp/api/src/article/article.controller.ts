import * as Moment from 'moment';
import {ArticlePipe} from './article.pipe';
import {NewArticleDTO} from './article.dto';
import {Article} from 'slate-rp-interfaces';
import {ArticleService} from './article.service';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ArticleEntity, articleWire} from '../database/entity/article';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() newArticle: NewArticleDTO): Promise<Article> {
    const article: ArticleEntity = await this.articleService.create({
      ...newArticle,
      timestamp: Moment().unix(),
    });
    return articleWire(article);
  }

  @Get()
  async getAll(): Promise<Article[]> {
    const articles: ArticleEntity[] = await this.articleService.getAll();
    return articles.map(article => articleWire(article));
  }

  @Get(':articleID')
  getByID(@Param('articleID', ArticlePipe) article: ArticleEntity): Article {
    return articleWire(article);
  }
}
