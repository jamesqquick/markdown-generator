import { ReadmeGeneratorPage } from './app.po';

describe('readme-generator App', () => {
  let page: ReadmeGeneratorPage;

  beforeEach(() => {
    page = new ReadmeGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
