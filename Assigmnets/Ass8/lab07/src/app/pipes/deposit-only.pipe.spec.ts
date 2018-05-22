import { DepositOnlyPipe } from './deposit-only.pipe';

describe('DepositOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new DepositOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
