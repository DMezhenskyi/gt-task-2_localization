import { GreentubeTask2Page } from './app.po';

describe('greentube-task2 App', () => {
  let page: GreentubeTask2Page;

  beforeEach(() => {
    page = new GreentubeTask2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
