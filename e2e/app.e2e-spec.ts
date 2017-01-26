import { Ex4Page } from './app.po';

describe('ex4 App', function() {
  let page: Ex4Page;

  beforeEach(() => {
    page = new Ex4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
