import { RrcNg2Page } from './app.po';

describe('rrc-ng2 App', function() {
  let page: RrcNg2Page;

  beforeEach(() => {
    page = new RrcNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
