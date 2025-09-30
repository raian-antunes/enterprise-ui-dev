import { it, expect } from 'vitest';

it.todo('should work', (ctx) => {
  expect(ctx.meta.name).toBe('should work');
});

it.todo('should really work', ({ meta }) => {
  expect(meta.name).toBe('should really work');
});

it('should have version of `expect` bound to the current test', (ctx) => {
  ctx.expect(ctx.expect).not.toBe(expect);
});
