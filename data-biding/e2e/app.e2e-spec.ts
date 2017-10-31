import { DataBidingPage } from './app.po';

describe('data-biding App', () => {
  let page: DataBidingPage;

  beforeEach(() => {
    page = new DataBidingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
