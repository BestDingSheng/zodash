import { isUp } from '../src';

describe('is-up', () => {
  it('github.com', async () => {
    // console.log('fuck:', await isUp('https://github.com/status'));
    expect(await isUp('https://github.com/status')).toBeTruthy();
  });

  it('baidu.com', async () => {
    // console.log('fuck:', await isUp('https://www.baidu.com'));
    expect(await isUp('https://www.baidu.com')).toBeTruthy();
  });
})