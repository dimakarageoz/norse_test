import { NorsePage } from './app.po';

describe('norse App', function() {
  let page: NorsePage;

  beforeEach(() => {
    page = new NorsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
