import { OsdbPage } from './app.po';

describe('osdb App', () => {
  let page: OsdbPage;

  beforeEach(() => {
    page = new OsdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
