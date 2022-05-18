import { SchemaCastPipe } from './schemaCast.pipe';

describe('CastPipe', () => {
  it('create an instance', () => {
    const pipe = new SchemaCastPipe();
    expect(pipe).toBeTruthy();
  });
});
