import { Factory, Model } from 'miragejs';
import type { Server } from 'miragejs';
import moment from 'moment';
import blogData from './blogData';

export default {
  models: {
    blog: Model,
  },

  routes(server: Server) {
    server.get('/blogs');
    server.get('/blogs/:id');
    server.post('/blogs');
    server.patch('/blogs/:id');
    server.del('/blogs/:id');
  },

  factories: {
    blog: Factory.extend({
      author(i) {
        const users = ['Emma', 'Olivia', 'Ava', 'Isabella'];
        return {
          name: users[i % users.length],
          avatar: 'https://api.realworld.io/images/demo-avatar.png',
        };
      },
      createTime(i) {
        return moment().add(i, 'd').format('YYYY-MM-DD');
      },
      title(i) {
        return blogData[i % blogData.length].title;
      },
      summary(i) {
        return blogData[i % blogData.length].summary;
      },
      tags() {
        const allTag = [
          '技术文章',
          '学习心得',
          '交流探讨',
          '日常工作',
          '总结',
          '案例',
          '解决方案',
          '实战',
          '附带源码',
          '在线示例',
        ];
        const pickOne = () => allTag[Math.floor(allTag.length * Math.random())];
        return new Array(Math.ceil(Math.random() * 4)).fill(null).map(pickOne);
      },
      star() {
        return Math.round(Math.random() * 100);
      },
    }),
  },
  seeds(server: Server) {
    server.createList('blog', 200);
  },
};
